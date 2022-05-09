<template>
  <ul class="process mb-5">
    <!-- step1 -->
    <li
      class="d-md-flex"
      :class="{ 'bg-primary': path == '1', 'd-none': path != '1' }"
    >
      <i
        class="bi bi-cart-check-fill fs-2"
        :class="{ 'text-light': path == '1' }"
      ></i>
      <span :class="{ 'text-light': path == '1' }">確認購買明細</span>
    </li>
    <!-- step2 -->
    <li
      class="d-md-flex"
      :class="{ 'bg-primary': path == '2', 'd-none': path != '2' }"
    >
      <i
        class="bi bi-person-lines-fill fs-2"
        :class="{ 'text-light': path == '2' }"
      ></i>
      <span :class="{ 'text-light': path == '2' }">填寫訂購資料</span>
    </li>
    <!-- step3 -->
    <li
      class="d-md-flex"
      :class="{ 'bg-primary': path == '3', 'd-none': path != '3' }"
    >
      <i
        class="bi bi-check-circle-fill fs-2"
        :class="{ 'text-light': path == '3' }"
      ></i>
      <span :class="{ 'text-light': path == '3' }">完成商品訂購</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['path']
}
</script>
