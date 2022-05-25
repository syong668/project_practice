<template>
  <div
    class="small-banner"
    :style="[{'background-image': `url(${bannerInfo.url})`},{'background-position': `${bannerInfo.position}`}]"
  >
    <span class="fs-1">{{bannerInfo.title}}</span>
  </div>
</template>

<script>
export default {
  props: ['bannerInfo']
}
</script>

<style lang="scss" scoped>
  .small-banner {
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      padding: 16px 24px;
      color: #fff;
      background-image: linear-gradient(rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3))
    }
  }
</style>
