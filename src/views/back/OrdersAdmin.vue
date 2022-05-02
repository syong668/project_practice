<template>
  <loadingTip :active="isLoading"></loadingTip>
  <div class="container">
    <table class="container table mt-5 table-hover">
      <thead class="table-dark">
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      isLoading: false
    }
  },
  created () {
    this.getOrders()
  },
  methods: {
    getOrders () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.isLoading = true
      this.$http.get(api).then((res) => {
        console.log(res)
        if (res.data.success) {
          this.isLoading = false
        }
      })
    }
  }
}
</script>
