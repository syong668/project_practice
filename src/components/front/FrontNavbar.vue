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
        <router-link to="/cart" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="bi bi-cart-fill fs-5"></i>
          <span>{{qty}}</span>
        </router-link>
      </div>

    </div>
  </nav>

  <!-- 購物車側邊列表 -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasExampleLabel">已選購商品</h3>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <table v-if="cart.length !== 0" class="table table-borderless align-middle text-secondary">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-bottom" v-for="(item, key) in cart" :key="key">
            <td>
              <img
                data-bs-dismiss="offcanvas"
                width="80"
                class="cursor-hover"
                :src="item.product.imgLink" :alt="item.product.title"
                @click="getProduct(item.product.id)"
              >
            </td>
            <td>
              <h6 data-bs-dismiss="offcanvas" class="mb-3 fw-bold cursor-hover" @click="getProduct(item.product.id)">{{item.product.title}}</h6>
              <p>{{item.product.category === 'SWIM' || item.product.category === 'FITNESS' ? 'S * ' : ''}}{{item.qty}}件</p>
              <p>單價: {{item.product.price}}</p>
            </td>
            <td>
                <button type="button" class="btn btn-sm" @click="deleteCart(item)">
                  <i class="bi bi-trash3-fill"></i>
                </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- 購物車無商品時 -->
      <div v-else>
        <div class="text-center py-5">
          <i class="bi bi-cart3 text-secondary" style="font-size: 120px;"></i>
          <p>您的購物車尚未加入商品</p>
          <span data-bs-dismiss="offcanvas">
            <router-link class="btn btn-primary rounded-0" to="/products">來去逛逛</router-link>
          </span>
        </div>
      </div>
    </div>

    <div v-if="cart.length !== 0" class="w-100 position-sticky bottom-0" data-bs-dismiss="offcanvas" aria-label="Close">
      <router-link to="/cart" class="text-light w-100 btn btn-lg btn-primary rounded-0">購物車結帳</router-link>
    </div>
  </div>
</template>

<script>
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/offcanvas'

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
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    deleteCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$swal({
        title: '確定移除?',
        text: `【${item.product.title}】從購物車移除`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#8144AD',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true
          this.$http.delete(api)
            .then((res) => {
              console.log(res)
              this.getCart()
              this.isLoading = false
              this.$swal(
                '移除成功',
                '',
                'success'
              )
              this.emitter.emit('updateNavbarCart')
            })
        }
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
