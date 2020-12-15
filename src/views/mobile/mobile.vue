<template>
    <div class="cantainer">
      <router-view></router-view>
        <!-- 底部区域 -->
        <van-tabbar route>
        <van-tabbar-item icon="home-o" to="/mobile/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search">分类</van-tabbar-item>
        <van-tabbar-item icon="friends-o" :badge="this.$store.getters.nums" to="/mobile/cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  components: {},
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.cantainer {
  width: 100%;
  padding-bottom: 50px;
  flex: 1;
  overflow: hidden;   //底部不会动
}
</style>
