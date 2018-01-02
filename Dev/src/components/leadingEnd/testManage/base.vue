<template>
<el-card class="box-card">
    <div slot="header" class="clearfix">
        <h2>基本维护</h2>
    </div>

    <el-row :gutter="40">
        <el-col :span="6" v-for="i in 5" class="items">
            <div class="grid-content border-line">
                <a href="#">{{i}}>{{'科目'+ i}}</a>
            </div>
        </el-col>
    </el-row>
</el-card>
</template>

<style scoped>
.el-card__header h2{
    line-height: 40px;
}
.text {
    font-size: 14px;
}

.grid-content {
    margin-bottom: 18px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 28px;
}

.box-card {
    width: 83%;
    margin-left: 220px;
    margin-top: 70px;
}

.border-line {
    border: 1px solid #ccc;
}
</style>
<script>
export default {
  data () {
      return {
          
      }
  },
}
</script>
