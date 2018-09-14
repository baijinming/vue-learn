<template>
    <div>
      <slot name="zujian"></slot>
      <slot></slot>

      <br>

      <h1>首页</h1>
      <router-link to="/login">登录</router-link>
      <button @click="getJsonp">通过jsonp方式跨域获取数据</button>
      <button @click="getCors">通过cors方式跨域获取数据</button>
      <button @click="getCors2">通过cors插件方式跨域获取数据</button>
      <button @click="vueget">通过vue脚手架方式跨域</button>

      <br><br>

      <button @click="REDUCE()">-</button>
      <strong>{{count}}</strong>
      <button @click="ADD()">+</button>
      <strong>单价：{{unit}}</strong>
      <strong>总价：{{total}}</strong>
      <br>
      <input type="text" v-model="newcount">
      <button @click="CHANGE_COUNT(newcount)">点击修改count</button>
      <button @click="handle">异步修改</button>
      <br><br>
      <comA></comA>
      <comB></comB>
    </div>
</template>

<script>
  import axios from 'axios';
  import { mapState, mapGetters , mapMutations } from 'vuex';
  import comA from './comA'
  import comB from './comB'

    export default {
      data() {
        return {
          newcount : ""
        }
      },
      components: {
        comA,
        comB
      },
      computed:{
        ...mapState([ 'count' , 'unit' ]),
        ...mapGetters([ 'total' ])
      },
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
        },
        ...mapMutations([ 'ADD' , 'REDUCE' , 'CHANGE_COUNT' ]),
        handle() {
          this.$store.dispatch('CHANGE_ASYNC', this.newcount)
        }
      }
    }

</script>

<style scoped>

</style>
