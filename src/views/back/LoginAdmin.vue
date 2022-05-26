<template style="height: 0px;">
  <loadingTip :active="isLoading"></loadingTip>
  <div class="bg">
    <div class="container">
      <form class="row justify-content-center pt-5"
      @submit.prevent="signIn"
      >
        <div class="col-md-6 mt-5 login">
          <h1 class="h3 mb-3 font-weight-normal my-5">SIRA SWIM 後台登入</h1>

          <div class="mb-4">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              v-model="user.username"
            />
          </div>

          <div class="mb-4">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>

          <div class="text-end my-4">
              <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      console.log(api)
      this.isLoading = true
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            // const { token, expired } = res.data // 老師示範的物件解構寫法，與下方59.60行是相同的
            const token = res.data.token
            const expired = res.data.expired

            document.cookie = `hexToken=${token}; expires=${new Date(expired)}` // 將token加入cookei
            console.log(res)

            this.$router.push('/dashboard/products')
            this.isLoading = false
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>

.bg {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/imges/HomePhoto1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.login {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
  color: #fff;
}

</style>
