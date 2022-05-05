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
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" v-for="item in products" :key="item.id">
            <div class="card rounded-0 border-0">
              <div class="text-secondary cursor-hover" @click="getProduct(item.id)">
                <div class="product-hover">
                  <div
                    class="rounded-0 card-imge"
                    :style="{backgroundImage: `url(${item.imgLink})`}">
                  </div>
                  <div class="mask"></div>
                  <button v-if="item.unit != 0" type="button" class="btn btn-primary add-cart-btn w-100 rounded-0">加入購物車</button>

                  <div v-if="item.unit == 0" class="mask-white">
                    <p class="fs-3 border border-primary border-end-0 border-start-0 text-center text-primary fw-blod">SALE OUT</p>
                  </div>

                </div>
                <div class="pt-1 text-center">
                  <div>{{item.title}}</div>
                  <div v-if="item.price" class="fw-bold text-danger">NT${{item.price}}</div>
                  <del v-if="item.price">NT${{item.origin_price}}</del>
                  <div v-else class="fw-bold">NT${{item.origin_price}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="row mt-4">
      <div class="col">
        <table class="table align-middle mt-3">
          <thead class="table-dark">
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(https://images.pexels.com/photos/1445696/pexels-photo-1445696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }"
                ></div>
              </td>
              <td>
                <a href="">title</a>
              </td>
              <td>
                <div class="h5"></div>
                <del class="h6">原價 元</del>
                <div class="h5">現在只要 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary">
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger">
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    </div> -->
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
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
