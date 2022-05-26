<template>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container my-5">
    <div class="row justify-content-center mb-5">
      <div class="d-none d-md-block col-md-7 about about-img1"></div>
      <div class="col-12 col-md-5 pt-3 pt-md-0 bg-light d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h3 class="d-inline-block pb-2 border-bottom border-3 border-primary">品牌理念</h3>
          <p data-aos="fade-left" data-aos-duration="1000" class="lh-lg mt-4">
            泳裝品牌SIRA SWIM 來自佛羅里達州<br>由四位熱愛水上運動的女孩創立<br>
            除了讓喜歡運動的女孩不僅在水上活動時能穿著舒適穩定的泳裝<br>
            也提供更兼具機能性的運動服裝，不管上山下海都能穿著SIRA SWIM<br>
            享受運動帶來的快樂，並勇於挑戰自己、做自己
          </p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-md-5 pt-3 pt-md-0 bg-light d-flex justify-content-center align-items-center">
        <div class="text-center">
          <h3 class="d-inline-block pb-2 border-bottom border-3 border-primary">經營理念</h3>
          <p data-aos="fade-right" data-aos-duration="1000" class="lh-lg mt-4">
            我們精心挑選較柔軟的布料<br>
            穿起來比一般泳衣布料更舒服、貼身及耐用<br>
            每款服裝設計都考量不同身型，讓每位女孩獨特的美麗線條呈現出來<br>
            我們希望SIRA SWIM的比基尼不只是 「僅能下水的服裝」<br>
            而是可以做為時尚穿搭，展現自信的服飾
          </p>
        </div>
      </div>
      <div class="d-none d-md-block col-md-7 about about-img2"></div>
    </div>
  </div>
</template>

<script>
import banner from '@/components/front/FrontSmallBanner.vue'
export default {
  data () {
    return {
      bannerInfo: {
        url: 'https://images.pexels.com/photos/762103/pexels-photo-762103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'ABOUT',
        position: '0% 75%'
      }
    }
  },
  components: { banner }
}
</script>

<style lang="scss" scoped>

.about {
  height: 380px;
  background-size: cover;
  background-position:center center;
  background-repeat: no-repeat;
  &.about-img1 {background-image: url('https://images.pexels.com/photos/6132012/pexels-photo-6132012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');}
  &.about-img2 {background-image: url('https://images.pexels.com/photos/2994952/pexels-photo-2994952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');}
}

</style>
