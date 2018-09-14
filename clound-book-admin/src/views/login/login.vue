<template>
    <div class="container">
      <h1>欢迎来到云书后台管理系统</h1>
      <div class="login-box">
        <h2>请登录</h2>
        <el-form class="login-form">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-button type="primary" class="btn" @click="login" :loading="isLoading">登录</el-button>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          form: {
            username: '',
            password: ''
          },
          isLoading:false
        }
      },
      methods: {
        login() {
          this.isLoading = true
          this.$axios.post('/login',this.form).then(res => {
            if(res.code == 200){
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              setTimeout(() => {
                this.$router.push('/layout')
              },1000)
            }else {
              this.$message({
                message: '登录失败',
                type: 'warning'
              })
            }
            this.isLoading = false
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .container{
    height: 100vh;
    background-color: #545c64;
    overflow: hidden;

    h1{
      text-align: center;
      color: #fff;
      margin-top: 100px;
      font-weight: 400;
    }

    .login-box{
      width: 400px;
      height: 300px;
      border: 1px solid #f1f1f1;
      border-radius: 6px;
      margin: 15px auto;
      background-color: #fff;
      padding: 40px;

      h2{
        text-align: center;
        color: #333;
        font-weight: 400;
      }

      .login-form{
        margin-top: 10px;

        .btn{
          width: 100%;
        }
      }
    }
  }

</style>
