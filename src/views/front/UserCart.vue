<template>
  <div class="container border mt-5 pt-5">
    <!-- 步驟條 -->
    <ul class="process mb-5">
      <li class="bg-primary">
        <i class="bi bi-cart-check-fill fs-2 text-light"></i>
        <span class="text-light">確認購買明細</span>
      </li>
      <li>
        <i class="bi bi-person-lines-fill fs-2"></i>
        <span>填寫訂購資料</span>
      </li>
      <li>
        <i class="bi bi-check-circle-fill fs-2"></i>
        <span>完成商品訂購</span>
      </li>
    </ul>

    <table class="table table-borderless align-middle text-secondary">
      <thead class="table-light">
        <tr>
          <th>縮圖</th>
          <th>商品名稱</th>
          <th>尺寸</th>
          <th>數量</th>
          <th>單價</th>
          <th>小計</th>
          <th>刪除</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img
              src="https://images.pexels.com/photos/7440202/pexels-photo-7440202.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              style="width: 100px"
            />
          </td>
          <td>SIRA 美胸波波綁帶比基尼(白)</td>
          <td>XS</td>
          <td>
            <div class="d-flex align-items-center">
                <button
                  class="btn btn-sm rounded-0 d-flex align-items-center border"
                  type="button"
                  :class="{ disabled: count == 1 }"
                  @click="count--"
                >
                  <i class="bi bi-dash"></i>
                </button>

                <span class="form-control-sm text-center border-top border-bottom rounded-0">{{ count }}</span>

                <button
                  class="btn btn-sm d-flex align-items-center border rounded-0"
                  type="button"
                  @click="count++"
                >
                  <i class="bi bi-plus"></i>
                </button>
            </div>
          </td>
          <td>
            <span>$ 2900</span>
          </td>
          <td>
            <span>$ 2900</span>
          </td>
          <td>
            <button type="button" class="btn btn-sm">
              <i class="bi bi-trash3-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api)
        .then((res) => {
          console.log(res)
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
