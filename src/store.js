import Vue from 'vue'
import Vuex from 'vuex'
// import { stat } from 'fs';


Vue.use(Vuex)
// 导入持久化的工具
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  key: "dry_vuex",
  storage: window.localStorage //你要把他存到哪儿
})


// 导出vuex的对象，设置vuex五大核心内容
export default new Vuex.Store({
  // 全局状态 数据状态  想vue中的data
  state: {
    // 购物车列表数据
    drycartlist: [],

    // 搜索页面的历史记录
    historylist: [],
  },
  mutations: {
    // 加入购物车的方法
    addcart(state, drycart) {
      // 判断商品是否加入购物车了
      let index = state.drycartlist.findIndex(item => {
        return item.id == drycart.id;
      })
      console.log(index);

      if (index > -1) { //商品已经添加过了
        state.drycartlist[index].num++;

      } else {
        // 加入购物车  直接追加即可
        state.drycartlist.push(drycart)
      }

    },
    // 添加历史记录
    addhistory(state, keyword) {
      if (keyword == "") return false;
      // 当总条数超过8条的时候直接删除尾部数据即可
      if (state.historylist.length >= 8) {
        state.historylist.pop();
      }
      state.historylist.unshift(keyword)
    },
    removehistory(state) {
      state.historylist = []
    }
  },
  // 操作state的方法，有点类似vue中的methods
  getters: {
    nums(state) {
      let nums = 0;
      state.drycartlist.forEach(item => {
        nums += item.num;
      })
      return nums;
    }
  },
  //操作mutations中方法 异步操作像watch
  actions: {

  },
  //把vue进行模块处理
  modules: {

  },


  //数据持久化的插件
  plugins: [vuexLocal.plugin]
})
