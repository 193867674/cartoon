<template>
  <div>
    <div
      class="item"
      v-for="item in $store.state.carmes.chapters"
      :key="item[0]"
      @click="cartoon(item)"
    >
      <div class="text">{{item[2]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cartoon(e) {
      this.$store.dispatch("cartoonGet", e[3]);
      this.$router.push({ name: "cartoon", query: { data: e } });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 32%;
  float: left;
  height: 45px;
  margin-top: 2%;
  padding-top: 2%;
  margin-right: 1%;
  padding-bottom: 2%;
  text-align: center;
  border-radius: 17%;
  background-color: rgb(182, 176, 176);

  .text {
    margin: 8% 0;
  }
}
</style>
