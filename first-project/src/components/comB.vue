<template>
    <h2>{{msg}}</h2>
</template>

<script>
    export default {
        data() {
          return {
            msg:""
          }
        },
        created() {
          this.$bus.$on('toB', (msg) => {
            this.msg = msg
          })
        }
    }
</script>

<style scoped>

</style>
