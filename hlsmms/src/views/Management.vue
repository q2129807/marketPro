<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>分类管理</h3>
          </div>
          <div class="text item">
            <el-table :data="tableData" style="width: 100%"  stripe>
              <el-table-column label="分类名称" >
                <template slot-scope="scope">
                 
                  <span >{{ scope.row.goods }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="mannagebtn2"><i class="el-icon-edit"></i>编辑</el-button>
                
                </template>
              </el-table-column>
            </el-table>
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
        tableData: [{
          goods: '海飞丝',
          
        }, {
       goods: '海飞丝',
        }, {
          goods: '海飞丝',
        }, {
         goods: '海飞丝',
        }]
      }
    
  },
  components: {
    LeftMenu,
    RightTop,
    RightBottom
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style>
</style>

