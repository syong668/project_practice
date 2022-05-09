<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-2 d-none d-md-block">
        <div class="list-group list-group-flush rounded-0">
          <!-- <a href="#" class="list-group-item list-group-item-action disabled fw-bold">產品類別</a> -->
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            SALE
          </a>
          <a href="#" class="list-group-item list-group-item-action">SWIM</a>
          <a href="#" class="list-group-item list-group-item-action">FITNESS</a>
          <a href="#" class="list-group-item list-group-item-action">SHOES</a>
          <a href="#" class="list-group-item list-group-item-action"
            >ACCESSORY</a
          >
          <a
            href="#"
            class="list-group-item list-group-item-action disabled"
            tabindex="-1"
            aria-disabled="true"
            >OTHER</a
          >
        </div>
      </div>
      <div class="col-12 col-md-10">
        <div class="row">
          <div
            class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
            v-for="item in products"
            :key="item.id"
          >
            <div class="card rounded-0 border-0">
              <div class="text-secondary cursor-hover">
                <div class="product-hover">
                  <div
                    class="rounded-0 card-imge"
                    :style="{ backgroundImage: `url(${item.imgLink})` }"
                  ></div>

                  <div class="mask" @click="getProduct(item.id)"></div>

                  <button
                    v-if="item.unit != 0"
                    type="button"
                    class="btn btn-primary add-cart-btn w-100 rounded-0"
                    @click.prevent="addCart(item.id)"
                  >
                    加入購物車
                  </button>

                  <div
                    v-if="item.unit == 0"
                    class="mask-white"
                    @click="getProduct(item.id)"
                  >
                    <p
                      class="fs-3 border border-primary border-end-0 border-start-0 text-center text-primary fw-blod"
                    >
                      SALE OUT
                    </p>
                  </div>
                </div>
                <div class="pt-1 text-center" @click="getProduct(item.id)">
                  <div>{{ item.title }}</div>
                  <div v-if="item.origin_price" class="fw-bold text-danger">
                    NT${{ item.price }}
                  </div>
                  <del v-if="item.origin_price">NT${{ item.origin_price }}</del>
                  <div v-else class="fw-bold">NT${{ item.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: '',
      products: '',
      isLoading: false
    }
  },
  methods: {
    // 1.取得商品列表
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.products = res.data.products
          this.isLoading = false
        }
      })
    },
    // 2.取得單一商品頁
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
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
