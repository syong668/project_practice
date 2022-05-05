<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="text-secondary" to="/user/cart">ALL</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{product.category}}</li>
      </ol>
    </nav>
    <!-- 產品資訊 -->
    <div class="row justify-content-center">
      <!-- 產品內容_左側 -->
      <div class="col-md-6 d-flex flex-column align-items-center">
        <div class="index-img">
          <img
            class="img-fluid"
            :src="indexImg"
            alt=""
          />
        </div>
        <div class="other-img bg-light">
          <img
            v-for="(img,key) in product.images" :key="key"
            class="img-fluid"
            :src="img"
            :alt="key"
            @click="changeImg(img)"
          />
        </div>
      </div>

      <!-- 產品內容_右側 -->
      <div class="col-md-4 mt-4 mt-md-0 text-Secondary">
        <div class="h3 mb-3 fw-bold">{{product.title}}</div>
        <div>{{product.description}}</div>
        <hr />
        <div class="my-4">
          <del v-if="product.price">NT${{$filters.currency(product.origin_price)}}</del>
          <div v-if="product.price" class="h5 text-danger">NT${{$filters.currency(product.price)}}</div>
          <div v-else class="h5">NT${{$filters.currency(product.origin_price)}}</div>
        </div>

        <div class="mb-2" v-if="product.category == 'SWIM' || product.category == 'FITNESS'">
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
          >
            <option selected disabled>請選擇尺寸</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>

        <div class="mb-2" v-if="product.category == 'SHOES'">
          <span>尺寸</span>
          <select
            class="form-select rounded-0"
            aria-label="Default select example"
          >
            <option selected disabled>請選擇尺寸</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
          </select>
        </div>

        <div class="mb-5">
          <span>數量</span>
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                class="btn btn-primary rounded-0 d-flex align-items-center"
                type="button"
                :class="{'disabled': count == 1}"
                @click="count--"
              >
                <i class="bi bi-dash"></i>
              </button>
            </div>
            <span class="form-control text-center">{{count}}</span>
            <div class="input-group-append">
              <button
                class="btn btn-primary d-flex align-items-center rounded-0"
                type="button"
                @click="count++"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>

        <div>
          <button type="button" class="btn btn-primary rounded-0 w-100 mb-3">
            加到購物車
          </button>

          <button type="button" class="btn btn-outline-primary rounded-0 w-100">
            加入收藏
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      product: {},
      id: '',
      isLoading: false,
      indexImg: '', // 當前預覽圖
      count: '1' // 當前數量
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          console.log(res.data.product)
          this.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
            this.indexImg = res.data.product.images[0]
            // console.log(res.data.product.images[0])
          }
        })
    },
    changeImg (img) {
      this.indexImg = img
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
