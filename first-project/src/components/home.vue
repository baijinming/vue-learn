<template>
    <div>
      <h1>首页</h1>
      <router-link to="/login">登录</router-link>
      <button @click="getJsonp">通过jsonp方式跨域获取数据</button>
      <button @click="getCors">通过cors方式跨域获取数据</button>
      <button @click="getCors2">通过cors插件方式跨域获取数据</button>
      <button @click="vueget">通过vue脚手架方式跨域</button>
    </div>
</template>

<script>
  import axios from 'axios'

    export default {
      methods:{
        getJsonp(){
          let jsonp = document.createElement("script");
          jsonp.src="http://localhost:3000/jsonp?callback=getData";
          document.body.appendChild(jsonp);
        },
        getCors(){
          axios.post("http://localhost:3000/cors").then(res=>{
            console.log(res)
          }).catch(err=>{
            console.log(err)
          })
        },
        getCors2(){
          axios.post("http://localhost:3000/cors2",{
            name:"hhh"
          },{
            withCredentials:true
          }).then(res=>{
            console.log(res)
          })
        },
        vueget(){
          axios.post("http://localhost:3000/cors2").then(res=>{
            console.log(res)
          })
        }
      }
    }

</script>

<style scoped>

</style>
