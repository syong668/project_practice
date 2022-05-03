<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container rrrddd">
    <div class="border mt-4">

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
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.products = res.data.products
            this.isLoading = false
          }
        })
    }
    // 2.取得單一商品頁
  },
  created () {
    this.getProducts()
  }
}
</script>
