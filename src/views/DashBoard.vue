<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '../components/NavbarView.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  // provide 可以讓內層的元件使用外層的功能
  provide () {
    return {
      emitter
    }
  },
  created () {
    // document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)

    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    console.log(api)
    this.$http.post(api)
      .then((res) => {
        console.log(res)
        console.log(res.data.message)
        if (!res.data.success) { // 回傳是false的話讓他執行true的動作
          this.$router.push('login')
        }
      })
  }
}
</script>
