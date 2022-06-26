<template>
  <swiper-view
    :navigation="true"
    :autoplay="true"
  >
    <swiper-slide class="home-banner photo1 text-white">
      <div class="content">
        <h3>美麗 x 自信 x 時尚</h3>
        <span class="d-block mb-3">挑選專屬你的風格比基尼</span>
        <router-link to="/products" class="btn btn-outline-light rounded-0">SHOP NOW</router-link>
      </div>
    </swiper-slide>
    <swiper-slide class="home-banner photo2">
      <div class="content2">
        <h3 class="text-primary fw-bold">全館免運費</h3>
        <span class="fs-sm">歡慶開幕不限金額消費</span>
      </div>
    </swiper-slide>
  </swiper-view>

  <!-- New Arrival -->
  <div class="container mt-5">
    <div class="row mt-5 justify-content-center">
      <h5
        class="col-10 col-md-4 py-3 mb-5 border border-primary text-center text-primary fw-bold"
      >
        新品推薦
      </h5>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" class="row mb-5 justify-content-center">
      <div class="col-12 mb-5">
        <swiper-view
          :slidesPerView="4"
          :spaceBetween="16"
          :slidesPerGroup="4"
          :loop="false"
          :loopFillGroupWithBlank="false"
          :navigation="false"
          :breakpoints="swiper.breakpoints"
          :lazy="true"
          :autoplay="true"
        >
          <swiper-slide
            v-for="item in NewProducts" :key="item.id"
            class="item"
            :style="`background-image: url('${item.imgLink}');`"
          >
            <button @click="toProduct(item.id)" class="shopnow-btn rounded-0 btn">
              <span class="h4">SHOP NOW</span>
            </button>

          </swiper-slide>
        </swiper-view>
      </div>
    </div>
  </div>

  <!-- 開幕慶折扣 -->
  <div class="container-fluid opensale-img mb-5">
    <div
      data-aos="fade-right"
      data-aos-anchor-placement="bottom-bottom"
      data-aos-delay="300"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      class="container open border border-white">
      <h2>/ 歡慶開幕 /</h2>
      <p>即日起至2022-09-30 全館不限金額消費 宅配免運 + 50%折扣</p>
      <span class="fs-1">SIRA50</span>
    </div>
  </div>

  <!-- Product -->
  <div class="container mt-5">
    <div class="row mt-5 justify-content-center">
      <h5
        class="col-10 col-md-4 py-3 mb-5 border border-primary text-center text-primary fw-bold"
      >
        我們的產品
      </h5>
    </div>
    <div

      class="row mb-5 justify-content-center"
    >
      <div class="col-11 col-lg-8 mb-5">
        <div
          data-aos="fade-down"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          data-aos-easing="ease-out"
          class="row justify-content-between"
        >
          <div @click="toAllProduct" class="product-img photo1 col-6 overflow-hidden">
            <div class="mask"></div>
            <span class="h3 fw-bold">比基尼</span>
          </div>
          <div @click="toAllProduct" class="product-img photo2 col-6">
            <div class="mask"></div>
            <span class="h3 fw-bold">運動服</span>
          </div>
          <div @click="toAllProduct" class="product-img photo3 col-6">
            <div class="mask"></div>
            <span class="h3 fw-bold">鞋子</span>
          </div>
          <div @click="toAllProduct" class="product-img photo4 col-6">
            <div class="mask"></div>
            <span class="h3 fw-bold">配件</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dressing Room -->
  <div class="container mt-5">
    <div class="row mt-5 justify-content-center">
      <h5
        class="col-10 col-md-4 py-3 mb-5 border border-primary text-center text-primary fw-bold"
      >
        比基尼試衣間
      </h5>
    </div>
    <div
      data-aos="fade-down"
      data-aos-anchorPlacement="top-top"
      data-aos-duration="2000"
      class="row mb-5 justify-content-center"
    >
      <div class="col-11 col-lg-9 mb-5">
        <div class="dressing-room mb-5">
          <div class="pic pic-img1">
          </div>
          <div class="room-text bg-primary">
            <h4 class="fw-bold mb-3">比基尼試穿服務</h4>
            <span>諮詢比基尼顧問協助您挑選，找到最適合妳的比基尼</span>
          </div>
        </div>

        <div class="dressing-room mb-5">
          <div class="room-text bg-primary">
            <h4 class="fw-bold mb-3">個人專屬試衣間</h4>
            <span class="">為您提供乾淨舒適的試穿空間</span>
          </div>
          <div class="pic pic-img2"></div>
        </div>

      </div>
    </div>
  </div>

  <!-- 訂閱BANNER -->
  <div class="container-fluid subscription">
    <div class="container pt-3">
      <v-form class="mt-5">
        <h2 class="mb-3 text-primary">訂閱 SIRA SWIM</h2>
        <div class="input-group mb-3 input-width">
          <v-field name="email" type="text" class="form-control rounded-0 border-0" placeholder="輸入Email，訂閱SWIM的優惠消息" rules="email|required"></v-field>
          <button class="btn btn-primary rounded-0">訂閱</button>
        </div>
        <error-message name="email" class="d-block text-danger"></error-message>
      </v-form>
    </div>
  </div>

