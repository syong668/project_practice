<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
    <div class="container d-flex align-items-center">
      <!-- hamburger -->
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- logo -->
      <router-link class="navbar-brand me-0 me-lg-4" to="/">
        <h1 class="fs-3 mb-0 text-primary">SIRA SWIM</h1>
      </router-link>

      <!-- heart & cart -->
      <div class="heart-cart d-flex d-lg-none me-4">
        <router-link to="/favorite" class="me-4" href="#">
          <i class="bi bi-suit-heart-fill fs-5"></i>
          <span v-if="favoriteData.length > 0">{{favoriteData.length}}</span>
        </router-link>
        <router-link to="/cart" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="bi bi-cart-fill fs-5"></i>
          <span v-if="cartQty > 0">{{cartQty}}</span>
        </router-link>
      </div>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link me-2" to="/">首頁</router-link>
          <router-link class="nav-link me-2" to="/about">關於我們</router-link>
          <router-link class="nav-link me-2" to="/products">所有產品</router-link>
          <router-link class="nav-link me-2" to="/reserve">試衣間預約</router-link>
        </div>
      </div>

      <!-- PC heart & cart-->
      <div class="heart-cart d-none d-lg-flex">
        <router-link to="/favorite" class="me-5" href="#">
          <i class="bi bi-suit-heart-fill fs-5"></i>
          <span v-if="favoriteData.length > 0">{{favoriteData.length}}</span>
        </router-link>
        <router-link to="/cart" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
          <i class="bi bi-cart-fill fs-5"></i>
          <span v-if="cartQty > 0">{{cartQty}}</span>
        </router-link>
      </div>

    </div>
  </nav>

  <!-- 購物車側邊列表 -->
  <div v-if="this.$route.path !== '/cart'" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <loadingTip :active="isLoading"></loadingTip>
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
              <h6 data-bs-dismiss="offcanvas" class="my-3 fw-bold cursor-hover" @click="getProduct(item.product.id)">{{item.product.title}}</h6>
              <p>{{item.product.category === '比基尼' || item.product.category === '運動服' ? 'S' : ''}}</p>
              <!-- 數量按鈕 -->
              <div class="d-flex align-items-center my-4">
                <button
                  class="btn btn-sm rounded-0 d-flex align-items-center border"
                  type="button"
                  :class="{ disabled: item.qty == 1 }"
                  @click="updateCart(item, 'reduceQty')"
                >
                  <i class="bi bi-dash"></i>
                </button>

                <span
                  class="form-control-sm text-center border-top border-bottom rounded-0"
                  >{{ item.qty }}</span
                >

                <button
                  class="btn btn-sm d-flex align-items-center border rounded-0"
                  type="button"
                  @click="updateCart(item, 'addQty')"
                >
                  <i class="bi bi-plus"></i>
                </button>
              </div>
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
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false,
      qty: '' // +-數量時所需的暫存值
    }
  },
  inject: ['emitter'],
  computed: {
    cartQty () {
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
    },
    updateCart (item, status) {
      this.isLoading = true
      this.qty = item.qty
      if (status === 'addQty') {
        this.qty++
      } else if (status === 'reduceQty') {
        this.qty--
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cartData = {
        product_id: item.product.id,
        qty: this.qty
      }
      this.$http.put(api, { data: cartData })
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            console.log(res)
            this.getCart()
            this.emitter.emit('updateNavbarCart')
          } else {
            this.$swal({
              icon: 'error',
              title: '更新失敗',
              text: '請重新操作'
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
    this.getCart()
  },
  mounted () {
    // emitter跨元件傳送購物車件數，從Cart & Products
    this.emitter.on('updateNavbarCart', () => { this.getCart() })
    this.emitter.on('updateNavbarFavorite', () => { this.favoriteData = JSON.parse(localStorage.getItem('favorite')) || [] })
  }
}
</script>
