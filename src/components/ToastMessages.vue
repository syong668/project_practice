<template>
<!--掌管定位、以及訊息的堆疊呈現-->
  <div class="toast-container position-absolute pe-3 bottom-3 end-0">
    <ToastView v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>
</template>

<script>

import ToastView from '../components/ToastView.vue'

export default {
  components: { ToastView },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      console.log(message)
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
