<template>
    <div class="container">
      <div class="header">
        <h1 class="title">云书后台管理系统</h1>
      </div>
      <div class="nav">
        <el-menu :router="true" background-color="#545c64" text-color="#fff" active-text-color="#409eff">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/layout">首页</el-menu-item>
              <el-menu-item index="/login">登录</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="mian-counter">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
        <br>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "layout"
    }
</script>

<style scoped lang="scss">
  .container {
    height: 100vh;
    overflow: hidden;

    .header {
      margin-left: 200px;
      height: 60px;
      display: flex;
      border-bottom: 1px solid #f1f1f1;

      .title {
        font-weight: 400;
        line-height: 60px;
        text-align: center;
        color: #333;
        width: 90%;
      }
    }

    .nav {
      width: 200px;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      background-color: #545c64;
    }

    .mian-counter{
      margin-left: 200px;
      padding: 20px 40px;
    }
  }
</style>
