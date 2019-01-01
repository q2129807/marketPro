<template>
     <el-aside width="230px">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :unique-opened="true"
      >
        <!-- 因为是布尔属性直接写识别不了所以需要用属性绑定 -->
        <div id="leftTop">
          <h2>华联超市管理系统</h2>
          <p>您好,admin</p>
          <p>
            <router-link to="/">首页管理</router-link>|<a href="#">退出系统</a>
          </p>
        </div>
        <el-submenu index="1">
          <template slot="title">
            <span>分类管理</span>
          </template>
          <el-menu-item index="/management"><router-link to="/management">分类管理</router-link></el-menu-item>
          <el-menu-item index="/addmanage"><router-link to="/addmanage">添加分类</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>商品管理</span>
          </template>
          <el-menu-item index="/goodsmanage"><router-link to="/goodsmanage">商品管理</router-link></el-menu-item>
          <el-menu-item index="/addgoods"><router-link to="/addgoods">添加商品</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>进货管理</span>
          </template>
          <el-menu-item index="/stockcontrol"><router-link to="/stockcontrol">库存管理</router-link></el-menu-item>
          <el-menu-item index="/addstock"><router-link to="/addstock">添加库存</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>出货管理</span>
          </template>
          <el-menu-item index="/salelist"><router-link to="/salelist">销售列表</router-link></el-menu-item>
          <el-menu-item index="/goodsout"><router-link to="/goodsout">商品出库</router-link></el-menu-item>
          <el-menu-item index="/salereturn"><router-link to="/salereturn">商品退货</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <span>统计管理</span>
          </template>
          <el-menu-item index="/salestatistics"><router-link to="/salestatistics">销售统计</router-link></el-menu-item>
          <el-menu-item index="/stockstatistics"><router-link to="/stockstatistics">进货统计</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <span>账号管理</span>
          </template>
          <el-menu-item index="/useradd"><router-link to="/useradd">账号管理</router-link></el-menu-item>
          <el-menu-item index="/userlist"><router-link to="/userlist">添加账号</router-link></el-menu-item>
          <el-menu-item index="/pwdedit"><router-link to="/pwdedit">密码修改</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <span>会员管理</span>
          </template>
          <el-menu-item index="/accountcontrol"><router-link to="/accountcontrol">账号管理</router-link></el-menu-item>
          <el-menu-item index="/addaccount"><router-link to="/addaccount">添加账号</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <span>系统管理</span>
          </template>
          <el-menu-item index="8-1">系统信息</el-menu-item>
          <el-menu-item index="8-2">系统配置</el-menu-item>
          <el-menu-item index="8-3">权限管理</el-menu-item>
          <el-menu-item index="8-4">添加管理组</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>
<script>
export default {
     methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  },
}
</script>
<style>

</style>


