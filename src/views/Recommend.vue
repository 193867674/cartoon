<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div class="slide-shows">
      <ul class="list" ref="list">
        <li>
          <img src="../../public/img/slideshow/02.png" class="auto-img">
        </li>
        <li>
          <img src="../../public/img/slideshow/01.png" class="auto-img">
        </li>
        <li>
          <img src="../../public/img/slideshow/03.png" class="auto-img">
        </li>
        <li>
          <img src="../../public/img/slideshow/02.png" class="auto-img">
        </li>
      </ul>

      <!-- 搜索按钮 -->
      <div class="btn">
        <div class="btn-img">
          <img src="../../public/img/icon/normal.png" class="auto-img">
        </div>
        <div class="text" @click="finds">搜漫画~搜作者~</div>
      </div>
    </div>
    <!-- 分类排行 -->
    <div class="class-ifys">
      <router-link to="/findcomic" tag="div" class="c-ifys">
        <div class="icon">
          <img src="../../public/img/icon/classifys.png" class="auto-img">
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/findcomic" tag="div" class="c-ifys">
        <div class="icon">
          <img src="../../public/img/icon/trophy.png" class="auto-img">
        </div>
        <span>人气榜</span>
      </router-link>
      <router-link to="/findcomic" tag="div" class="c-ifys">
        <div class="icon">
          <img src="../../public/img/icon/target.png" class="auto-img">
        </div>
        <span>更新榜</span>
      </router-link>
    </div>
    <!-- 推荐内容 -->
    <div class="rcm">
      <div>
        <div class="top-img">
          <img src="../../public/img/icon/loving-heart.png" class="auto-img">
        </div>
        <span>猜你喜欢</span>
      </div>
      <div class="rcm-con">
        <div class="rcm-i" v-for="i in $store.state.likes" @click="caricature(i)" :key="i.i">
          <div class="i-img">
            <img :src="$store.state.img+i.im" class="auto-img">
          </div>
          <div>{{i.t}}</div>
        </div>
      </div>

      <div>
        <div class="top-img">
          <img src="../../public/img/icon/fire.png" class="auto-img">
        </div>
        <span>热门推荐</span>
      </div>
      <div class="rcm-con">
        <div
          class="hot-i"
          v-for="item in $store.state.hots"
          @click="caricature(item)"
          :key="item.i"
        >
          <div class="i-img">
            <img src="../../public/img/icon/null.jpg" v-if="item.im === null" class="auto-img">
            <img :src="$store.state.img+item.im" v-else class="auto-img">
          </div>
          <div>{{item.t}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      index: 0,
      name: 'recommend'
    };
  },
  mounted() {
    this.slideShows();
  },
  methods: {
    slideShows() {
      setInterval(() => {
        this.index++;
        if (this.$refs.list === undefined) {
          return;
        }
        this.$refs.list.style.transform =
          "translateX(-" + (100 / 4) * this.index + "%)";
        this.$refs.list.style.transition = "transform .5s linear";
        if (this.index === 3) {
          setTimeout(() => {
            this.$refs.list.style.transition = "none";
            this.index = 0;
            this.$refs.list.style.transform = "translateX(0)";
          }, 500);
        }
      }, 4000);
    },
    caricature(i) {
      this.$router.push({ name: "caricature", query: {data: i } });
      this.$emit("changeShow");
    },
    finds() {
      this.$emit("changeShow");
      this.$router.push({ name: "find", query: {name: this.name}});
    }
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  .slide-shows {
    width: 100%;
    overflow: hidden;
    position: relative;

    .list {
      display: flex;
      width: 400%;

      li {
        flex: 1 1 100%;
        float: left;
      }
    }

    .btn {
      position: absolute;
      top: 10%;
      left: 0;
      right: 0;
      width: 70%;
      height: 15%;
      margin: 0 auto;
      border-radius: 30%;
      text-align: center;
      background-color: rgba(172, 172, 172, 0.5);
    }

    .btn-img {
      display: inline-block;
      width: 10%;
      height: 60%;
      margin-top: 1%;
    }

    .text {
      color: #fff;
      display: inline-block;
    }
  }

  .class-ifys {
    display: flex;
    width: 100%;
    border-bottom: 10px solid rgb(223, 223, 223);

    .c-ifys {
      flex: 1;
      width: 100%;
      text-align: center;
      margin-top: 5%;
      margin-bottom: 5%;
    }

    .icon {
      width: 30%;
      margin: 5px auto;
    }
  }

  .rcm {
    margin-bottom: 20%;

    .top-img {
      width: 8%;
      display: inline-block;
    }

    .rcm-con {
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