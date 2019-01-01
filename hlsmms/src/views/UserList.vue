<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>用户管理</h3>
          </div>
          <div class="text item">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="编号" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.userid }}</span>
                </template>
              </el-table-column>

              <el-table-column label="账号" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.username }}</span>
                </template>
              </el-table-column>

              <el-table-column label="日期" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.addDate|foramtData }}</span>
                </template>
              </el-table-column>
              <el-table-column label="管理组" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.usergroup }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.row.userid)">
                    <i class="el-icon-edit"></i>编辑
                  </el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.row.userid)">
                    <i class="el-icon-delete"></i>删除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-main>
      <!-- 底部  height默认为60  -->
      <RightBottom></RightBottom>
    </el-container>
     <el-dialog
        title="修改用户资料"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" id="mydailog">
        <el-form
              :model="ruleForm2"
              status-icon
              :rules="rules2"
              ref="ruleForm2"
              label-width="100px"
              class="demo-ruleForm"
              label-position="right"
            >
              <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="密码" prop="userpwd">
                <el-input type="text" v-model="ruleForm2.userpwd" autocomplete="off"></el-input>
              </el-form-item>

              <el-form-item label="用户组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>

              <!-- <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item> -->
            </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm2')">确定修改</el-button>
        </span>
      </el-dialog>
  </el-container>
</template>

<script>
//引入的名字可以随便取
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";
import moment from "moment";
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false, //控制对话框的显示true和隐藏false
       ruleForm2: {
        userpwd: "",
        username: "",
        usergroup: '',
        userid: 0
      },
       rules2: {
        username: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "用户名必须填写" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        userpwd: [
          { required: true, trigger: "blur", message: "密码必须填写" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
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
      //调用组件的验证方法提交表单是验证
      this.$refs[formName].validate(valid => {
        //valid参数表示验证的结果，true表示验证通过，false验证失败
        if (valid) {
          console.log(this.ruleForm2)
          //前端——收集新的数据并发起ajax请求到后端
          this.axios.post("http://127.0.0.1:9090/users/usersave",
          this.qs.stringify(this.ruleForm2)
          ).then(result=>{
             //reslt {"isOk":true,"code":1,"msg":"用户添加成功！"}
             if(result.data.isOk){
                this.$message({
                  message: result.data.msg,
                  type: 'success'
                });
                //修改完毕就关闭对话框
                this.dialogVisible = false;
                //调用获取数据的方法更新数据列表
                this.updateUser();
             }
             else{
                this.$message.error(result.data.msg);
             }
          }).catch(err=>{
            this.$message.error('错了哦'+err.message);
          })
          
        } else {
          //alert("× 表单验证失败!");
          return false;
        }
      });
    },
    updateUser(){
         this.axios
      .get("http://127.0.0.1:9090/users/getdata")
      .then(result => {
        //得到后端响应过来的数据和v-model双向数据绑定显示到页面,得到的数据刚好是一个数组对象所以直接赋值
        this.tableData = result.data;
      })
      .catch(err => {
        console.error(err.message);
      });
    },
    handleEdit(userid) {
      this.axios.get("http://127.0.0.1:9090/users/getbyid?userid="+userid)
      .then(result=>{
        console.log(result.data[0])
        this.ruleForm2=result.data[0]
        this.dialogVisible=true;  //显示对话框
      }).catch(err=>{
        console.log(err.message)
      })
    },
    handleDelete(userid) {
      //获取需要删除的id
      this.axios
        .get("http://127.0.0.1:9090/users/deldata?userid=" + userid)
        .then(result => {
           result = result.data;//把结果中的data中的内容重新赋值给本身
          if (result.isOk) {
            this.$message({//提示成功信息
              message: result.msg,
              type: "success"
            });
            this.updateUser()//再发送一次ajax获取数据库中的数据更新在tabledata中
            //因为双向数据绑定所以页面不需要刷新就可以看到删除了数据
            //也可以用this.$router.push("/userlist")但是这种需要刷新页面体验不好


          } else {
            this.$message.error('出错了：'+result.msg);
          }
        })
        .catch(err => {
          this.$message.error('出错了：'+err.message);
        });
    },  //关闭对话框的确认方法
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
   }
  },
  
  //钩子函数在页面刷新的时候触发 发送AJAX请求后端数据
  created() {
   /*  this.axios
      .get("http://127.0.0.1:9090/users/getdata")
      .then(result => {
        //得到后端响应过来的数据和v-model双向数据绑定显示到页面,得到的数据刚好是一个数组对象所以直接赋值
        this.tableData = result.data;
      })
      .catch(err => {
        console.error(err.message);
      }); */
      this.updateUser()
  },
  //用monment设置时间格式需要用过滤器
  filters: {
    foramtData(oldDate) {
      return moment(oldDate).format("YYYY-MM-DD"); //语法 moment(原数据).format(时间格式)
    }
  }
};
</script>
<style>
body > .el-container {
  margin-bottom: 40px;
}
</style>
