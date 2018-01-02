<template>
<el-card class="box-card">
	<div slot="header" class="clearfix">
		<h2>试题维护</h2>
	</div>
	<el-table :data="tableData4" style="width: 100%" min-height="250">
		<el-table-column fixed prop="date" label="日期" width="150">
		</el-table-column>
		<el-table-column prop="name" label="姓名" width="120">
		</el-table-column>
		<el-table-column prop="province" label="省份" width="120">
		</el-table-column>
		<el-table-column prop="city" label="市区" width="120">
		</el-table-column>
		<el-table-column prop="address" label="地址" width="300">
		</el-table-column>
		<el-table-column prop="zip" label="邮编" width="120">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="120">
			<template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="danger"
          size="small">
          移除
        </el-button>
        <el-button
          @click.native.prevent="AddRow(scope.$index, tableData4)"
          type="primary"
          size="small">
          增加
        </el-button>
 </template>
    </el-table-column>
  </el-table>
	<div class="block pages">
		<el-pagination background layout="prev, pager, next" :total="1000">
		</el-pagination>
	</div>
</el-card>
</template>

<style scoped>
.text {
	font-size: 14px;
}
.el-card__header h2{
    line-height: 40px;
}
.pages {
	margin-top: 20px;
	text-align: center;
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

.el-button--small,
.el-button--small.is-round {
	padding: 5px 5px;
}

.border-line {
	border: 1px solid #ccc;
}
</style>

<script>
export default {
	methods: {
		deleteRow(index, rows) {
			rows.splice(index, 1);
		},
		AddRow(index, rows) {}
	},
	data() {
		return {
			tableData4: [{
					date: "2016-05-03",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-08",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-06",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				},
				{
					date: "2016-05-07",
					name: "王小虎",
					province: "上海",
					city: "普陀区",
					address: "上海市普陀区金沙江路 1518 弄",
					zip: 200333
				}
			]
		};
	}
};
</script>

