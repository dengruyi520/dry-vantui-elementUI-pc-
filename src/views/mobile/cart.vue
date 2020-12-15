<template>
    <div>
        <van-nav-bar
        title="我的购物车"
        left-arrow
        @click-left="$router.go(-1)"
        />
        <van-card
        :price="item.price"
        :title="item.title"
        :thumb="item.pic" 
        v-for="item in this.$store.state.drycartlist" :key="item.id"
        >
        <template #num>
           <van-stepper v-model="item.num" />
        </template>
        </van-card>
    </div>
</template>

<script>
export default {
  data() {
    return {
        num:1,
    };
  },
  created() {},
  mounted() {},
  components: {},
  methods: {},
  computed: {}
};
</script>

<style scoped>
</style>
