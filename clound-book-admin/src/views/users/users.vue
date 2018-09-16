<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="createdTime"
        label="创建时间"
        width="250">
      </el-table-column>
      <el-table-column
        prop="desc"
        label="个性签名"
        width="300">
      </el-table-column>
      <el-table-column label="用户头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="redact(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="reduce(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          tableData: []
        }
      },
      methods: {
        getData () {
          this.$axios.get('/user').then(res=>{
            this.tableData = res.data
          })
        },
        reduce(id) {
          this.$axios.post('/user/delete',{userIds:[id]}).then(res => {
            if(res.code == 200){
              this.$message.success('删除成功')
              this.getData()
            }
          })
        },
        redact(form) {
          this.$router.push({name: 'redactuser',query: {form}})
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped>
  .user-avatar {
    width: 100px;
    height: 100px;
  }
</style>
