<template>
    <navbar/>
    <RouterView :key="$route.fullPath"/>
    <frontfooter></frontfooter>
</template>

<script>
import emitter from '@/methods/emitter'
import navbar from '@/components/front/FrontNavbar'
import frontfooter from '@/components/front/FrontFooter'

export default {
  components: { navbar, frontfooter },
  provide () {
    return {
      emitter
    }
  }
}
</script>
