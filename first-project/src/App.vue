<template>
  <div id="app">
    <!--<ul>-->
      <!--<li><router-link to="/">首页</router-link></li>-->
      <!--<li><router-link :to="{name:'about',params:{id:'参数'}}">详情</router-link></li>-->
      <!--<li><router-link to="/login">登录</router-link></li>-->
    <!--</ul>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
