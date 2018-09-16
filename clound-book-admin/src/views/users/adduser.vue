<template>
  <div>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="main">
    <el-form ref="form" :model="form">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="个性签名">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="邮箱地址">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="分类图片">
        <imgUpload v-model="form.avator"></imgUpload>
      </el-form-item>
      <el-form-item >
        <el-button
          size="mini"
          type="primary"
          @click="redact">添加管理员</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
  import imgUpload from '../../components/img-upload'
  export default {
    data() {
      return {
        form:{}
      }
    },
    components: {
      imgUpload
    },
    methods: {
        redact() {
          this.$axios.post('/user',this.form).then(res => {
            if(res.code == 200){
              this.$message.success('添加成功')
              setTimeout(() => {
                this.$router.push('/layout/users')
              },1000)
            }
          })
        }
    }
  }
</script>

<style scoped>
  .main{
    width: 500px;
    margin-top: 50px;
    margin-left: 50px;
  }
</style>
