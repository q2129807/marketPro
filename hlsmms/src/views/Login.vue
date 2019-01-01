<template>
  <div id="loginbox">
    <el-card class="box-card" id="login">
      <div slot="header" class="clearfix">
        <span class="usertitle">用户登录</span>
      </div>
      <div class="text item" id="loginbox2">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="username">
            <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="userpwd">
            <el-input type="password" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm2: {
        userpwd: "",
        username: ""
      },
      //规则
      rules2: {
        userpwd: [
          { required: true, trigger: "blur", message: "密码不能为空" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        username: [
          { required: true, trigger: "blur", message: "账号不能为空" },
          {
            min: 6,
            max: 12,
            message: "账号长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //让axios携带cookie
          this.axios.defaults.withCredentials = true;
          this.axios
            .post(
              " http://192.168.1.122:9090/users/checkLogin",
              this.qs.stringify(this.ruleForm2)
            )
            .then(result => {
              if (result.data.isOk) {
                //登录成功
                this.$message({
                  message: "恭喜你，" + result.data.msg,
                  type: "success"
                });
                //this.$router.push("/"); //使用路由对象的push实现跳转
              } else {
                //登录失败
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {
              this.$message.error("错了哦" + err.message);
            });

          //this.$router.push('/')//vue挂在实例上的(所以加this)方法进行无刷新跳转
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
#login {
  width: 500px;
  height: 300px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#loginbox {
  background-color: green;
}
#loginbox .usertitle {
  font-size: 20px;
  font-weight: bold;
}
.el-button--default {
  margin-left: 155px !important;
}
</style>

