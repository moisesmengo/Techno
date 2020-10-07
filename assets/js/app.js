const vm = new Vue({
  el: "#app",
  data: {
    produtos: []
  },
  methods: {
    fatchProdutos() {
      fetch("./api/produtos.json")
        .then(r => r.json())
        .then(r => this.produtos = r)
    }
  },
  created() {
    this.fatchProdutos()
  }
})