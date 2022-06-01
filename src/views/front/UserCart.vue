<template>
  <loadingTip :active="isLoading"></loadingTip>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container mb-5">
    <div v-if="carts.length" class="border mt-5 mb-3 px-md-5 pt-5">
      <!-- 步驟條 -->
      <process :path="processPath"></process>

      <!-- 訂購列表 -->
      <table class="cart-table table table-borderless align-middle text-secondary">
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
          <tr v-for="(item, key) in carts" :key="key" class="border-bottom">
            <td>
              <img
                class="cursor-hover"
                @click="getProduct(item.product_id)"
                :src="item.product.imgLink"
                :alt="item.product.title"
                style="width: 100px"
              />
            </td>
            <td>
              <div class="cursor-hover" @click="getProduct(item.product_id)">{{ item.product.title }}</div>
              <div v-if="item.coupon" class="text-success">已套用優惠券 {{item.coupon.code}}</div>

              <!-- 行動裝置顯示 -->
              <div class="d-block d-md-none mt-2">
                <!-- 分類 -->
                <span v-if="item.product.category=='SWIM' || item.product.category=='FITNESS'">S</span>
                <span v-else-if="item.product.category=='SHOES'">36</span>
                <span v-else>-</span>
                <!-- 數量按鈕 -->
                <div class="mt-2">
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
                </div>
                <!-- 單價與小計 -->
                <div class="mt-2">{{ item.product.price }} / 件</div>
                <div class="mt-2">小計: {{ item.total }}</div>
              </div>
            </td>
            <td>
              <span v-if="item.product.category=='SWIM' || item.product.category=='FITNESS'">S</span>
              <span v-else-if="item.product.category=='SHOES'">36</span>
              <span v-else>-</span>
            </td>
            <td>
              <!-- 數量按鈕 -->
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

      <div class="input-group mt-5">
        <input v-model="couponCode" type="text" class="form-control rounded-0" placeholder="請輸入優惠代碼">
        <button @click="useCoupon" class="btn btn-outline-secondary rounded-0" type="button">使用</button>
      </div>

      <div class="d-flex flex-row-reverse mt-5">
        <ul class="cart-total">
          <li>
            <span>商品總金額</span>
            <span class="text-dark">NT$ {{ total }}</span>
          </li>
          <li>
            <span>+ 運費</span>
            <span class="text-dark">NT$ 0</span>
          </li>
          <li>
            <span>- 優惠折抵</span>
            <span class="text-dark">NT$ {{ couponTotal }}</span>
          </li>
          <li>
            <span class="h4 text-dark fw-bold">付款總金額</span>
            <span class="h4 fw-bold text-danger">NT$ {{ payTotal }}</span>
          </li>
        </ul>
      </div>

      <div class="d-flex justify-content-between py-5 border-top">
        <router-link to="/products" class="btn btn-outline-primary rounded-0"><i class="bi bi-arrow-left pe-1"></i>繼續選購</router-link>
        <router-link to="/checkfrom" class="btn btn-primary rounded-0">下一步:填寫訂購資料<i class="bi bi-arrow-right ps-1"></i></router-link>
      </div>
    </div>

    <div v-else class="border my-5 py-5">
      <div class="text-center py-5">
        <i class="bi bi-cart3 text-secondary" style="font-size: 120px;"></i>
        <p>您的購物車尚未加入商品</p>
        <router-link class="btn btn-primary rounded-0" to="/products">來去逛逛</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import process from '@/components/front/CartProcess.vue'
import banner from '@/components/front/FrontSmallBanner.vue'

export default {
  data () {
    return {
      carts: {},
      isLoading: false,
      qty: '',
      processPath: '1',
      couponCode: '',
      bannerInfo: {
        url: 'https://images.pexels.com/photos/7525655/pexels-photo-7525655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '購物車',
        position: '0% 50%'
      }
    }
  },
  inject: ['emitter'],
  computed: {
    total () {
      let total = 0
      this.carts.forEach((item) => { total += item.total })
      return Math.round(total)
    },
    payTotal () {
      let total = 0
      this.carts.forEach((item) => { total += item.final_total })
      return Math.round(total)
    },
    couponTotal () {
      return this.total - this.payTotal
    }
  },
  components: { process, banner },
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
    },
    useCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.couponCode
      }
      this.$http.post(api, { data: coupon })
        .then((res) => {
          console.log(res)
          this.isLoading = false
          if (res.data.success) {
            this.getCart()
            this.$swal({
              icon: 'success',
              title: res.data.message
            })
          } else {
            this.$swal({
              icon: 'error',
              title: res.data.message
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
  }
}
</script>
