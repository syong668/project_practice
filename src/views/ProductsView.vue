<template>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
    增加產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">
          {{item.origin_price}}
        </td>
        <td class="text-right">
          {{item.price}}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled == 1 || item.enable == 1">啟用</span>
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
  <!-- props 請記得前內後外
    :product="tempProduct"
    在ProductModal定義的props名稱= 底下data定義的資料
   -->
  <ProductModal
    @update-product="updateProduct"
    ref="productModal"
    :product="tempProduct"
  >
  </ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
// 載入產品列表內的兩個彈出窗
import ProductModal from '../components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      products: [], // 所有產品
      pagination: {}, // 總頁數
      tempProduct: {}, // 在新增產品時輸入的產品資料、當前載入的資料
      isNew: false // 透過這個屬性，來判斷是否是新增(true)or編輯(false)的狀態
    }
  },
  components: {
    // 區域註冊 兩個彈出窗:新增(修改)產品、刪除產品
    ProductModal,
    DelModal
  },
  methods: {
    // 取得產品列表資訊
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`
      console.log(api)
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.products = res.data.products // 取得所有產品資料並賦予到data裡的products
            this.pagination = res.data.pagination // 取得總頁碼並賦予到data裡的pagination
          }
        })
    },
    // 開啟新增/修改產品表單
    openModal (isNew, item) {
      console.log(isNew, item)
      if (isNew) {
        // 如果是新增品項(true)，就把目前的產品表單清空
        this.tempProduct = {}
      } else {
        // 如果是編輯品項(false)，就將編輯的產品資料代入表單內
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal() // 將表單彈出窗打開
    },

    // 新增/修改表單裡的「確認」按鈕
    updateProduct (item) {
      // 將emit傳入的新產品資料item，更新到tempProduct
      this.tempProduct = item
      console.log('price型別' + typeof this.tempProduct.price)

      // 新增產品資料，以下預設api及傳送方法
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      // 一樣依照isNew判斷，是編輯的話，更改api及傳送方法
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      // 上面判斷完畢後，最後執行遠端傳送
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          console.log(res) // 確認結果
          productComponent.hideModal() // 新增完畢後關閉彈出窗
          this.getProducts() // 將產品列表更新並重新渲染
        })
    },

    // 開啟 刪除Modal
    openDelProductModal (item) {
      this.tempProduct = { ...item } // 載入當前資料(利於delProduct()代入id參數)
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },

    // 刪除視窗裡的「確認刪除」按鈕
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url)
        .then((response) => {
          console.log(response.data)
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getProducts()
        })
    }
  },
  created () {
    this.getProducts()
  }

}
</script>
