<template>
<!--掌管定位、以及訊息的堆疊呈現-->
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <!-- <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    /> -->
    <ToastView></ToastView>
  </div>
</template>

<script>

// import ToastView from '../components/ToastView.vue'
import ToastView from '../components/HelloWorld.vue'

export default {
  components: { ToastView }
}
</script>
