<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-secondary" to="/user/products"
            >ALL</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.category }}
        </li>
      </ol>
    </nav>
    <!-- 產品資訊 -->
    <div class="row justify-content-center mb-5">
      <!-- 產品內容_左側 -->
      <div class="col-md-6 d-flex flex-column align-items-center">
        <div class="index-img">
          <img class="img-fluid" :src="indexImg" :alt="product.title" />
        </div>
        <div class="other-img bg-light">
          <img
            v-for="(img, key) in product.images"
            :key="key"
            class="img-fluid"
            :src="img"
            :alt="key"
            @click="changeImg(img)"
          />
        </div>
      </div>

      <!-- 產品內容_右側 -->
      <div class="col-md-4 mt-4 mt-md-0 text-Secondary">
        <div class="h3 mb-3 fw-bold">{{ product.title }}</div>
        <div>{{ product.description }}</div>
        <hr />
        <div class="my-4">
          <del v-if="product.price"
            >NT${{ $filters.currency(product.origin_price) }}</del
          >
          <div v-if="product.price" class="h5 text-danger">
            NT${{ $filters.currency(product.price) }}
          </div>
          <div v-else class="h5">
            NT${{ $filters.currency(product.origin_price) }}
          </div>
        </div>

        <div
          class="mb-2"
          v-if="product.category == 'SWIM' || product.category == 'FITNESS'"
        >
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
          >
            <option value="XS" disabled>XS(已售完)</option>
            <option value="S" selected>S</option>
            <option value="M" disabled>M(已售完)</option>
            <option value="L" disabled>L(已售完)</option>
          </select>
        </div>

        <div class="mb-2" v-if="product.category == 'SHOES'">
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
          >
            <option selected disabled>請選擇尺寸</option>
            <option value="35" disabled>35(已售完)</option>
            <option value="36" selected>36</option>
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
          <button type="button" class="btn btn-primary rounded-0 w-100 mb-3"
          @click="addCart(product.id)"
          >
            加到購物車
          </button>

          <button type="button" class="btn btn-outline-primary rounded-0 w-100">
            加入收藏
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
          <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
            {{brContent.replaceAll("\n","<br />")}}
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            材質 ：尼龍80%/彈性纖維20% <br>
            厚度 ：一般 <br>
            內裏 ：有 <br>
            彈性 ：有 <br>
            產地 ：台灣
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          1
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/js/dist/tab'
export default {
  data () {
    return {
      product: {},
      id: '',
      isLoading: false,
      indexImg: '', // 當前預覽圖
      qty: 1, // 當前數量
      brContent: ''
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
          this.brContent = res.data.product.content
          // console.log(res.data.product.images[0])
        }
      })
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
    }
  },
  created () {
    // 1.先取得當前路由，找到產品ID
    this.id = this.$route.params.productId
    // 2.利用ID取得單一產品資訊
    this.getProduct()
  }
}
</script>
