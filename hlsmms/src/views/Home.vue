<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>系统信息</h3>
          </div>
          <div class="text item">
            <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
            <el-alert title="导入数据" type="info" show-icon></el-alert>
            <el-row :gutter="40">
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>销售排行</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData" style="width: 100%" stripe>
                      <el-table-column prop="goodsname" label="商品名称"></el-table-column>
                      <el-table-column prop="sale" label="销量"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="12">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <h3>缺货的商品</h3>
                  </div>
                  <div class="text item">
                    <el-table :data="tableData2" style="width: 100%" stripe>
                      <el-table-column prop="goodsname" label="商品名称" width="180"></el-table-column>
                      <el-table-column prop="repertory" label="库存" width="180"></el-table-column>
                      <el-table-column prop="show" label="操作"></el-table-column>
                    </el-table>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
import LeftMenu from '../components/leftMenu'
import RightTop from '../components/rightTop'
import RightBottom from '../components/rightBottom'
export default {
 
  data() {
    return {
      tableData: [
        { goodsname: "海飞丝去屑洗发水", sale: "8" },
        { goodsname: "茅台酒", sale: "6" },
        { goodsname: "龙凤呈祥", sale: "5" },
        { goodsname: "利群", sale: "2" }
      ],
      tableData2:[
        { goodsname: "我的优乐美", repertory: "0" ,show:"入库"},
      ]
    };
  },
  components:{
    LeftMenu,RightTop,RightBottom
  }
};
</script>
<style>

</style>
