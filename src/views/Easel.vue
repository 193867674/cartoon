<template>
  <div>
    <Header></Header>

    <div class="nullbody">
      <div class="content">
        <div class="heart">
          <div class="image">
            <img src="../../public/img/icon/heart-broken.png" class="auto-img">
          </div>
          <span>一本都没，你的小心心不会痛吗？</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../src/components/Header.vue";

export default {
  name: "Easel",
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.nullbody {
  display: flex;
  position: fixed;
  top: 7%;
  width: 100%;
  height: 85%;

  .content {
    flex: 1;
    border: 15px solid rgb(223, 223, 223);

    .heart {
      text-align: center;
      margin: 50% auto;
      color: rgb(161, 161, 161);
    }

    .image {
      width: 35%;
      margin: 0 auto;
    }
  }
}
</style>

