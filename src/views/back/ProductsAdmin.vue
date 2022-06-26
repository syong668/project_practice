<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <div class="text-end pt-5">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加產品
      </button>
    </div>
    <table class="container table mt-4 table-hover">
      <thead class="table-dark">
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <span class="text-success" v-if="item.is_enabled == 1">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <PageView
      class="d-flex justify-content-center mt-5"
      :page="pagination"
      @emit-page="getProducts"
    ></PageView>
  </div>

  <ProductModal
    @update-product="updateProduct"
    ref="productModal"
    :product="tempProduct"
  >
  </ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>

import ProductModal from '@/components/back/ProductModal.vue'
import DelModal from '@/components/back/DelModal.vue'
import PageView from '@/components/back/PageAdmin.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {}, // 總頁數(會經由 props 傳遞到 PageView )
      tempProduct: {}, // 在新增產品時輸入的產品資料、當前載入的資料
      isNew: false, // 透過這個屬性，來判斷是否是新增 or 編輯的狀態
      isLoading: false,
      lastPage: ''
    }
  },
  components: {
    ProductModal,
    DelModal,
    PageView
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      this.lastPage = page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.products = res.data.products
            this.pagination = res.data.pagination
            this.isLoading = false
          }
        })
    },
    // 開啟新增/修改產品表單
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },

    // 新增/修改表單裡的「確認」按鈕
    updateProduct (item) {
      // 將emit傳入的新產品資料item，更新到tempProduct
      this.tempProduct = item

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 照isNew判斷，是編輯的話，更改api及傳送方法
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      const productComponent = this.$refs.productModal
      this.isLoading = true
      productComponent.hideModal()
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          this.getProducts(this.lastPage)
          this.isLoading = false
          this.$httpMessageStatus(res)
        })
    },

    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },

    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.isLoading = true
      this.$http.delete(url)
        .then((response) => {
          console.log(response.data)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getProducts(this.lastPage)
          this.isLoading = false

          this.$httpMessageStatus(response, '刪除')
        })
    }
  },
  created () {
    this.getProducts()
  }

}
</script>
