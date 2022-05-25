<template>
  <loadingTip :active="isLoading"></loadingTip>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container mb-5">
    <div v-if="favoriteProducts.length !== 0 " class="border mt-5 mb-3 px-md-5 pt-5">
      <table class="table table-borderless align-middle text-secondary">
        <thead class="table-light">
          <tr>
            <th>縮圖</th>
            <th>商品名稱</th>
            <th>單價</th>
            <th>移除</th>
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
              <span class="cursor-hover" @click="getProduct(product.id)">{{product.title}}</span>
            </td>
            <td>{{product.price}}</td>
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
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
