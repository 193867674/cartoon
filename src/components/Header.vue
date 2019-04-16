<template>
  <div class="easel-header">
    <div class="title">
      <div class="menu">
        <img src="../../public/img/icon/menu.png" class="auto-img">
      </div>
      <span>画架</span>
      <div class="normal">
        <img src="../../public/img/icon/normal.png" class="auto-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'EaselHeader'
};
</script>

<style lang="scss" scoped>
.easel-header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 7%;
  background-color: rgb(107, 201, 255);

  .title {
    flex: 1 0 100%;
    margin: auto 0;
    text-align: center;
    color: #fff;

    .menu {
      position: absolute;
      left: 2%;
      top: 0;
      bottom: 0;
      width: 8%;
      height: 65%;
      margin: auto 0;
    }

    .normal {
      position: absolute;
      right: 2%;
      top: 0;
      bottom: 0;
      width: 7%;
      height: 60%;
      margin: auto 0;
    }
  }
}
</style>