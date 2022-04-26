<template>
  <Navbar></Navbar>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<script>

import Navbar from '../components/NavbarView.vue'

export default {
  components: {
    Navbar
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
