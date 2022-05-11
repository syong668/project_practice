<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled':pageStatus == 0}">
        <a
          class="page-link rounded-0"
          href="#"
          aria-label="Previous"
          @click.prevent="changePageStatus('pre')"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="pageNum in totalPageNum"
        :key="pageNum"
        class="page-item"
        :class="{'active':pageStatus == pageNum-1}"
      >
        <a class="page-link" href="#" @click.prevent="changePageStatus(pageNum-1)">{{pageNum}}</a>
      </li>
      <li class="page-item" :class="{'disabled':pageStatus+1 == totalPageNum}">
        <a
          class="page-link rounded-0"
          href="#"
          aria-label="Next"
          @click.prevent="changePageStatus('next')"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
    {{pageStatus}}
    {{toPage}}
  </nav>
</template>

<script>
export default {
  data () {
    return {
      toPage: 0
    }
  },
  props: ['totalPageNum', 'pageStatus'],
  methods: {
    changePageStatus (num) {
      this.toPage = num
      if (num === 'next') {
        this.toPage = this.pageStatus + 1
      } else if (num === 'pre') {
        this.toPage = this.pageStatus - 1
      }
      this.$emit('changePage', this.toPage)
    }
  }
}
</script>
