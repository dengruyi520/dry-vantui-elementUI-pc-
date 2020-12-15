<template>
    <div>
        <!-- 搜索框顶部的内容 -->
    <van-nav-bar title="搜索" left-arrow @click-left="$router.go(-1)"/>
    <!-- 搜索框 -->
    <van-search
    v-model="keyword"
    show-action
    placeholder="请输入搜索关键词"
    shape="round"
    @focus="flag=false"
    @blur="addhistory"
  />
  <!-- 历史记录列表 -->
    <div class="history" v-if="flag">
        <!-- 历史记录头部信息 -->
        <div class="history-head">
            <p>历史记录</p>
            <van-icon name="delete" style="font-size:18px" @click="remove"/>
        </div>
        <!-- 商品列表 -->
        <div class="history-list">
            <div class="history-item" v-for="(item,index) in this.$store.state.historylist" :key="index">
                {{item}}
            </div>
        </div>
    </div>
    <!-- 商品的列表组件 -->
    <goods v-else :goods="goods"/>
    </div>
</template>

<script>
import goods from "./goods";
export default {
  data() {
    return {
      keyword: "",
      goodslist: [],
      flag: true
    };
  },
  created() {},
  mounted() {
    //   获取列表的数据
    this.getdrygoods();
  },
  components: {
    goods
  },
  methods: {
    //   获取列表数据
    // 内容部分渲染
    getdrygoods() {
      this.$axios.get("lativ/list1.json").then(res => {
        console.log(res);
        this.goodslist = res.result;
      });
    },
    // 添加历史记录 当失去焦点的时候添加历史记录
    addhistory() {
      this.flag = true;
      this.$store.commit("addhistory", this.keyword);
      this.keyword="";

    },
    // 删除
    remove(){
        this.$store.commit("removehistory")
    }
  },
  computed: {
    //   模糊搜索商品列表
    goods() {
      let goods = this.goodslist;
      return goods.filter(item => {
        return item.title.indexOf(this.keyword) > -1;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.history {
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  .history-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #303030;
  }
  // 历史记录总结构
  .history-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .history-item {
      width: 23%;
      margin: 1%;
      box-sizing: border-box;
      padding: 10px 5px;
      background: #cfcdcd;
      border-radius: 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
