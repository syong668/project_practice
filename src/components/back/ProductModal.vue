<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >

  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
          <span>{{tempProduct.title ? '編輯產品' : '新增產品'}}</span>
        </h5>
        <button type="button" class="btn-close"
                data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-3">
              <label for="image" class="form-label">封面圖片(輸入網址)</label>
              <input
                v-model="tempProduct.imgLink"
                type="text"
                class="form-control"
                id="image"
                placeholder="請輸入圖片連結"
                >
            </div>
            <div class="mb-3">
              <label for="customFile" class="form-label">封面圖片(檔案上傳)
                <i class="fas fa-spinner fa-spin"></i>
              </label>
              <input
                type="file"
                id="customFile"
                class="form-control"
                ref="fileInput"
                @change="uploadFile"
              >
            </div>
            <img :src="tempProduct.imgLink" class="img-fluid" alt="封面圖片預覽">

          <div class="mt-5" v-if="tempProduct.images">
            <label class="form-label">產品圖片(最多五張)</label>
            <div v-for="(image, key) in tempProduct.images" :key="key" class="mb-3 input-group">
              <input
                type="url"
                class="form-control form-control"
                placeholder="請輸入連結"
                v-model="tempProduct.images[key]"
                >
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="tempProduct.images.splice(key, 1)"
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
              <!-- 新增圖片的按鈕顯示原則 -->
              <!-- 1. 圖片連結有輸入，才能再繼續新增圖片(圖片='' false) -->
              <!-- 2. 當前尚未新增圖片(圖片數=0 布林值false 將他反轉為true執行v-if判斷) -->
              <!-- 3. 限制最多5張 -->
            <div v-if="tempProduct.images[tempProduct.images.length - 1] &&tempProduct.images.length <= 4 || !tempProduct.images.length ">
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="tempProduct.images.push('')"
              >
                新增圖片
              </button>
            </div>

          </div>

          </div>
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input
                v-model="tempProduct.title"
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入標題"
              >
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <input
                  v-model="tempProduct.category"
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="請輸入分類"
                >
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <input
                  v-model="tempProduct.unit"
                  type="text"
                  class="form-control"
                  id="unit"
                  placeholder="請輸入單位"
                >
              </div>
            </div>

            <div class="row gx-2">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <input
                  v-model="tempProduct.origin_price"
                  type="number"
                  class="form-control"
                  id="origin_price"
                  placeholder="請輸入原價"
                >
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <input
                  v-model="tempProduct.price"
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="請輸入售價"
                >
              </div>
            </div>
            <hr>

            <div class="mb-3">
              <label for="description" class="form-label">產品描述</label>
              <textarea
                v-model="tempProduct.description"
                type="text"
                class="form-control"
                id="description"
                placeholder="請輸入產品描述"
                >
              </textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <textarea
                rows="5"
                v-model="tempProduct.content"
                type="text"
                class="form-control"
                id="content"
                placeholder="請輸入產品說明內容"
                >
              </textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input
                  v-model="tempProduct.is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  :true-value="1"
                  :false-value="0"
                  id="is_enabled"
                >
                <label class="form-check-label" for="is_enabled">
                  是否啟用
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary"
                data-bs-dismiss="modal">取消
        </button>
        <button
          @click="$emit('update-product',tempProduct)"
          type="button"
          class="btn btn-primary"
        >
        確認
        </button>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: {
    product: {
      type: Object, // 種類是物件
      default () { return {} } // 如果是空的就預設回傳空的物件
    }
  },

  watch: {
    // 由於單向數據流，props傳入的內容無法被修改，故需要監聽product有變動時，將資料更新到tempProduct
    product () {
      this.tempProduct = this.product
      console.log('this.tempProduct.images結果是：' + this.tempProduct.images)
      if (!this.tempProduct.images) {
        this.tempProduct.images = [] // object 是true，v-if將會判斷顯示
      }
    }
  },
  // 準備一個data的內容，會回傳一個物件
  data () {
    return {
      modal: {},
      tempProduct: {} // 編輯資料時所定義的資料集(由props接收內容後監聽其內容的變更，再傳入至tempProduct)
    }
  },

  // 在裡面新增方法，讓外部元件可以呼叫他
  methods: {
    // 上傳圖片
    uploadFile () {
      const uploadedFile = this.$refs.fileInput.files[0]
      console.dir(uploadedFile) // 為何用dir?
      const formData = new FormData() // 依照api文件，限制用form格式
      formData.append('file-to-upload', uploadedFile) // 依照api文件，要加入欄位
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`
      const select = this.$refs.fileInput.id // 取得上傳圖檔的input元素 id
      this.$http.post(url, formData)
        .then((res) => {
          console.log(res.data)
          if (res.data.success) {
            this.tempProduct.imgLink = res.data.imageUrl // 將上傳成功後產生的連結傳進data變數
            document.getElementById(select).value = '' // 清空input value
          }
        })
    }
  },
  mixins: [modalMixin]
}
</script>
