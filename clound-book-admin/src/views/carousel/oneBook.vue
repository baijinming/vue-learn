<template>
  <h1>res.data为null</h1>
</template>

<script>
  export default {
    data() {
      return {
        book: {}
      }
    },
    methods: {
      getData() {
        let id = this.$route.query.id
        this.$axios.get(`/book/${id}`,id).then( res => {
          console.log(res)
          this.book = res
        })
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style scoped>

</style>
