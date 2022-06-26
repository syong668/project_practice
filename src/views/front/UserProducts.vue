<template>
  <loadingTip :active="isLoading"></loadingTip>
  <banner :bannerInfo="bannerInfo"></banner>
  <div class="container" style="min-height: calc(100vh - 255px)">
    <div class="row my-5">
      <!-- 左側分類選單 -->
      <div class="col-12 col-md-2 d-md-block">
        <div class="d-none d-md-block list-group list-group-flush rounded-0">
          <a
            href="#"
            class="list-group-item list-group-item-action"
            aria-current="true"
            @click.prevent="getPage('')"
            :class="{'active' : activedCategory === ''}"
          >
            全部產品
          </a>
          <a
            v-for="(className,key) in categories" :key="key"
            href="#"
            class="list-group-item list-group-item-action"
            @click.prevent="getPage(className)"
            :class="{'active' : activedCategory === className}"
          >
            {{className}}
          </a>
        </div>

        <!-- 手機板顯示下拉單 -->
        <div class="d-block d-md-none dropdown mb-5">
          <button class="btn btn-primary dropdown-toggle w-100 rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{activedCategory == '' ? '全部產品' : activedCategory}}
          </button>
          <ul class="dropdown-menu w-100 rounded-0" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" @click.prevent="getPage('')">全部產品</a>
              <a class="dropdown-item"
                v-for="(className,key) in categories" :key="key"
                @click.prevent="getPage(className)"
              >
                {{className}}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 右側產品列表 -->
      <div class="col-12 col-md-10">
        <div class="row">
          <div
            class="col-6 col-md-4 col-lg-3 mb-3"
            v-for="item in showPageData"
            :key="item.id"
          >
            <div class="card rounded-0 border-0">
              <div class="text-secondary cursor-hover">
                <div class="product-hover">
                  <div
                    class="rounded-0 card-imge"
                    :style="{ backgroundImage: `url(${item.imgLink})` }"
                  ></div>

                  <div class="mask" @click="getProduct(item.id)"></div>

                  <button
                    v-if="item.unit != 0"
                    type="button"
                    class="btn btn-primary add-cart-btn w-100 rounded-0"
                    @click.prevent="addCart(item.id)"
                  >
                    加入購物車
                  </button>

                  <div
                    v-if="item.unit == 0"
                    class="mask-white"
                    @click="getProduct(item.id)"
                  >
                    <p
                      class="fs-3 border border-primary border-end-0 border-start-0 text-center text-primary fw-blod"
                    >
                      SALE OUT
                    </p>
                  </div>
                </div>
                <div class="pt-1 text-center" @click="getProduct(item.id)">
                  <div>{{ item.title }}</div>
                  <div v-if="item.origin_price" class="fw-bold text-danger">
                    NT${{ item.price }}
                  </div>
                  <del v-if="item.origin_price">NT${{ item.origin_price }}</del>
                  <div v-else class="fw-bold">NT${{ item.price }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 分頁 -->
        <div class="d-flex justify-content-center">
          <pagination
            :totalPageNum="totalPageNum"
            :pageStatus="pageStatus"
            @change-page="changePageNum"
          ></pagination>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import pagination from '@/components/front/ProductsPage.vue'
import banner from '@/components/front/FrontSmallBanner.vue'
import 'bootstrap/js/dist/dropdown'

export default {
  data () {
    return {
      products: [],
      isLoading: false,
      categories: [], // 所有產品類別
      activedCategory: '', // 目前點選的產品類別
      newPageDate: [], // 目前所在產品類的分頁資料
      pageDataTotal: 8, // 每頁幾筆資料
      pageStatus: 0, // 當下停留在第幾頁(陣列第幾筆)
      bannerInfo: {
        url: 'https://images.pexels.com/photos/8158588/pexels-photo-8158588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: '所有產品',
        position: '0% 35%'
      }
    }
  },
  computed: {
    // 濾出當前點選分類的資料
    filterProducts () {
      return this.products.filter((item) => {
        return item.category.match(this.activedCategory)
      })
    },
    // 根據 filterProducts 濾出的資料，計算分頁總數量
    totalPageNum () {
      return Math.ceil(this.filterProducts.length / this.pageDataTotal)
    },
    // 處理每一頁要渲染的資料
    showPageData () {
      return this.newPageDate[this.pageStatus]
    }
  },
  components: { pagination, banner },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          console.log(res)
          this.products = res.data.products
          this.isLoading = false
          this.getCategories()
          this.getPage('')
        }
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.isLoading = true
      this.$http
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            console.log(res)
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
    // 取得商品分類並過濾重複的
    getCategories () {
      const categories = new Set()
      this.products.forEach((item) => {
        categories.add(item.category)
      })
      this.categories = [...categories]
    },
    // 點選分類觸發：取得某分類( className )的"每頁"資料
    getPage (className) {
      this.activedCategory = className
      this.newPageDate = [] // 清空上一次push的資料，以免累加
      this.pageStatus = 0

      // 將資料切割每X筆一頁
      for (let i = 0; i < this.totalPageNum; i++) {
        const newAry = this.filterProducts.slice(i * this.pageDataTotal, i * this.pageDataTotal + this.pageDataTotal)
        this.newPageDate.push(newAry)
      }
      console.log(this.newPageDate)
    },
    changePageNum (num) {
      this.pageStatus = num
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
