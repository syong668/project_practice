<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': !page.has_pre}">
        <a
          class="page-link "
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(page.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li
        v-for="pagination in page.total_pages"
        :key="pagination"
        class="page-item"
        :class="{ 'active': pagination == page.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="updatePage(pagination)">
          {{ pagination }}
        </a>
      </li>
      <li class="page-item" :class="{'disabled': !page.has_next}">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(page.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    updatePage (pagination) {
      this.$emit('emit-page', pagination)
    }
  },
  emits: ['emit-page'] // 如沒有定義這個會出現warn報錯，原因請看筆記
}
</script>
