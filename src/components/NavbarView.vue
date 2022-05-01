<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">MyLogo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex justify-content-between collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link active" aria-current="page">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link" href="#">訂單列表</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">優惠券</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout"><i class="bi bi-door-open-fill me-1"></i>登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            console.log(res)
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
