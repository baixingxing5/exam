<template>
<div class="leftSlide">
  <el-col>
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"  router @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/main" class="active-text-color">
        <i class="el-icon-location"></i>
        <span slot="title">控制中心</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont">&#xe64f;</i>
          <span>题库管理</span>
 </template>
          <el-menu-item index="/base">基本维护</el-menu-item>
          <el-menu-item index="/exam">试题维护</el-menu-item>
          <el-menu-item index="/other">其他维护</el-menu-item>
      </el-submenu>
       
      <el-submenu index="3">
<template slot="title">
<i class="iconfont">&#xe601;</i>
<span>试卷管理</span>
</template>
          <el-menu-item index="/base1">试卷信息维护</el-menu-item>
          <el-menu-item index="3-2">试卷其他维护</el-menu-item>
      </el-submenu>
      

      <el-submenu index="4">
<template slot="title">
<i class="iconfont">&#xe60e;</i>
<span>课程管理</span>
</template>
          <el-menu-item index="4-1">课程基本维护</el-menu-item>
      </el-submenu>
      
       <el-submenu index="5">
<template slot="title">
<i class="iconfont">&#xe619;</i>
<span>用户管理</span>
  </template>
          <el-menu-item index="5-1">用户信息维护</el-menu-item>
          <el-menu-item index="5-2">用户成绩维护</el-menu-item>
      </el-submenu>
       <el-submenu index="6">
<template slot="title">
<i class="iconfont">&#xe600;</i>
<span>账号设置</span>
     </template>
          <el-menu-item index="6-1">基本信息维护</el-menu-item>
          <el-menu-item index="6-1">其他信息维护</el-menu-item>
      </el-submenu>
        <el-submenu index="7">
<template slot="title">
<i class="iconfont">&#xe600;</i>
<span>系统管理</span>
 </template>
          <el-menu-item index="7-1">权限设置</el-menu-item>
      </el-submenu>
     
    </el-menu>
  </el-col>
   </div>
</template>
<style scoped>
.leftSlide {
  position: fixed;
  top: 61px;
  width: 210px;
  left: 0;
  background-color: rgb(84, 92, 100);
  bottom: 0;
}
.txt{
  font-size: 12px;
  color:#fff;
}
.iconfont {
  margin-right: 5px;
  vertical-align: top;
}

.my_data {
  color: #0ee2a3;
}
.el-submenu .el-menu-item{
  font-size:12px;
}
</style>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
console.log(window.innerHeight)
</script>
