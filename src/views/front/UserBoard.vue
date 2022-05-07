<template>
    <!-- 之後再把user navbar拆出來做成元件 -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/user/"
          >MyProject</router-link
        >
      </div>
    </nav>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessages></ToastMessages>
      <router-view />
    </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: { ToastMessages },
  provide () {
    return {
      emitter
    }
  }
}
</script>
