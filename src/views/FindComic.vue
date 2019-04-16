<template>
  <div class="findcomic">
    <div class="find">
      <div class="title">
        <div class="btn">
          <div class="btn-img">
            <img src="../../public/img/icon/normal.png" class="auto-img">
          </div>
          <div class="text" @click="finds">搜漫画~搜作者~</div>
        </div>
      </div>
    </div>

    <div class="category">
      <div class="item" v-for="(c,i) in $store.state.categorys" :key="i" @click="goClsCar(c)">{{c}}</div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FindComic",
  data() {
    return {
      name: 'findcomic'
    }
  },
  methods: {
    goClsCar(e) {
      this.$emit('changeShow')
      this.$router.push({name: 'classifiedComics', query: {name: e}})
    },
    finds() {
      this.$emit("changeShow");
      this.$router.push({ name: "find", query: {name: this.name}});
    }
  }
};
</script>

<style lang="scss" scoped>
.findcomic {
  .find {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 10%;
    background-color: rgb(107, 201, 255);

    .title {
      flex: 1;
      color: #fff;
      margin: auto 0;
      text-align: center;
    }

    .btn {
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      width: 70%;
      height: 40%;
      margin: 0 auto;
      border-radius: 30%;
      text-align: center;
      background-color: rgba(172, 172, 172, 0.3);

      .btn-img {
        display: inline-block;
        width: 10%;
        height: 60%;
        margin-top: 1%;
      }

      .text {
        display: inline-block;
        color: #fff;
      }
    }
  }

  .category {
    margin-top: 20%;
    margin-bottom: 20%;

    .item {
      float: left;
      width: 30%;
      height: 70px;
      margin-top: 2%;
      margin-left: 2%;
      line-height: 70px;
      text-align: center;
      border-radius: 15%;
      background-color: rgba(90, 90, 90, 0.3);
    }

    .clear {
        clear: both;
    }
  }
}
</style>
