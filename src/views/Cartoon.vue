<template>
  <div class="cartoon">
    <div class="top">
      <div class="top-img">
        <div class="pressed" @click="pres">
          <img src="../../public/img/icon/pressed.png" class="auto-img">
        </div>
      </div>
      <div class="name">
        <div class="text">{{title}}</div>
      </div>
      <div class="all">
        <div class="text">全集</div>
      </div>
    </div>
    <div class="cartoon-img">
      <div class="imgs" v-for="imgs in $store.state.cartoons" :key="imgs[0]">
        <img v-lazy="$store.state.img + imgs[1]" class="auto-img">
      </div>
    </div>
    <div class="bottom">
      <div class="icon" @click="next">
        <div class="bot-img">
          <img src="../../public/img/icon/previous.png" class="auto-img">
        </div>
      </div>
      <div class="text">当前话</div>
      <div class="icon" @click="prev">
        <div class="bot-img">
          <img src="../../public/img/icon/next.png" class="auto-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {},
      title: ''
    };
  },
  created() {
    this.name = this.$route.query.data;
    this.title = this.name[0]
  },
  methods: {
    pres() {
      this.$router.push({
        name: "caricature",
        query: { data: this.$store.state.caricatures }
      });
    },
    prev() {
      if (this.name[0] === 1) {
        return;
      }
      var arr = this.$store.state.carmes.chapters;
      for (let index = 0; index < arr.length; index++) {
        if (arr[index][0] === this.name[0]) {
          this.name = arr[index + 1];
          this.title = arr[index + 1][0]
          console.log(this.title)
          this.$store.dispatch("cartoonGet", this.name[3]);
        }
      }
    },
    next() {
      var arr = this.$store.state.carmes.chapters;
      if (this.name[0] === arr.length) {
        return;
      }
      for (let index = 0; index < arr.length; index++) {
        if (arr[index][0] === this.name[0]) {
          this.name = arr[index - 1];
          this.title = arr[index - 1][0];
          console.log(this.title)
          this.$store.dispatch("cartoonGet", this.name[3]);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cartoon {
  .top {
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

    .all {
      width: 8%;
      float: right;
      height: 100%;
      display: table;
      margin-right: 1%;
      text-align: center;
      color: rgb(88, 155, 255);
    }

    .text {
      display: table-cell;
      vertical-align: middle;
    }
  }

  .cartoon-img {
    .imgs {
      width: 100%;
    }
  }

  .bottom {
    position: fixed;
    display: flex;
    bottom: 0;
    width: 100%;
    height: 6%;
    background-color: #ffffff;

    .icon {
      flex: 1;
      text-align: center;
    }

    .text {
      flex: 1;
      margin: auto 0;
      text-align: center;
    }

    .bot-img {
      width: 30%;
      margin: 0 auto;
    }
  }
}
</style>
