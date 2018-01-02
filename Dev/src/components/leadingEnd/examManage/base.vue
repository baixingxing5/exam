<template>
<el-card class="box-card">
  <!-- 工具条 -->
	<div slot="header" class="clearfix toolbar">
					<h2 class="fl">试题维护</h2>
			<el-form :model="form" :inline="true" class="fr">
				<el-form-item>
          <el-input v-model="form.pname" placeholder="出题人"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click = "getUsers">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
	</div>

<!-- 列表 -->
  <el-table :data="tableData4" style="width: 100%"  v-loading="listLoading">
		<el-table-column type="selection" width="55"></el-table-column>
		<el-table-column type="index" width="60"></el-table-column>
    <el-table-column prop="name" label="试卷名称" width="150">
    </el-table-column>
    <el-table-column prop="category" label="试卷类别" width="120">
    </el-table-column>
    <el-table-column prop="selectNum" label="试卷选择题" width="120">
    </el-table-column>
    <el-table-column prop="gapNum" label="试卷填空题" width="120">
    </el-table-column>
    <el-table-column prop="drawTime" label="试卷抽提时间" width="180">
    </el-table-column>
    <el-table-column prop="pname" label="试卷抽提人" width="120">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
				<el-button
          @click = 'dialogFormVisible = true'
          type="primary"
          size="small">
          编辑
        </el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="danger"
          size="small">
          移除
        </el-button>
           </template>
     </el-table-column>
     </el-table>
     <el-dialog title="增加" :visible.sync="dialogFormVisible" center top="10vh">
       <el-form :model="form">
          <el-form-item label="试卷名称" :label-width="formLabelWidth">
           <el-input v-model="form.name" auto-complete="off"></el-input>
         </el-form-item>
         <el-form-item label="试卷类别" :label-width="formLabelWidth">
           <el-select v-model="form.categroy" placeholder="请选择课程">
             <el-option label="语文" value="yuwen"></el-option>
             <el-option label="数学" value="shuxue"></el-option>
           </el-select>
         </el-form-item>
        <el-form-item label="试卷选择题" :label-width="formLabelWidth">
           <el-select v-model="form.selectNum" placeholder="请选择个数">
             <el-option label="10" value="10"></el-option>
             <el-option label="20" value="20"></el-option>
           </el-select>
         </el-form-item>
         <el-form-item label="试卷填空题" :label-width="formLabelWidth">
           <el-select v-model="form.gapNum" placeholder="请选择个数">
             <el-option label="10" value="5"></el-option>
             <el-option label="20" value="10"></el-option>
           </el-select>
         </el-form-item>
        <el-form-item label="试卷抽提时间" :label-width="formLabelWidth">
           <div class="block">
            <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
           </div>
         </el-form-item>
                 <el-form-item label="试卷抽提人" :label-width="formLabelWidth">
         <el-input v-model="form.pname" auto-complete="off"></el-input>
         </el-form-item>
       </el-form>
         <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
     </el-dialog>
  	<div class="block pages">
		<el-pagination background layout="prev, pager, next" :total="1000">
		</el-pagination>
	</div>
</el-card>
</template>

<style scoped>
.toolbar{
	overflow: hidden;
}
.toolbar h2{
	line-height: 40px;
}
.el-card__header{
	padding: 10px 20px;
}
.toolbar .el-form-item{
	margin-bottom: 0;
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

.pages {
  margin-top: 20px;
  text-align: center;
}

.line {
  text-align: center;
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
          name: "期中考试试题",
          category: "语文",
          selectNum: 10,
          gapNum: 5,
          drawTime: "2017-1-2-14:31",
          pname: '张三'
        },
        {
          name: "期中考试试题",
          category: "语文",
          selectNum: 10,
          gapNum: 5,
          drawTime: "2017-1-2-14:31",
          pname: '张三'
				},
				{
          name: "期中考试试题",
          category: "语文",
          selectNum: 10,
          gapNum: 5,
          drawTime: "2017-1-2-14:31",
          pname: '张三'
        },
      ],
      dialogFormVisible: false,
      form: {
        name: "",
        categroy: "",
        selectNum: "",
        gapNum: "",
        sdateL: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>