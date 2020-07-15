<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped="scoped">
  #app{background: #0B173D ;width: 100%;height: 100vh;overflow-x: hidden;color: white;font-family: 'PingFangSC-Semibold';}
  #app /deep/ .el-loading-mask{background-color: rgba(0,0,0,.6)!important;}
</style>
