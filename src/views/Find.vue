<template>
  <div class="finds">
    <div class="finds-top">
      <div class="top-img">
        <div class="pressed" @click="pres">
          <img src="../../public/img/icon/pressed.png" class="auto-img">
        </div>
      </div>
      <div class="name">
        <div class="text">
          <input class="int" type="text" placeholder="搜漫画~搜作者~" v-model="value" @input="inp(value)">
        </div>
      </div>
    </div>
    <div class="finds-con">
      <div class="imgs">
        <div class="hot-i" v-for="item in $store.state.clscar" @click="cari(item)" :key="item.i">
          <div class="i-img">
            <img src="../../public/img/icon/null.jpg" v-if="item.im === null" class="auto-img">
            <img v-lazy="$store.state.img+item.im" v-else class="auto-img">
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
      value: "",
      routeName: ''
    };
  },
  created() {
      this.routeName = this.$route.query.name
  },
  methods: {
    pres() {
      this.$emit("backChange");
      this.$router.push({ name: this.routeName });
    },
    cari(i) {
      this.$router.push({ name: "caricature", query: { data: i } });
    },
    inp(v) {
      this.$store.commit("findComics", v);
    }
  }
};
</script>

<style lang="scss" scoped>
.finds {
  .finds-top {
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

    .int {
        width: 85%;
        height: 80%;
        border: none;
    }
  }

  .finds-con {
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