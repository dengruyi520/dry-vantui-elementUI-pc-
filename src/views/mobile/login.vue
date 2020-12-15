<template>
    <div>
        <h3 style="text-indent:10px">用户登录</h3>
        <van-form>
        <van-field
            v-model="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" @click="drydologin">
            立即登录
            </van-button>
        </div>
        </van-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {},
  components: {},
  methods: {
    //   登录
    drydologin() {
        // 请求登录接口
      this.$axios
        .post("https://www.liulongbin.top:8888/api/private/v1/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.meta.status == 200) {
            this.$toast.success(res.meta.msg);
            // 把数据存储到本地
            sessionStorage.setItem("drygoods_token",res.data.token);
            // 从哪儿来回哪儿去
            this.$router.go(-1);
          } else {
            this.$toast.fail(res.meta.msg);
          }
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
</style>
