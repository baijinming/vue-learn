<template>
  <div>
    <div class="nav">
      <ul>
        <li><router-link :to="{name:'home1'}">首页</router-link></li>
        <li><router-link :to="{name:'about1',params:{id:'996'}}">详情</router-link></li>
        <li><router-link :to="{name:'login1'}">登录</router-link></li>
      </ul>
    </div>
    <div class="header">头部</div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
  .nav{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #00B7FF;
  }
  .nav li{
    color: white;
    text-align: center;
    line-height: 50px;
  }
  .header{
    margin-left: 200px;
    height: 100px;
    background-color: yellow;
  }
  .body{
    margin-left: 200px;
  }
</style>
