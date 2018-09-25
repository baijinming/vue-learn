<template>
    <div>
      <h1>详情页</h1>
      <h2>动态路由参数：{{$route.params.id}}</h2>
      <checkBox ttt="max"></checkBox>
    </div>
</template>

<script>
  import checkBox from './checkBox'
    export default {
      components: {
        checkBox
      }
    }
</script>

<style scoped>

</style>
