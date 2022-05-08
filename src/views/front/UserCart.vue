<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <div v-if="carts.length" class="border mt-5 mb-3 px-md-5 pt-5">
      <!-- 步驟條 -->
      <ul class="process mb-5 d-none d-md-flex">
        <li :class="{ 'bg-primary': processPath == '/user/cart' }">
          <i
            class="bi bi-cart-check-fill fs-2"
            :class="{ 'text-light': processPath == '/user/cart' }"
          ></i>
          <span :class="{ 'text-light': processPath == '/user/cart' }"
            >確認購買明細</span
          >
        </li>
        <li>
          <i class="bi bi-person-lines-fill fs-2"></i>
          <span>填寫訂購資料</span>
        </li>
        <li>
          <i class="bi bi-check-circle-fill fs-2"></i>
          <span>完成商品訂購</span>
        </li>
      </ul>

      <!-- 訂購列表 -->
      <table class="table table-borderless align-middle text-secondary">
        <thead class="table-light">
          <tr>
            <th>縮圖</th>
            <th>商品名稱</th>
            <th>尺寸</th>
            <th>數量</th>
            <th>單價</th>
            <th>小計</th>
            <th>刪除</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, key) in carts" :key="key">
            <td>
              <img
                class="cursor-hover"
                @click="getProduct(item.product_id)"
                :src="item.product.imgLink"
                :alt="item.product.title"
                style="width: 100px"
              />
            </td>
            <td>{{ item.product.title }}</td>
            <td>S</td>
            <td>
              <div class="d-flex align-items-center">
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
            </td>
            <td>
              <span>{{ item.product.price }}</span>
            </td>
            <td>
              <span>{{ item.total }}</span>
            </td>
            <td>
              <button type="button" class="btn btn-sm" @click="deleteCart(item)">
                <i class="bi bi-trash3-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="請輸入優惠代碼">
        <button class="btn btn-outline-secondary" type="button">使用</button>
      </div>

      <ul class="cart-total py-5">
        <li>總計金額</li>
        <li><span>NT$ 15400</span></li>
      </ul>

      <div class="d-flex flex-row-reverse py-5 border-top">
        <button class="btn btn-primary rounded-0">下一步:填寫訂購資料</button>
      </div>
    </div>

    <div v-else class="border my-5 py-5">
      <div class="text-center py-5">
        <p>您的購物車尚未加入商品</p>
        <button class="btn btn-primary rounded-0" type="button">
          繼續購物
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: {},
      isLoading: false,
      qty: '',
      processPath: ''
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http
        .get(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.data.carts)
            this.carts = res.data.data.carts // 取得購物車資料
            this.isLoading = false
          } else {
            this.$swal({
              icon: 'error',
              title: '載入失敗',
              text: '請重新整理頁面'
            })
          }
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: '發生錯誤',
            text: err,
            footer: '<a href="">請洽詢管理員</a>'
          })
          this.isLoading = false
        })
    },
    getProduct (id) {
      this.$router.push(`/user/product/${id}`)
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
            this.getCart()
            console.log(res)
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
    this.processPath = this.$route.path
    console.log(this.$route.path)
  }
}
</script>
