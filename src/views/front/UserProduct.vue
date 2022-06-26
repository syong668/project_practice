<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container my-4">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-secondary" to="/products"
            >全部產品</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.category }}
        </li>
      </ol>
    </nav>
    <!-- 產品資訊 -->
    <div class="row justify-content-between mb-5">
      <!-- 產品內容_左側 -->
      <div class="col-lg-6 d-flex flex-column align-items-center">
        <div class="index-img" :style="{ backgroundImage: `url(${indexImg})` }">
        </div>
        <div class="other-img bg-light">
          <div v-for="(img, key) in product.images" :key="key"
          :style="{ backgroundImage: `url(${img})` }"
          @click="changeImg(img)"
          >
          </div>
        </div>
      </div>

      <!-- 產品內容_右側 -->
      <div class="col-lg-5 mt-5 mt-lg-0 text-Secondary">
        <div class="h3 mb-3 fw-bold">{{ product.title }}</div>
        <div style="white-space: pre-wrap;">{{ product.description }}</div>
        <hr />
        <div class="my-4">
          <del v-if="product.origin_price"
            >NT${{ $filters.currency(product.origin_price) }}</del
          >
          <div v-if="product.origin_price" class="h5 text-danger">
            NT${{ $filters.currency(product.price) }}
          </div>
          <div v-else class="h5">
            NT${{ $filters.currency(product.price) }}
          </div>
        </div>

        <div
          class="mb-2"
          v-if="product.category == '比基尼' || product.category == '運動服'"
        >
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
            :disabled="product.unit == 0"
          >
            <option v-if="product.unit == 0" selected>已搶購完畢</option>
            <option value="XS" disabled>XS(已售完)</option>
            <option value="S" :selected="product.unit != 0">S</option>
            <option value="M" disabled>M(已售完)</option>
            <option value="L" disabled>L(已售完)</option>
          </select>
        </div>

        <div class="mb-2" v-if="product.category == '鞋子'">
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
            :disabled="product.unit == 0"
          >
            <option v-if="product.unit == 0" selected>已搶購完畢</option>
            <option value="35" disabled>35(已售完)</option>
            <option value="36" :selected="product.unit != 0">36</option>
            <option value="37" disabled>37(已售完)</option>
            <option value="38" disabled>38(已售完)</option>
            <option value="39" disabled>39(已售完)</option>
            <option value="40" disabled>40(已售完)</option>
          </select>
        </div>

        <div class="mb-3">
          <span>數量</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-primary rounded-0 d-flex align-items-center"
                type="button"
                :class="{ disabled: qty == 1 }"
                @click="qty--"
              >
                <i class="bi bi-dash"></i>
              </button>
            </div>
            <span class="form-control text-center">{{ qty }}</span>
            <div class="input-group-append">
              <button
                class="btn btn-primary d-flex align-items-center rounded-0"
                type="button"
                @click="qty++"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <div>
          <button
            type="button"
            class="btn btn-primary rounded-0 w-100 mb-3"
            :class="{'disabled': product.unit == 0}"
            @click="addCart(product.id)"
          >
            <span v-if="product.unit != 0">加到購物車</span>
            <span v-else>補貨中</span>
          </button>

          <button @click="addFavorite(product.id)" type="button" class="btn btn-outline-primary rounded-0 w-100">
            <span v-if="favoriteData.indexOf(product.id) === -1">加入收藏</span>
            <span v-else>取消收藏</span>
          </button>
        </div>

        <!-- tab 商品描述 -->
        <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">商品描述</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">商品材質</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">尺寸表</button>
          </li>
        </ul>
        <div class="tab-content pt-3" id="myTabContent">
          <div style="white-space: pre-wrap;" class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
            {{product.content}}
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            材質 ：尼龍80%/彈性纖維20% <br>
            厚度 ：一般 <br>
            內裏 ：有 <br>
            彈性 ：有 <br>
            產地 ：台灣
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <table class="table table-sm">
              <tbody>
                <tr>
                  <td>尺寸(cm)</td>
                  <td>XS</td>
                  <td>S</td>
                  <td>M</td>
                  <td>L</td>
                </tr>
                <tr>
                  <td>胸圍</td>
                  <td>79</td>
                  <td>84</td>
                  <td>89</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>下胸圍</td>
                  <td>69</td>
                  <td>74</td>
                  <td>79</td>
                  <td>84</td>
                </tr>
                <tr>
                  <td>腰圍</td>
                  <td>67</td>
                  <td>69</td>
                  <td>74</td>
                  <td>79</td>
                </tr>
                <tr>
                  <td>臀圍</td>
                  <td>89</td>
                  <td>94</td>
                  <td>99</td>
                  <td>104</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    <hr />
    <!-- 相關商品 -->
    <div class="row my-5">

      <div class="col-12">
        <h3 class="mb-4 text-center fw-bold">相關產品</h3>
        <swiper-view
          :slidesPerView="4"
          :spaceBetween="20"
          :autoplay="true"
          :breakpoints="swiper.breakpoints"
        >
          <swiper-slide v-for="item in sameProducts" :key="item.id">
            <div class="card rounded-0 border-0">
              <div class="text-secondary cursor-hover">
                <div class="product-hover">
                  <div
                    class="rounded-0 card-imge"
                    :style="{ backgroundImage: `url(${item.imgLink})` }"
                  ></div>

                  <div class="mask" @click="toProductPage(item.id)"></div>

                </div>
                <div class="pt-1 text-center" @click="getProduct()">
                  <div>{{item.title}}</div>
                  <div v-if="item.origin_price" class="fw-bold text-danger">
                    NT${{item.price}}
                  </div>
                  <del v-if="item.origin_price">NT${{item.origin_price}}</del>
                  <div v-else class="fw-bold">NT${{item.price}}</div>
                </div>
              </div>
            </div>
          </swiper-slide>

        </swiper-view>
      </div>

    </div>
  </div>

