<template>
<el-card class="box-card">
    <div slot="header" class="clearfix">
        <h2>其他维护</h2>
    </div>
    <el-row>
        <el-col :span="24">
            <div id="chart2"></div>
        </el-col>
    </el-row>
</el-card>
</template>

<style scoped>
.el-card__header h2{
    line-height: 40px;
}
.box-card {
    width: 83%;
    margin-left: 220px;
    margin-top: 70px;
}
#chart2 {
  height: 300px;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var myChart1 = echarts.init(document.getElementById("chart2"));

    var option1 = {
      title: {
        text: "题库更新记录",
        textStyle: {
          color: "rgb(45, 7, 151)",
          fontSize: 24,
          fontWeight: 400
        }
      },
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "题数",
          type: "line",
          stack: "总量",
          data: [20, 1, 3, 14, 9, 23, 11, 33, 22, 11, 21, 2]
        }
      ]
    };
    myChart1.setOption(option1);
  }
};
</script>
