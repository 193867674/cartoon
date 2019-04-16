<template>
  <div class="clscomics">
    <div class="clscomics-top">
      <div class="top-img">
        <div class="pressed" @click="pres">
          <img src="../../public/img/icon/pressed.png" class="auto-img">
        </div>
      </div>
      <div class="name">
        <div class="text">{{name}}</div>
      </div>
    </div>
    <div class="clscomics-con">
      <div class="imgs">
       <div class="hot-i" v-for="item in $store.state.clscar" @click="cari(item)" :key="item.i">
          <div class="i-img">
            <img src="../../public/img/icon/null.jpg" v-if="item.im === null" class="auto-img">
            <img v-lazy="$store.state.img+item.im" v-else  class="auto-img">
          </div>
          <div>{{item.t}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      routeName: 'classifiedComics'
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.$store.commit("classifiedComics", this.name);
  },
  methods: {
    pres() {
      this.$emit("backChange");
      this.$router.push({ name: "findcomic" });
    },
    cari(i) {
      this.$router.push({name: 'caricature', query: {data: i}})
    }
  }
};
</script>

<style lang="scss" scoped>
.clscomics {
  .clscomics-top {
    position: fixed;
    display: table;
    top: 0;
    width: 100%;
    height: 3%;
    background-color: #fff;

    .top-img {
      float: left;
    }

    .pressed {
      width: 60%;
    }

    .name {
      width: 80%;
      float: left;
      height: 100%;
      display: table;
      text-align: center;
    }

    .text {
      display: table-cell;
      vertical-align: middle;
    }
  }

  .clscomics-con {
    margin-top: 10%;

    .imgs {
        width: 100%;
        display: inline-block;
    }

    .rcm-i {
      width: 45%;
      height: 315px;
      margin-top: 5%;
      margin-left: 3%;
      margin-right: 2%;
      float: left;
    }

    .hot-i {
      width: 45%;
      height: 315px;
      margin-top: 5%;
      margin-left: 3%;
      margin-right: 2%;
      float: left;
    }

    .i-img {
      width: 186px;
      height: 280px;
    }
  }
}
</style>
