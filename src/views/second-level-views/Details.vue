<template>
  <div class="details">
    <div class="itd">作品简介</div>
    <div class="des">{{$store.state.carmes.description}}</div>
    <div class="author">
      <span class="text">作者:</span>
      {{$store.state.carmes.artist}}
    </div>
    <div class="bottom">
      <div class="item">
        <span class="text">发行年份:</span>
        {{$store.state.carmes.released}}
      </div>
      <div class="item">
        <span class="text">点击量:</span>
        {{$store.state.carmes.hits}}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.details {
  padding: 3%;

  .itd {
    margin-top: 2%;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 3%;
  }

  .des {
    margin-bottom: 6%;
  }

  .author {
    margin-bottom: 2%;
  }

  .text {
    color: rgb(122, 122, 122);
  }

  .bottom {
    display: flex;

    .item {
      flex: 1;
    }
  }
}
</style>
