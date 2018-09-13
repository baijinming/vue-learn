<template>
    <button @click="handel">兄弟组件传值(A组件信息给B)</button>
</template>

<script>
    export default {
        data () {
          return {
            msg:"A组件的信息"
          }
        },
        methods: {
          handel() {
            this.$bus.$emit("toB",this.msg)
          }
        }
    }
</script>

<style scoped>

</style>
