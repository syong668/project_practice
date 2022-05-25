<template>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <!-- 預約成功後顯示 -->
        <div v-if="!ReserveFrom" class="d-flex flex-column align-items-center" style="padding: 54px 0px">
          <i class="bi bi-check-circle text-primary" style="font-size: 120px;"></i>
          <span class="fs-1 mb-4 text-primary">您的預約已建立</span>
          <p>您的預定時間為<span class="fs-4"> {{ReserveData.date}} {{ReserveData.time}} </span>，預約人數<span class="fs-4"> {{ReserveData.peopleNum}} </span>位</p>
          <p>期待您的到來，我們將為您提供一對一的試穿服務</p>
        </div>

        <!-- 預約須知 -->
        <div
          class="border-5 border-start border-primary bg-light fw-bold h5 ps-2 py-1 mt-5"
        >
          預約須知
        </div>
        <ol class="list-group list-group-numbered mb-5">
          <li class="list-group-item border-0">
            預約一次只限定兩位進場(含預約者)，敬請見諒。
          </li>
          <li class="list-group-item border-0">
            採預約優先制，為確保您的使用權益，敬請提早預約。
          </li>
          <li class="list-group-item border-0">
            身上有明顯異味(如煙味、香水、體味等)，恕無法試穿。
          </li>
          <li class="list-group-item border-0">
            預約體驗時間45分鐘，請準時到場可保障充分時間試穿。
          </li>
          <li class="list-group-item border-0">
            若有不便取消預約請儘早，以共同維護良好試穿品質。
          </li>
          <li class="list-group-item border-0">
            試衣間服務據點
            <iframe class="d-block w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.968644825625!2d120.30399051534924!3d22.61764603701464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e048301eebedd%3A0xe2947de23c24c809!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A5Zub57at5LiJ6LevMTY36Jmf!5e0!3m2!1szh-TW!2stw!4v1653306020343!5m2!1szh-TW!2stw" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </li>
        </ol>

        <!-- 預約表單 -->
        <div v-if="ReserveFrom" class="my-5">
          <div
            class="border-5 border-start border-primary fw-bold h5 bg-light ps-2 py-1 mb-4"
          >
            填寫預約單
          </div>
          <v-form @submit="creatReserve" v-slot="errors">
            <label class="form-label">預約日期</label>
            <v-field
              v-model="ReserveData.date"
              class="form-control rounded-0"
              name="預約日期"
              type="date"
              rules="required"
              :class="{ 'is-invalid': errors.errors['預約日期'] }"
              :min="todayDate"
            >
            </v-field>
            <error-message
              name="預約日期"
              class="d-block text-danger"
            ></error-message>

            <!-- 預約時段 -->
            <label class="form-label mt-3">預約時段</label>
            <v-field
              v-model="ReserveData.time"
              name="預約時段"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['預約時段'] }"
              placeholder="請選擇預約時段"
              rules="required"
              as="select"
            >
              <option value="" disabled>請選擇預約時段</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="13:00">13:30</option>
              <option value="15:00">15:00</option>
              <option value="15:00">16:30</option>
              <option value="15:00">19:30</option>
            </v-field>
            <error-message
              name="預約時段"
              class="d-block text-danger"
            ></error-message>

            <!-- 預約人數 -->
            <label class="form-label mt-3">預約人數</label>
            <v-field
              v-model="ReserveData.peopleNum"
              name="預約人數"
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['預約人數'] }"
              placeholder="請選擇預約人數"
              rules="required"
              as="select"
            >
              <option value="" disabled>請選擇預約人數</option>
              <option value="1">1人</option>
              <option value="2">2人</option>
            </v-field>
            <error-message
              name="預約人數"
              class="d-block text-danger"
            ></error-message>

            <!-- 預約姓名 -->
            <label class="form-label mt-3">預約姓名</label>
            <v-field
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['姓名'] }"
              name="姓名"
              type="text"
              placeholder=""
              rules="required"
            >
            </v-field>
            <error-message
              name="姓名"
              class="d-block text-danger"
            ></error-message>

            <!-- Email -->
            <label class="form-label mt-3"
              >E-Mail(請填寫email，以便收到預約提醒)</label
            >
            <v-field
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['email'] }"
              name="email"
              type="text"
              placeholder=""
              rules="email|required"
            >
            </v-field>
            <error-message
              name="email"
              class="d-block text-danger"
            ></error-message>

            <!-- 電話 -->
            <label class="form-label mt-3">電話</label>
            <v-field
              class="form-control rounded-0"
              :class="{ 'is-invalid': errors.errors['tel'] }"
              name="tel"
              type="text"
              placeholder=""
              :rules="isPhone"
            >
            </v-field>
            <error-message name="tel" class="d-block text-danger"></error-message>

            <!-- 備註 -->
            <label class="form-label mt-3">備註</label>
            <textarea
              class="form-control rounded-0"
              name="message"
              placeholder=""
              rows="3"
            ></textarea>

            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary rounded-0 mt-3">送出預約</button>
            </div>

          </v-form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/front/FrontSmallBanner.vue'

export default {
  data () {
    return {
      bannerInfo: {
        url: 'https://images.pexels.com/photos/1051746/pexels-photo-1051746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '試衣間預約',
        position: '0% 50%'
      },
      ReserveFrom: true,
      ReserveData: {
        date: '',
        time: '',
        peopleNum: ''
      }
    }
  },
  components: { banner },
  computed: {
    todayDate () {
      const Today = new Date()
      let month = (Today.getMonth() + 1)
      let date = Today.getDate()
      if (month < 10) { month = '0' + (Today.getMonth() + 1) }
      if (date < 10) { date = '0' + Today.getDate() }
      return Today.getFullYear() + '-' + month + '-' + date
    }
  },
  methods: {
    creatReserve (val) {
      console.log('送出表單')
      this.ReserveFrom = false
      window.scrollTo(0, 0)
    },
    isPhone (val) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(val) ? true : '需要正確的電話號碼'
    }
  }
}
</script>
