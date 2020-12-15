<template>
<el-container>
  <el-header>
      <div class="dryZ">
        <!-- 头部内容 -->
      <div></div>
      <div class="right">
          <el-menu
            mode="horizontal"
            background-color="#3D3D3C"
            text-color="#fff"
            active-text-color="#FF6700"
            >
                <!-- <el-submenu index="1">
                <template slot="title">
                    欢迎  <el-popconfirm
                    title="确定退出嘛？"
                    >
                    <span>admin</span> 
                    </el-popconfirm>
                </template>
                
            </el-submenu> -->
                <el-menu-item index="1">欢迎</el-menu-item>
                <el-menu-item index="2">我的订单</el-menu-item>
                <el-menu-item index="3">我的收藏</el-menu-item>
                <el-menu-item index="4">购物车</el-menu-item>
            </el-menu>
      </div>
      </div>
      
  </el-header>
  <el-main>
      <div class="drymain">
        <div >
      <img src="img/logo.png" alt="">
      <el-menu
            mode="horizontal"
            text-color="#94979D"
            active-text-color="#4AAFFF"
            >
                <!-- <el-submenu index="1">
                <template slot="title">
                    欢迎  <el-popconfirm
                    title="确定退出嘛？"
                    >
                    <span>admin</span> 
                    </el-popconfirm>
                </template>
                
            </el-submenu> -->
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">全部商品</el-menu-item>
                <el-menu-item index="3">关于我们</el-menu-item>
            </el-menu>
        </div>
        
            <div class="drysou">
                <el-input placeholder="请输入搜索内容"></el-input>
                <el-button style="height:40px" type="info" icon="el-icon-search"></el-button>
            </div>
      </div>
      <!-- 面包屑 -->
      
      
      <!-- 轮播内容 -->
      <div class="drylunbo">
         <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in list" :key="index" >
            <img :src="'http://47.115.85.237:3000/'+item.imgPath"/>
        </van-swipe-item>  </van-swipe>
      </div>
     

  
      <!-- 商品列表 -->
      
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getlist();
  },
  mounted() {},
  components: {},
  methods: {
    getlist() {
      this.$axios.post(`/api/resources/carousel`).then(res => {
        console.log(res);
        this.list = res.carousel;
      });
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  // background: pink;
  .el-header {
    background: #3d3d3c;
    .dryZ {
      // background: #3d3d3c;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      width: 80%;
      margin: 0 auto;
      div {
        display: flex;
        align-items: center;
      }
    }
  }
}
.el-main {
  .drymain {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      img {
        width: 150px;
      }
    }
  }
}
.drylunbo{
  width: 80%;
  margin: 0 auto;
  .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #ffffff;
  img {
    width: 100%;
  }
}
}

</style>
