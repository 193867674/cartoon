<template>
  <div id="app">
    <router-view @changeShow="change" @backChange="change"/>
    <Navigation v-show="show"></Navigation>
  </div>
</template>

<script>
import Navigation from "./components/Navigation-Bars.vue";

export default {
  name: "App",
  data() {
    return {
      show: true
    };
  },
  created() {
    this.$store.dispatch("saveget");
  },
  methods: {
    change() {
      this.show = !this.show;
    }
  },
  components: {
    Navigation
  }
};
</script>

<style>
</style>
