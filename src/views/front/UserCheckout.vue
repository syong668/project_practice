<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <div class="border mt-5 mb-3 pt-5">
      <process :path="processPath"></process>
      <div class="row justify-content-center flex-md-row-reverse mt-5 py-5">
        <div class="col-11 col-xl-6">
            <div class="d-flex flex-column justify-content-between mb-3">
              <div class="bg-light text-primary border-5 border-start border-primary fw-bold h5 ps-2 py-1">購物清單
              </div>
              <table class="table table-sm align-middle checkout-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>產品</th>
                    <th>數量</th>
                    <th>單價</th>
                    <th>小計</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in products" :key="item.id">
                    <td>
                      <img width="80" :src="item.product.imgLink" :alt="item.product.title">
                    </td>
                    <td>{{item.product.title}}<br><br>S</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.product.price}}</td>
                    <td>{{item.total}}</td>
                  </tr>
                </tbody>

                <tfoot class="table table-borderless text-end">
                  <tr v-if="couponTotal">
                    <td></td>
                    <td colspan="2">折扣金額</td>
                    <td colspan="2">{{couponTotal}}</td>
                  </tr>
                  <tr class="text-danger">
                    <td></td>
                    <td colspan="2">應付金額</td>
                    <td colspan="2">NT$ {{order.total}}</td>
                  </tr>
                </tfoot>
              </table>

            </div>
        </div>
        <div class="col-11 col-xl-4">
          <div class="border-primary text-primary pb-1 mb-3">
            <div class="border-5 border-start border-primary fw-bold h5 ps-2 py-1 bg-light">收件資料</div>

            <table class="table">
              <tbody>
                <tr>
                  <th>姓名</th>
                  <td>{{user.name}}</td>
                </tr>
                <tr>
                  <th>電話</th>
                  <td>{{user.tel}}</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>{{user.address}}</td>
                </tr>
                <tr>
                  <th>e-mail</th>
                  <td>{{user.email}}</td>
                </tr>
                <tr>
                  <th>留言內容</th>
                  <td>{{order.message}}</td>
                </tr>
                <tr>
                  <th>訂單編號</th>
                  <td>{{order.create_at}}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td :class="{'text-success':order.is_paid,'text-danger':!order.is_paid}">
                    {{order.is_paid ? '已付款':'未付款'}}
                  </td>
                </tr>
              </tbody>
            </table>
            <button v-if="!order.is_paid" @click.prevent="toPaid" class="btn btn-outline-primary rounded-0 w-100">點此付款去</button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import process from '@/components/front/CartProcess'

export default {
  data () {
    return {
      processPath: 3,
      orderID: '',
      order: [],
      products: [],
      user: [],
      isLoading: false
    }
  },
  computed: {
    couponTotal () {
      let total = 0
      Object.values(this.products).forEach((item) => {
        total += item.total
      })
      return total - this.order.total
    }
  },
  components: { process },
  methods: {
    getOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderID}`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.order = res.data.order
            this.products = { ...res.data.order.products }
            this.user = { ...res.data.order.user }
          } else {
            this.$swal({
              icon: 'error',
              title: '載入失敗',
              text: '請重新整理頁面'
            })
          }
          this.isLoading = false
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
    toPaid () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderID}`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder()
          } else {
            this.$swal({
              icon: 'error',
              title: '載入失敗',
              text: '請重新整理頁面'
            })
          }
          this.isLoading = false
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
    this.orderID = this.$route.params.orderID
    this.getOrder()
  }
}
</script>
