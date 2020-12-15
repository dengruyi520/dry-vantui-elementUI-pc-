<template>
    <div>
  <header>lativ诚衣</header>
        <!-- 头部 -->
        <van-search placeholder="请输入搜索关键词" shape="round" @focus="$router.push('/mobile/search')"/>
        <!-- 标签导航栏 -->
        <van-tabs  line-height="2px" color="#545454" @change="changeTab">
        <van-tab v-for="(item,index) in drylist" :title="item.title" :name="item._id" :key="index">
        </van-tab>
        </van-tabs>

        <!-- 列表数据的筛选标签 -->
        <nav>
            <p>综合</p>
            <p>销量</p>
            <p>新品</p>
            <p class="dryprice" @click="changesort">价格
                <van-icon name="arrow-up" v-show="sort==1"/>
                <van-icon name="arrow-down" v-show="sort==2"/>
            </p>
        </nav>
        <!-- 商品列表组件拆分  -->
        <goodslist :goods="goods"/>


        <!-- 返回顶部的按钮 -->
        <div id="dry-top" v-show="topshow" @click="returntop">
            <van-icon name="arrow-up" />
        </div>
    </div>
</template>

<script>
import goodslist from "./goods";
export default {
  data() {
    return {
      // 如果用户没有登录，点击购物车的按钮，提示用户未登录，跳转到登录页面
      // 用户登录后，返回首页，登录成功
      // 用户登录后，点击加入购物车，把商品调价到购物车，购物车的数据可以存储到vuex中
      // 跳转到购物车列表页面

      active: 0,
      //分类数据
      drylist: [],
      //   商品数据
      drygoods: [],
      value: "",
      sort: 0, //0 无序 1升序 2 降序
      cid: 0,
      topshow: false //控制返回顶部显示隐藏
    };
  },
  created() {
    this.getdrylist(); //分类
    this.getdrygoods(); //列表
    // 监听页面的滚动事件
    window.addEventListener("scroll", this.watchscroll);
  },
  mounted() {},
  components: {
    goodslist
  },
  methods: {
    // 获取分类数据
    getdrylist() {
      // 分类axios渲染
      this.$axios.get("lativ/fenlei.json").then(res => {
        console.log(res);
        this.drylist = res.result;
      });
    },
    // 内容部分渲染
    getdrygoods() {
      this.$axios.get("lativ/list1.json").then(res => {
        console.log(res);
        this.drygoods = res.result;
      });
    },
    //   点击价格进行排序
    changesort() {
      // 如果sort值等于0 或者等于2
      if (this.sort == 0 || this.sort == 2) {
        this.sort = 1;
      } else {
        //升序的话直接改为降序
        this.sort = 2;
      }
    },
    // 点击切换导航的时候触发
    changeTab(name, title) {
      console.log(name, title);
      this.cid = name;
    },
    // 监听页面的滚动事件
    watchscroll() {
      // html的兼容性写法
      let html = document.documentElement || document.body;

      // console.log(html.scrollTop);
      if (html.scrollTop > html.clientHeight) {
        //滚动一屏显示按钮
        this.topshow = true;
      } else {
        this.topshow = false;
      }
    },

    returntop() {
      // html的兼容性写法
      let html = document.documentElement || document.body;
      html.scrollTop = 0;
    }
  },
  computed: {
    //   商品数据处理的排序，分类切换操作
    goods() {
      // 转移列表数据
      let drygoods = this.drygoods;
      // 列表排序
      if (this.sort != 0) {
        //默认情况下不进行排序
        drygoods.sort((a, b) => {
          return this.sort == 1 ? a.price - b.price : b.price - a.price;
        });
      }

      // 分类数据的筛选
      if (this.cid != 0) {
        //点击分类导航按钮  ，进行筛选
        drygoods = drygoods.filter(item => {
          //
          return item.cid == this.cid;
        });
      }

      //   结果返回
      return drygoods;
    }
  }
};
</script>

<style lang="scss" scoped>
//   头部
  header {
    font-weight: bold;
    line-height: 44px;
    text-indent: 15px;
  }
  //   排序的布局
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    color: #545454;
    font-size: 13px;
    p {
      width: 16%;
      text-align: center;
    }
    .dryprice {
      color: #a00000;
    }
  }
  
  #dry-top {
    padding: 10px;
    background: #f0f0f0;
    border-radius: 50%;
    font-size: 20px;
    position: fixed;
    bottom: 60px;
    right: 20px;
    position: fixed;
    bottom: 60px;
  }
</style>
