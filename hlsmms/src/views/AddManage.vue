<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>添加分类</h3>
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
              <el-form-item label="所属分类" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="分类名称" prop="username">
                <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="状态">
                  <el-radio v-model="radio" label="1">禁用</el-radio>
  <el-radio v-model="radio" label="2">启用</el-radio>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')" class="managebtn">添加</el-button>
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
import LeftMenu from "../components/leftMenu";
import RightTop from "../components/rightTop";
import RightBottom from "../components/rightBottom";
export default {
  data() {
    return {
      ruleForm2: {
        username: "",
        usergroup: ""
      },
      rules2: {
        username: [
          { required: true, trigger: "blur", message: "分类不能为空" }
        ],
        usergroup: [
          { required: true, message: "请选择管理权限", trigger: "change" }
        ]
      },
         radio: '1'
    };
  },

  components: {
    LeftMenu,
    RightTop,
    RightBottom
  }
};
</script>
<style>
</style>

