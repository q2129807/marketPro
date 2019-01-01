<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加账号</h3>
          </div>
          <div class="text item">
            <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              labelPosition="top"
              size="mini"
            >
              <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="管理组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
      <!-- 底部  height默认为60  -->
      <RightBottom></RightBottom>
    </el-container>
  </el-container>
</template>

<script>
//引入的名字可以随便取
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";
export default {
  data() {
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
        username: "",
        checkPass: "",
        usergroup: ""
      },
      rules2: {
        pass: [
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
        ],
        checkPass: [
          { required: true, trigger: "blur", message: "确认密码不能为空" },
          {
            min: 6,
            max: 12,
            message: "确认密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          { validator: validatePass2, trigger: "blur" }
        ],
        usergroup: [
          { required: true, message: "请选择管理权限", trigger: "change" }
        ]
      }
    };
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post(
              "http://127.0.0.1:9090/users/useradd",
              this.qs.stringify(this.ruleForm2)//必须要用qs转换数据才能发送参数给后台
            )
            .then(result => {//后端发送回来的数据在data属性里面
              if (result.data.isOk) {
                //添加用户成功elementui成功提醒
                this.$message({
                  message: result.data.msg,
                  type: "success"
                });
                setTimeout(()=>{
                  this.$router.push("/userlist")
                },200);
              }else{
                this.$message.error(result.data.msg);
              }
            })
            .catch(err => {});
          //this.$router.push("/"); //vue挂在实例上的(所以加this)方法进行无刷新跳转
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  
  
};
</script>
<style>
body > .el-container {
  margin-bottom: 40px;
}
</style>
