<template>
  <div class="nav">
    <router-link to="/easel" tag="div" class="navigation">画架</router-link>
    <router-link to="/" exact tag="div" class="navigation">推荐</router-link>
    <router-link to="/findcomic" tag="div" class="navigation">找漫画</router-link>
    <router-link to="/setting" tag="div" class="navigation">设置</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 10%;
  color: rgb(82, 73, 73);
  background-color: rgb(223, 223, 223);

  .navigation {
    flex: 1;
    margin: auto 0;
    text-align: center;
  }
  
  .active {
    font-size: 20px;
    color: rgb(88, 155, 255);
  }
}
</style>
