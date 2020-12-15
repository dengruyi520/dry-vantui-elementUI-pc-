<template>
    <!-- 商品列表的布局  内容部分 -->
        <div class="drygoods">
            <!-- 没个商品的基本结构 -->
            <div class="dryitem" v-for="item in goods" :key="item._id">
                <img :src="item.s_pic"/>
                <div class="goods-title">{{item.title}}</div>
                <div class="goods-price">
                    <p>￥{{item.price}}</p>
                    <p>
                        <van-icon name="cart-o" @click="addcart(item)"/>
                    </p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["goods"],
  created() {},
  mounted() {},
  components: {},
  methods: {
    //   点击购物车按钮加入购物车
    addcart(good) {
      // 先获取本地sessistrorage中存储的数据
      let token = sessionStorage.getItem("drygoods_token");
      //用户未登录  提示用户去登陆
      if (token == null || token.length == 0) {
        // 弹出确认框即可
        this.$dialog
          .confirm({
            title: "标题",
            message: "请登录后加入购物车"
          })
          .then(() => {
            // on confirm
            this.$router.push("/mobile/drylogin"); //直接跳转到登录页面
          })
          .catch(() => {
            // on cancel
          });
      } else {
        //登录成功后做的操作
        //   定义好，加入购物车的商品信息
        let drycart = {
          id: good._id,
          title: good.title,
          pic: good.pic,
          price: good.price,
          num: 1
        };
        // 把数据提交到vuex中即可
        this.$store.commit("addcart", drycart);
        this.$toast.success("加入购物车成功");
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
// 商品列表布局
.drygoods {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  border: #dddddd 1px solid;
  .dryitem {
    width: 48%;
    margin: 1%;
    border: #dddddd 1px solid;
    box-sizing: border-box;
    padding: 5px;
    background: #f8f8f8;
    img {
      width: 100%;
    }
    p {
      font-size: 16px;
    }
    .goods-title {
      width: 100%;
      color: #565656;
      line-height: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .goods-price {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p:nth-of-type(1) {
        color: #ff0000;
      }
    }
  }
}
</style>
