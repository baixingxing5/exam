<template>
<div class="topN">
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item index="1" class="h_logo">我的后台管理中心</el-menu-item>
    <el-submenu index="2" class="nav_right">
      <template slot="title"><i class="iconfont h_user">&#xe675;</i>张三</template>
    <el-menu-item index="2-1" class="exit">退出</el-menu-item>
  </el-submenu>
</el-menu>
 </div>
</template>
<style scoped>
.topN {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
}
.h_logo {
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.el-submenu__title .h_user {
  color: #f4dd39;
  margin-right: 8px;
  vertical-align: top;
}
.nav_right {
  float: right;
  margin-right: 40px;
}
.el-submenu .el-menu-item {
  min-width: 100px;
}

.topN .exit {
 text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "2"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
