<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
    <div class="container d-flex align-items-center">
      <router-link class="navbar-brand me-4" to="/">
        <h1 class="fs-3 mb-0 text-primary">SIRA SWIM</h1>
      </router-link>
      <!-- hamburger -->
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link me-2" to="/">首頁</router-link>
          <router-link class="nav-link me-2" to="/about">關於我們</router-link>
          <router-link class="nav-link me-2" to="/products">所有產品</router-link>
          <router-link class="nav-link me-2" to="/reserve">試衣間預約</router-link>
          <div class="d-flxe d-lg-none">
            <router-link to="/favorite" class="nav-link me-2">收藏清單[{{favoriteData.length}}]</router-link>
            <router-link to="/cart" class="nav-link me-2">購物車[{{qty}}]</router-link>
          </div>
        </div>
      </div>

      <!-- heart & cart -->
      <div class="heart-cart ms-auto d-none d-lg-flex">
        <router-link to="/favorite" class="me-5" href="#">
          <i class="bi bi-suit-heart-fill fs-5"></i>
          <span>{{favoriteData.length}}</span>
        </router-link>
        <router-link to="/cart">
          <i class="bi bi-cart-fill fs-5"></i>
          <span>{{qty}}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'

export default {
  data () {
    return {
      cart: [],
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  inject: ['emitter'],
  computed: {
    qty () {
      let qty = 0
      this.cart.forEach((item) => {
        qty += item.qty
      })
      return qty
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          console.log(res.data.data.carts)
          this.cart = res.data.data.carts
        })
    }
  },
  created () {
    this.getCart()
  },
  mounted () {
    // emitter跨元件傳送購物車件數，從Cart & Products
    this.emitter.on('updateNavbarCart', () => { this.getCart() })
    this.emitter.on('updateNavbarFavorite', () => { this.favoriteData = JSON.parse(localStorage.getItem('favorite')) || [] })
  }
}
</script>