</template>

<script>
import 'bootstrap/js/dist/tab'
export default {
  data () {
    return {
      products: [],
      product: {},
      id: '',
      isLoading: false,
      indexImg: '', // 當前預覽圖
      qty: 1, // 當前數量
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      swiper: {
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
          },
          567: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2
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
  inject: ['emitter'],
  computed: {
    getCategoryProducts () {
      return this.products.filter((item) => item.category === this.product.category && item.id !== this.product.id)
    },
    sameProducts () {
      const randomNum = Math.floor(Math.random() * (this.getCategoryProducts.length))
      return this.getCategoryProducts.slice(randomNum, this.getCategoryProducts.length)
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        console.log(res.data.product)
        this.isLoading = false
        if (res.data.success) {
          this.product = res.data.product
          this.indexImg = res.data.product.images[0]
        }
      })
    },
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        this.isLoading = false
        if (res.data.success) {
          this.products = res.data.products
          console.log(this.products)
        }
      })
    },
    toProductPage (id) {
      this.$router.push(`/product/${id}`)
    },
    changeImg (img) {
      this.indexImg = img
    },
    addCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: this.id,
        qty: this.qty
      }
      this.$http.post(api, { data: cart })
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.isLoading = false
            this.$swal({
              icon: 'success',
              title: `${res.data.data.product.title}<br>已加入購物車`,
              text: '您可至購物車確認選購細項'
            })
            this.emitter.emit('updateNavbarCart')
          } else {
            this.isLoading = false
            this.$swal({
              icon: 'error',
              title: '商品加入失敗',
              text: '請重新加入購物車'
            })
          }
        })
        .catch((err) => {
          this.isLoading = false
          this.$swal({
            icon: 'error',
            title: '發生錯誤',
            text: err,
            footer: '<a href="">請洽詢管理員</a>'
          })
        })
    },
    addFavorite (id) {
      const favoriteID = this.favoriteData.indexOf(id)
      if (favoriteID === -1) {
        this.favoriteData.push(id)
        this.$swal({
          icon: 'success',
          title: '商品已加入收藏清單'
        })
      } else {
        this.favoriteData.splice(favoriteID, 1)
        this.$swal({
          icon: 'success',
          title: '商品已從收藏清單移除'
        })
      }

      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      this.emitter.emit('updateNavbarFavorite')
    }
  },
  created () {
    // 先取得當前路由，找到產品 ID 後再跑產品資訊
    this.id = this.$route.params.productId
    this.getProduct()
    this.getProducts()
  }
}
</script>
