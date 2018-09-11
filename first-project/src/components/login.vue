<template>
  <div>
    <h1>登录界面</h1>
    账号：<input type="text" v-model="username">
    密码：<input type="text" v-model="password">
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "login",
        data(){
          return {
            username:"",
            password:""
          }
        },
      methods:{
        handleLogin(){
          axios.post('http://localhost:3000/login',{
            username:this.username,
            password:this.password
          }).then(res=>{
            if(res.data.code == 200){
              alert('登录成功')
              this.$router.push('/')
            }else {
              alert('登录失败')
            }
          })
        }
      }
    }
</script>

<style scoped>

</style>
