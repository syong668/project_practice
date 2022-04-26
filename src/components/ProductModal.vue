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

    <!-- 請同學自行新增 v-model -->
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  v-model="tempProduct.imgLink"
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  >
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input type="file" id="customFile" class="form-control">
              </div>
              <img class="img-fluid" alt="">
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group" >
                  <input
                    type="url"
                    class="form-control form-control"
                    placeholder="請輸入連結"
                    v-model="tempProduct.removeLink"
                    >
                  <button type="button" class="btn btn-outline-danger">
                    移除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100">
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
                    v-model="tempProduct.enable"
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
import Modal from 'bootstrap/js/dist/modal'

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
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },

  // 對它進行實體，實體必須在這個元件載入之後，才能正常運作
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
