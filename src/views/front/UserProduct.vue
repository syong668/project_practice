<template>
    <div class="container">
      <!-- 麵包屑 -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/user/cart">購物車</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            title
          </li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <!-- 產品內容_左側 -->
        <article class="col-8">
          <h2>product title</h2>
          <div>content</div>
          <div>description</div>
          <img alt="" class="img-fluid mb-3" />
        </article>

        <!-- 產品內容_右側 -->
        <div class="col-4">
          <div class="h5">
            XX 元
          </div>
          <del class="h6"
            >原價 XX 元</del
          >
          <div class="h5">
            現在只要XX元
          </div>
          <hr />
          <button
            type="button"
            class="btn btn-outline-danger"
          >
            加到購物車
          </button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>
