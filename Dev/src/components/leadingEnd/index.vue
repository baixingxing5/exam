<template>
<div class="main">
    <topNav></topNav>
    <leftSlide></leftSlide>
    <router-view></router-view>
</div>
</template>

<style>

.el-menu--horizontal .el-submenu>.el-menu {
    top: 61px ! important;
    z-index: 100;
}
</style>

<script>
import topNav from '../comm/nav'
import leftSlide from '../comm/slide'
export default {
    data() {
        return {

        }
    },
    components: {
        topNav,
        leftSlide,
    },

}
</script>
