<template>
  <div>
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>分类列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="分类名"
        width="220">
      </el-table-column>
      <el-table-column label="用户头像">
        <template slot-scope="scope">
          <img :src="scope.row.icon" class="user-avatar">
        </template>
      </el-table-column>
      <el-table-column
        prop="index"
        label="分类排序"
        width="320">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="toRedact(scope.row._id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger">删除分类</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData:[],
          pn: 1
        }
      },
      methods: {
        getData() {
          this.$axios.get('/category').then(res => {
            this.tableData = res.data
          })
        },
        toRedact(id) {
          this.$router.push({name: 'redactsort',query: {id}})
        }
      },
      created() {
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