</template>
<script>

export default {
  data () {
    return {
      products: [],
      swiper: {
        breakpoints: {
          0: {
            slidesPerView: 3,
            spaceBetween: 5,
            slidesPerGroup: 3
          },
          567: {
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            slidesPerGroup: 4
          }
        }
      }
    }
  },
  computed: {
    NewProducts () {
      return this.products.slice(10, this.products.length)
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.products = res.data.products
        }
      })
    },
    toProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    toAllProduct () {
      this.$router.push('/products')
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>

.home-banner {
  width: 100%;
  position: relative;
  padding-bottom: 40%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width:768px) {
    padding-bottom: 60%;
  }
  @media (max-width:576px) {
    padding-bottom: 100%;
  }
  &.photo1 {
    background-image: url('@/assets/imges/HomePhoto2.jpg');
  }
  &.photo2{
    background-image: url('https://images.pexels.com/photos/5269427/pexels-photo-5269427.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    opacity: 0.8;
    font-size: 40px;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    @media (max-width:768px) {
      h3{font-size:20px;}
      font-size:16px;
    }
  }
  .content2 {
    padding: 32px;
    opacity: 0.8;
    background-color: #fff;
    position: absolute;
    top: 10%;
    right: 7%;
    color: rgb(39, 39, 39);
    // text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    h3 {font-size:48px;}
    @media(max-width: 768px) {
      padding: 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h3 { font-size:24px; }
      span{ font-size: 14px;}
    }
  }
}

.item {
  position: relative;
  padding-bottom: 30%;
  @media (max-width: 768px) {
    padding-bottom: 40%;
  }
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  .shopnow-btn{
    height: 100%;
    width: 100%;
    background-color: rgb(255, 255, 255);
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &:hover .shopnow-btn {
    opacity: 0.5;
    transition:.5s;
  }
}

.opensale-img {
  height: 380px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url('https://images.pexels.com/photos/7406101/pexels-photo-7406101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position:top;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.open {
  padding: 70px 0px;
  text-align: center;
  color:#fff;
  span {
    padding: 8px 16px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
  }
}

.product-img {
  position: relative;
  height: 320px;
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  transition: .5s;
  cursor: pointer;
  @media (max-width:768px) {
    height: 160px;
  }
  &.photo1 {
    background-image: url('https://images.pexels.com/photos/7406097/pexels-photo-7406097.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  }
  &.photo2 {
    background-image: url('https://images.unsplash.com/photo-1597460832677-0a6bdc6d0ab0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170');
  }
  &.photo3 {
    background-image: url('https://images.unsplash.com/photo-1567347167012-29482aa7a9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');
  }
  &.photo4 {
    background-image: url('https://images.unsplash.com/photo-1619021016992-07909c5b85d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80');
  }

  .mask {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3),rgb(0, 0, 0,0.3));
    opacity: 1;
    transition: .5s;
  }
  span {
    color: #fff;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover .mask{
    opacity: 0;
  }
  &:hover span{
    opacity: 0;
  }

}

.dressing-room {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media (max-width:992px) {
    flex-direction: column;
    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
  .pic {
    width: 540px;
    height: 380px;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    &.pic-img1 {background-image: url('@/assets/imges/DressRoom1.jpg');}
    &.pic-img2 {background-image: url('@/assets/imges/DressRoom2.jpg');}
    @media (max-width:992px) {
      width: 100%;
    }
    @media (max-width:768px) {
      height: 240px;
    }
  }
  .room-text{
    width: 48%;
    text-align: center;
    padding: 24px 0px;
    opacity: 0.8;
    position: relative;
    z-index: 1;
    @media (max-width:992px) {
      width: 100%;
    }
  }
}

.dressing-room > :first-child{
  margin-right: -10%;
  @media (max-width:992px) {
    margin-right: 0;
  }
}

.subscription {
  height: 420px;
  background-image: url('https://images.pexels.com/photos/584303/pexels-photo-584303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  .input-width {
    width: 35%;
    @media (max-width: 1200px) {
      width: 50%;
    }
    @media (max-width: 992px) {
      width: 75%;
    }
  }
}

</style>
