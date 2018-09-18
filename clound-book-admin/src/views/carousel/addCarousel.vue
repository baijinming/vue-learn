<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>添加轮播图</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="main">
      <el-form :model="form">
        <el-form-item label="标题">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="分类图片">
          <imgUpload v-model="form.img"></imgUpload>
        </el-form-item>
        <el-form-item label="对应书籍ID">
          <el-input v-model="form.book"></el-input>
        </el-form-item>
        <el-form-item label="序号">
          <el-input-number v-model="form.index"  :min="1" :max="998" ></el-input-number>
        </el-form-item>
        <el-form-item >
          <el-button
            size="mini"
            type="primary"
            @click="redact">添加分类</el-button>
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
        form:{
          title: '',
          img: '',
          book: '',
          index: 1
        }
      }
    },
    components: {
      imgUpload
    },
    methods: {
      redact() {
        this.$axios.post('/swiper',this.form).then(res => {
          if(res.code == 200){
            this.$message.success('添加成功')
            setTimeout(() => {
              this.$router.push('/layout/carousel')
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
