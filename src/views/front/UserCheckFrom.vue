<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <div class="border my-5 px-0 px-lg-5 py-0 py-md-5">
      <process :path="processPath"></process>

      <div class="row justify-content-center">
        <div class="col-11 col-md-6">
          <div class="border-primary text-primary pb-1 h4 fw-bold mb-3">
            <div class="border-5 border-start border-primary fw-bold h5 ps-2 py-1 bg-light">收件資料</div>
          </div>
          <!-- 填寫收件資料 -->
          <v-form @submit="createOrder" v-slot="errors">
            <label class="form-label">姓名</label>
            <v-field v-model="form.user.name" class="form-control rounded-0" :class="{'is-invalid': errors.errors['姓名']}" name="姓名" type="text" placeholder="" rules="required">
            </v-field>
            <error-message name="姓名" class="d-block text-danger"></error-message>

            <label class="form-label mt-3">E-Mail</label>
            <v-field v-model="form.user.email" class="form-control rounded-0" :class="{'is-invalid':errors.errors['email']}" name="email" type="text" placeholder="" rules="email|required">
            </v-field>
            <error-message name="email" class="d-block text-danger"></error-message>

            <label class="form-label mt-3">電話</label>
            <v-field v-model="form.user.tel" class="form-control rounded-0" :class="{'is-invalid':errors.errors['tel']}" name="tel" type="text" placeholder="" :rules="isPhone">
            </v-field>
            <error-message name="tel" class="d-block text-danger"></error-message>

            <label class="form-label mt-3">地址</label>
            <v-field v-model="form.user.address" class="form-control rounded-0" :class="{'is-invalid':errors.errors['地址']}" name="地址" type="text" placeholder="" rules="required">
            </v-field>
            <error-message name="地址" class="d-block text-danger"></error-message>

            <label class="form-label mt-3">付款方式</label>
            <v-field
              name="付款方式"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['付款方式'] }"
              placeholder="請選擇付款方式"
              rules="required"
              as="select"
            >
              <option value="" disabled>請選擇付款方式</option>
              <option value="宅配貨到付款">宅配貨到付款</option>
              <option value="信用卡線上刷卡">信用卡線上刷卡</option>
            </v-field>
            <error-message name="付款方式" class="d-block text-danger"></error-message>

            <label class="form-label mt-3">留言</label>
            <textarea v-model="form.message" class="form-control rounded-0" name="message" placeholder="" rows="3"></textarea>

            <div class="my-5 d-flex justify-content-between">
              <router-link to="/cart" class="btn btn-outline-primary rounded-0"><i class="bi bi-arrow-left pe-1"></i>確認購買明細</router-link>
              <button type="submit" class="btn btn-primary rounded-0">完成商品訂購<i class="bi bi-arrow-right ps-1"></i></button>
            </div>

          </v-form>
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
      isLoading: false,
      processPath: 2,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderID: ''
    }
  },
  components: { process },
  methods: {
    createOrder () {
      // v-from 觸發的方法含參數，value會帶上表單內所有值
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then((res) => {
          console.log(res.data)
          this.isLoading = false
          this.orderID = res.data.orderId
          this.$router.push(`/checkout/${this.orderID}`)
        })
    },
    isRequired (val) {
      // 自訂驗證 未填寫時的錯誤狀態
      if (!val) {
        return '此欄是必填'
      }
      return true
    },
    isPhone (val) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(val) ? true : '需要正確的電話號碼'
    }
  }
}
</script>
