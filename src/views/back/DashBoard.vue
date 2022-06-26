<template>
  <Navbar></Navbar>
  <div class="container-fluid vh-100 bg-light">
    <ToastMessages></ToastMessages>
    <RouterView/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import Navbar from '@/components/back/NavbarAdmin.vue'

export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)

    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`
    console.log(api)
    this.$http.post(api)
      .then((res) => {
        console.log(res)
        console.log(res.data.message)
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
</script>
