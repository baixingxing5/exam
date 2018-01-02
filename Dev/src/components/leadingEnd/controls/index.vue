<template>
<el-card class="box-card">
	<h2>控制台</h2>
	<el-row :gutter="40" class="item_status">
		<el-col :span="6">
			<div class="grid-content bg-item1">
				<span class="num">0</span>
				<p>最近记录</p>
				<div class="grid_footer">
					<span>列出考试记录</span>
					<i class="iconfont rightArrow">&#xe650;</i>
				</div>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-item2">
				<span class="num">0</span>
				<p>考试</p>
				<div class="grid_footer">
					<span>试卷管理</span>
					<i class="iconfont rightArrow">&#xe650;</i>
				</div>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-item3">
				<span class="num">0</span>
				<p>试题</p>
				<div class="grid_footer">
					<span>管理试题</span>
					<i class="iconfont rightArrow">&#xe650;</i>
				</div>
			</div>
		</el-col>
		<el-col :span="6">
			<div class="grid-content bg-item4">
				<span class="num">0</span>
				<p>学生</p>
				<div class="grid_footer">
					<span>查看学生</span>
					<i class="iconfont rightArrow">&#xe650;</i>
				</div>
			</div>
		</el-col>
	</el-row>
	<div id="chart1"></div>
</el-card>
</template>
 
<style scoped>
.box-card {
    width: 83%;
    margin-left: 220px;
    margin-top: 70px;
}

#chart1 {
	height: 300px;
	box-sizing: border-box;
	padding: 20px 60px 20px 0;
}

.box-card h2 {
	font-size: 26px;
	font-weight: normal;
	color: rgb(45, 7, 151);
}

.box-card .item_status {
	min-height: 100px;
	border-bottom: 3px solid rgb(7, 116, 199);
	padding: 40px 60px;
}

.box-card .grid-content {
	border-radius: 4px;
	min-height: 170px;
}

.box-card .grid-content p {
	text-align: right;
	font-size: 18px;
	color: #fff;
	padding-right: 5px;
}

.grid-content .num {
	box-sizing: border-box;
	font-size: 30px;
	color: #fff;
	text-align: right;
	font-weight: normal;
	display: block;
	padding: 50px 20px 0 0;
}

.grid-content .grid_footer {
	background: rgba(0, 0, 0, 0.5);
	color: #fff;
	min-height: 35px;
	line-height: 35px;
	font-size: 14px;
	margin-top: 20px;
	border-radius: 4px;
	padding-left: 7px;
}

.box-card .bg-item1 {
	background: #00b09b;
}

.box-card .bg-item2 {
	background: #74ebd5;
}

.box-card .bg-item3 {
	background: #22c1c3;
}

.box-card .bg-item4 {
	background: #ef3b36;
}

.rightArrow {
	font-style: normal;
	float: right;
	font-size: 19px;
	padding-right: 4px;
	cursor: pointer;
	width: 40px;
	text-align: right;
}
</style>
 


<script>
export default {
	data() {
		return {};
	},
	mounted() {
		var myChart = echarts.init(document.getElementById("chart1"));

		var option = {
			title: {
				text: "访客人数",
				textStyle: {
					color: 'rgb(45, 7, 151)',
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
				data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
			},
			yAxis: {
				type: "value"
			},
			series: [{
				name: "人数",
				type: "line",
				stack: "总量",
				data: [120, 132, 101, 134, 90, 230, 210]
			}, ]
		};
		myChart.setOption(option);

	},


};
</script>

