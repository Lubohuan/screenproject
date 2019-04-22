<template>
  <div id="hompage">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" >
  #hompage {
    font-family: 'Avenir', Helvetica, Arial,'Microsoft YaHei','PingFang SC';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    color: #2c3e50;
    font-size: 14px;
    margin: 0;
    padding:0;
    height:100%;
    width:100%;
    overflow: hidden;
    background-color:hsla(229, 38%, 15%, 1);
}
</style>
