<template>
    <div>
       <!---->
		<header>
			<div class="hea-le"><img src="img/logo.png" alt="" /></div>
			<div class="hea-zho">装修方案</div>
			<div class="hea-ri">
				<ul>
					<li><p class="p1"></p><span class="iconfont icon-nav"></span><p>导航</p></li>
					<li><p class="p1"></p><span class="iconfont icon-user"></span><p>我的</p></li>
				</ul>
			</div>
		</header>
		<!---->
		<div class="box1">
			<div><img src="img/2017-09-13_203148.jpg" alt="" /></div>
			<div>
				<ul>
					<li>699全包精装套餐</li>
					<li><p>价格： <span class="sp1">￥ 699元/m²</span></p></li>
					<li><p>已预约： <span class="sp2">221套</span></p></li>
					<li><p>正式发售： <span class="sp3">全包套餐火爆预约中</span></p></li>
				</ul>
			</div>
			<div>
				<p>
					精装全包套餐，包设计/包主材/包施工/包监理。采用知名辅材，一线主材，工厂直供F2C模式。
				</p>
			</div>
		</div>
		<!---->
		<div class="box2">
			<ul>
				<li style="border-bottom:0.3rem solid #82DABA"><p>套餐详情</p></li>
				<li><p>配置清单</p></li>
				<li><p>施工工艺</p></li>
				<li><p>服务流程</p></li>
			</ul>
		</div>
		<!---->
		<div class="box3">
			<img src="img/2017-09-13_202139.jpg"/>
		</div>
		<!---->
		<div class="box9 boxx">
			<div>
				<p>
					房先森互联网家装有别于传统公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转外包，利用
				互联网将工地进行在线全景直播，通过去中间环节，提供装修套餐+个性化定制服务。
				</p>
			</div>
		</div>
		<!---->
		<footer>
			<div><p class="iconfont icon-hot-line" style="font-size: 1.4rem;"></p><span> &nbsp;服务热线：400-9977-658</span></div>
			<ul>
				<li style="color:#39C893;">触屏版</li>
				<li>电脑版</li>
				<li>关于我们</li>
				<li>联系我们</li>
			</ul>
		</footer>
		<!---->
		<div class="mb">
			<span class="iconfont icon-design"></span><p>预约免费设计</p>
		</div>
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
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

header {
  width: 100%;
  height: 4rem;
  background: white;
}
header .hea-le {
  width: 35%;
  height: 100%;
  float: left;
}
header .hea-le img {
  width: 7rem;
  height: 2.5rem;
  margin-top: 0.7rem;
  margin-left: 0.5rem;
}
header .hea-zho {
  width: 37%;
  height: 100%;
  float: left;
  font-size: 1.4rem;
  line-height: 4rem;
  text-align: center;
}
header .hea-ri {
  width: 20%;
  height: 100%;
  float: right;
  background: white;
}
header .hea-ri ul {
  width: 100%;
  height: 100%;
  list-style: none;
}
header .hea-ri ul li {
  width: 48%;
  height: 100%;
  float: right;
  text-align: center;
}
header .hea-ri ul li span {
  font-size: 1.3rem;
  color: #999999;
}
header .hea-ri ul li p {
  font-size: 0.7rem;
  color: #999999;
}
header .hea-ri ul li .p1 {
  margin-top: 1rem;
}

.box1 {
  width: 100%;
  height: 14rem;
  background: white;
  border-top: 0.8rem solid #f4f4f4;
}
.box1 div:nth-of-type(1) {
  width: 40%;
  height: 60%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
}
.box1 div:nth-of-type(1) img {
  width: 90%;
  height: 90%;
}
.box1 div:nth-of-type(2) {
  width: 60%;
  height: 60%;
  float: left;
  margin-top: 0.5rem;
}
.box1 div:nth-of-type(2) ul {
  width: 100%;
  height: 100%;
}
.box1 div:nth-of-type(2) ul li {
  width: 100%;
  height: 20%;
  margin-top: 0.3rem;
}
.box1 div:nth-of-type(2) ul li p {
  color: #999;
  font-size: 0.9rem;
  line-height: 1.5rem;
}
.box1 div:nth-of-type(2) ul li .sp1 {
  color: #ff6972;
}
.box1 div:nth-of-type(2) ul li .sp2 {
  color: #000;
}
.box1 div:nth-of-type(2) ul li .sp3 {
  color: #fec4c6;
}
.box1 div:nth-of-type(2) ul li:nth-of-type(1) {
  font-size: 1rem;
}
.box1 div:nth-of-type(3) {
  width: 94%;
  margin: 0 auto;
}
.box1 p {
  font-size: 0.9rem;
  line-height: 2rem;
}

.box2 {
  width: 100%;
  height: 4rem;
  background: white;
  margin: 0 auto;
  border-top: 0.8rem solid #f4f4f4;
  border-bottom: 0.01rem solid #f4f4f4;
  font-size: 1rem;
}
.box2 ul {
  width: 100%;
  height: 100%;
}
.box2 ul li {
  float: left;
  width: 25%;
  height: 100%;
  line-height: 2.5rem;
  text-align: center;
  display: flex;
  align-items: center;
}
.box2 ul li p {
  width: 100%;
  height: 2.5rem;
  border-right: 0.01rem solid #f7f3f4;
}

.box3 {
  width: 94%;
  margin: 0 auto;
  margin-top: 0.9rem;
}
.box3 img {
  width: 100%;
}

.box9 {
  height: 11rem;
  border-bottom: 0.5rem solid #f4f4f4;
  border-top: 0.5rem solid #f4f4f4;
  float: left;
}
.box9 div {
  width: 92%;
  height: 90%;
  margin: 0 auto;
  padding-top: 1.2rem;
}
.box9 div p {
  font-size: 1rem;
  text-indent: 2rem;
  line-height: 2.2rem;
}

footer {
  width: 100%;
  height: 6rem;
  background: white;
  margin-top: 0.8rem;
  text-align: center;
  padding-top: 1rem;
  float: left;
}
footer div {
  width: 100%;
  height: 2rem;
}
footer div p {
  float: left;
  margin-left: 5.5rem;
  color: #39c893;
  margin-top: 0.1rem;
}
footer div span {
  font-size: 1.1rem;
  float: left;
}
footer ul {
  width: 100%;
  height: 3rem;
}
footer ul li {
  width: 25%;
  height: 100%;
  text-align: center;
  float: left;
  margin-top: 1rem;
  font-size: 1.1rem;
}

.boxx {
  width: 100%;
  background: white;
  margin-top: 0.8rem;
}
.boxx .p1 {
  float: left;
  height: 2rem;
  line-height: 2rem;
  border-left: 0.3rem solid #3cc995;
  font-size: 1.3rem;
  letter-spacing: 0.3rem;
  margin-left: 1rem;
  margin-top: 1rem;
  text-align: center;
  width: 7rem;
}
.boxx span {
  margin-left: 0.2rem;
  line-height: 4.4rem;
  color: #999;
  font-size: 0.8rem;
}

.mb {
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: rgba(255, 0, 63, 0.9);
  color: white;
  line-height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mb span {
  float: left;
  font-size: 2.4rem;
}
.mb p {
  float: left;
  font-size: 1.3rem;
  margin-left: 1rem;
}

/*# sourceMappingURL=new_file.css.map */
</style>
