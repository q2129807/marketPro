<template>
  <el-container id="home">
    <LeftMenu></LeftMenu>
    <el-container id="container">
      <!-- 头部  height默认为60  -->
      <RightTop></RightTop>
      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>销售统计</h3>
          </div>
          <div class="text item">
            
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
      
    };
  },
  components:{
    LeftMenu,RightTop,RightBottom
  }
};
</script>
<style>

</style>
