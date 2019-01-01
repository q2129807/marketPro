<template>
  <div id="app">
  
    <!-- 路由显示 -->
    <router-view></router-view>
  
  </div>
</template>

<script>


export default {
  name: "app",
  components: {},
    data(){
      return {}
    }
};
</script>

<style>

html,body,#loginbox,#home,#app{
  height: 100%;
  margin: 0px
}
</style>
