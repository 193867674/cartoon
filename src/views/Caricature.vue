<template>
  <div class="car">
    <div class="car-top">
      <div>
        <div class="pressed" @click="pressed">
          <img src="../../public/img/icon/pressed.png" class="auto-img" >
        </div>
      </div>
      <div class="details">
        <div class="details-img">
          <img src="../../public/img/icon/null.jpg" v-if="caricature.im === null" class="auto-img">
          <img :src="$store.state.img + caricature.im" v-else class="auto-img">
        </div>
        <div class="details-message">
          <div class="caricature-name">{{caricature.t}}</div>
          <div class="caricature-category" v-for="(c, i) in caricature.c" :key="i">{{c}}</div>
        </div>
      </div>
    </div>
    <div class="car-cen">
      <div class="car-nav">
        <router-link to="/details" exact tag="div" class="car-details">详情</router-link>
        <router-link to="/selections" tag="div" class="car-details">选集</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      caricature: {},
    };
  },
  created() {
    this.caricature = this.$route.query.data;
    this.$store.dispatch("carGet", this.caricature.i);
    this.$store.commit("carcat", this.caricature);
  },
  methods: {
    pressed() {
      this.$emit("backChange");
      this.$router.push({path: '/'})
    }
  }
};
</script>

<style lang="scss" scoped>
.car {
  .car-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 30%;
    overflow: hidden;
    background-color: rgb(26, 25, 25);

    .pressed {
      width: 5%;
    }

    .details {
      margin-top: 5%;
    }

    .details-img {
      width: 30%;
      float: left;
      height: 175px;
      margin-left: 5%;
    }

    .details-message {
      width: 50%;
      float: left;
      color: #fff;
      margin-left: 5%;
    }

    .caricature-name {
      font-size: 20px;
      margin-bottom: 5%;
    }

    .caricature-category {
      float: left;
      width: 25%;
      height: 30px;
      font-size: 10px;
      overflow: hidden;
      margin-right: 7%;
      line-height: 30px;
      margin-bottom: 5%;
      border-radius: 50%;
      text-align: center;
      border: 1px solid #fff;
    }
  }

  .car-cen {
    width: 100%;
    margin-top: 55%;

    .car-nav {
      display: flex;
      border-bottom: 1px solid rgb(73, 73, 73);
    }

    .car-details {
      flex: 1;
      padding-top: 3%;
      padding-bottom: 4%;
      text-align: center;
    }
  }

  .active {
    color: rgb(88, 155, 255);
  }
}
</style>
