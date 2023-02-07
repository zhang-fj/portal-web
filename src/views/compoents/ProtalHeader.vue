<template>
  <div class="protal-header">
    <div class="top protal-in-box">
      <div class="log-box">
        <el-image class="log-image" :src="logo"></el-image>
        <div class="log-text">
          JEELP信息技术有限公司
        </div>
        <div class="log-right">
          <a class="tr-a">
            <div class="tr-l">
              <el-button
                class="header-btn"
                icon="fa fa-phone"
                type="primary"
              ></el-button>
            </div>
            <div class="tr-r">
              <p>联系电话</p>
              <span>18688888888</span>
            </div>
          </a>
          <el-divider class="header-direc" direction="vertical"></el-divider>
          <a class="tr-a">
            <div class="tr-l">
              <el-button
                class="header-btn"
                icon="fa fa-envelope-o"
                type="primary"
              ></el-button>
            </div>
            <div class="tr-r">
              <p>电子邮箱</p>
              <span>88888888@qq.com</span>
            </div>
          </a>
          <el-divider class="header-direc" direction="vertical"></el-divider>
          <a class="tr-a">
            <div class="tr-l">
              <el-button
                class="header-btn"
                icon="fa fa-qq"
                type="primary"
              ></el-button>
            </div>
            <div class="tr-r">
              <p>QQ客服</p>
              <span>88888888</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div>
      <protal-munes/>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'
import ProtalMunes from './ProtalMunes.vue'

export default {
  components: { ProtalMunes },
  name: 'HelloHeader',
  data () {
    return {
      logo: Logo
    }
  }
}
</script>

<style scoped>
.protal-header {
  top:0px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: #FFF;
}

.top {
  height: 80px;
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
}

.log-box {
  height: 60px;
  margin: 20px 0px;
}

.log-box .log-image {
  width: 60px;
  height: 60px;
  float: left;
}

.log-box .log-image /deep/ .el-image__inner{
  width: 40px;
  height: 40px;
  margin: 10px;
}

.log-box .log-text {
  margin-left: 5px;
  height: 60px;
  float: left;
  font-size: 32px;
  line-height: 60px;
  font-family: "宋体";
  font-weight: bold;
}

.log-box .log-right {
  margin: 10px 0px;
  height: 40px;
  float: right;
}

.log-box .log-right .header-btn {
  height: 40px;
  widows: 40px;
  background-color: #16b4b9;
  border-color: #16b4b9;
  font-size: 28px;
  padding: 6px;
}

.log-box .log-right .tr-a {
  display: inline-block;
  height: 40px;
}

.log-box .log-right .tr-a .tr-r {
  float: right;
  margin: 0px 5px;
}

.log-box .log-right .tr-a .tr-r p {
  margin: 0px;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  color: #999;
}

.log-box .log-right .tr-a .tr-r span {
  font-size: 12px;
}

.log-box .log-right .tr-a .tr-l {
  float: left;
}

.log-box .log-right .header-btn:hover {
  background-color: #135eb4;
  border-color: #135eb4;
}

.log-box .log-right .header-direc {
  height: 40px;
  top: -16px;
  background-color: #ddd;
}
</style>
