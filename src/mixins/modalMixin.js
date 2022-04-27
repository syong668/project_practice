import Modal from 'bootstrap/js/dist/modal'

export default {
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
