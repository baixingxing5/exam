<template>
  <div class="login">
    <el-card class="box-card">
      <h2>登录</h2>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
       <el-form-item labelWidth='0'  prop="login">
    <el-input type="input" v-model="ruleForm2.login" auto-complete="off" placeholder="请输入账号"></el-input>
       </el-form-item>
     <el-form-item labelWidth='0' prop="pass">
    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="请输入密码"></el-input>
     </el-form-item>
      <el-form-item labelWidth='0' prop="checkPass">
    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item labelWidth='0'>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
</el-form>
</el-card>
<el-dialog
  title="警告"
  :visible.sync="dialogVisible"
  width="30%">
  <span class="bg-text-Danger">用户名密码不正确！请重新输入</span>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        login: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        login: [{ validator: checkName, trigger: "blur" }]
      },
      dialogVisible: false
    };
  },
  beforeCreate() {
    const loading = this.$loading({
      lock: true,
      text: "Loading",
      background: "rgba(255, 255, 255, 0.8)"
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
  },
  methods: {
      submitForm(formName) {
        console.log(this.ruleForm2.pass)
        if(this.ruleForm2.pass == 'bai' && this.ruleForm2.login == 'bai'){
           this.$router.push('/main');
           this.dialogVisible = false
        }else{
           this.dialogVisible = true
        }

       },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>


<style scoped>
.login {
  width: 30%;
  margin: 10% auto;
}

.login .box-card h2 {
  padding-bottom: 20px;
  color: rgba(194, 185, 185, 0.767);
  letter-spacing: 3px;
  font-size: 26px;
  font-weight: normal;
}
.login .el-button {
  margin-top: 20px;
}
.login .el-dialog__footer {
  text-align: center;
}
.el-form-item__content {
  margin: 0 !important;
}
</style>
