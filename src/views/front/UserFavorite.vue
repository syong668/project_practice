<template>
  <loadingTip :active="isLoading"></loadingTip>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container mb-5">
    <div v-if="favoriteProducts.length !== 0 " class="border mt-5 mb-3 px-0 px-md-5 py-0 py-md-5">
      <table class="table table-borderless align-middle text-secondary">
        <thead class="table-light">
          <tr>
            <th>縮圖</th>
            <th>商品名稱</th>
            <th class="d-none d-md-table-cell">單價</th>
            <th colspan="2"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="product in favoriteProducts" :key="product.id">
            <td>
              <img
                class="cursor-hover"
                @click="getProduct(product.id)"
                :src="product.imgLink"
                :alt="product.title"
                style="width: 100px"
              >
            </td>
            <td>
              <p class="cursor-hover" @click="getProduct(product.id)">{{ product.title }}</p>
              <p class="d-block d-md-none"> 單價: {{ product.price }} </p>
            </td>
            <td class="d-none d-md-table-cell">{{product.price}}</td>
            <td>
              <button type="button" class="btn btn-sm" @click="addCart(product.id)"><i class="bi bi-cart-plus-fill"></i></button>
            </td>
            <td>
              <button type="button" class="btn btn-sm" @click="delFavorite(product.id)"><i class="bi bi-trash3-fill"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="border my-5 py-5">
      <div class="text-center py-5">
        <i class="bi bi-clipboard-heart text-secondary" style="font-size: 120px;"></i>
        <p>您尚無加入收藏的商品</p>
        <router-link class="btn btn-primary rounded-0" to="/products">來去逛逛</router-link>
      </div>
    </div>

  </div>
</template>

<script>

import banner from '@/components/front/FrontSmallBanner.vue'

export default {
  data () {
    return {
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      products: [],
      bannerInfo: {
        url: 'https://images.pexels.com/photos/8151548/pexels-photo-8151548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '收藏清單',
        position: '0% 60%'
      },
      isLoading: false
    }
  },
  inject: ['emitter'],
  components: { banner },
  computed: {
    favoriteProducts () {
      return this.products.filter((item) => this.favoriteData.indexOf(item.id) !== -1)
    }
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
          this.isLoading = false
        }
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    delFavorite (id) {
      const favoriteID = this.favoriteData.indexOf(id)
      if (favoriteID !== -1) {
        this.favoriteData.splice(favoriteID, 1)
        this.$swal({
          icon: 'success',
          title: '移除成功'
        })
      }
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      this.emitter.emit('updateNavbarFavorite')
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.isLoading = true
      this.$http
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.data.product.title}<br>已加入購物車`,
              text: '您可至購物車確認選購細項'
            })
            this.emitter.emit('updateNavbarCart')
          } else {
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: '商品加入失敗',
              text: '請重新加入購物車'
            })
          }
        })
        .catch((err) => {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '發生錯誤',
            text: err,
            footer: '<a href="">請洽詢管理員</a>'
          })
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
