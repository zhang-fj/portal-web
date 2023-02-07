<template>
  <div class="protal-products-box protal-in-box">
    <p class="protal-title1">{{topic.topicName}}</p>
    <span class="protal-text1">{{topic.topicDesc}}</span>
    <div class="protal-product-cate-box">
      <el-button class="all-btn" type="primary" @click="toQuery()">全部</el-button>
      <el-button v-for="item in cates" :key="item.id" class="cate-btn" type="primary" @click="toQuery(item)">{{item.cateName}}</el-button>
    </div>
    <div class="protal-product-in-box">
      <el-row>
        <el-col v-for="item in data" :key="item.id" :sm="12" :lg="6">
          <div class="protal-product-card">
            <div class="protal-product-image">
              <el-image :src="getImageUrl(item.mainImgId)"></el-image>
            </div>
             <router-link :to="{path:'/info',query:{topicId:topic.topicId,infoId:item.id}}">
              <el-link :underline = "false" >{{item.title}}</el-link>
             </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp04',
  mixins: [HomeInfos],
  methods: {
    toQuery (item) {
      this.query.cateId = item ? item.id : ''
      this.queryInfos()
    }
  }
}
</script>

<style scoped>

.protal-products-box {
  padding: 20px 0px;
}

.protal-products-box .protal-product-cate-box{
  margin: 40px;
}

.protal-products-box >>> .protal-product-cate-box .el-button{
   border-radius: 0px;
   border: 0px;
}

.protal-products-box >>> .protal-product-cate-box .all-btn{
  background-color: #135eb4;
}

.protal-products-box >>> .protal-product-cate-box .cate-btn{
  background-color: #eee;
  color: #76838f;
}

.protal-products-box >>> .protal-product-cate-box .el-button:hover{
   color: #ffffff;
   background-color: #1fbec2;
}

.protal-product-in-box{
  background-color: #f1f1f1;
  box-shadow: 0 0 60px 60px #f1f1f1;
}

.protal-products-box .protal-product-card{
  background-color: #ffffff;
  margin: 10px;
}

.protal-products-box .protal-product-card:hover .el-link{
  background-color: #1fbec2;
  color: #ffffff;
}

.protal-products-box >>> .protal-product-card .el-link{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.protal-products-box >>> .protal-product-card .protal-product-image{
  height: 200px;
  width: 200px;
  margin: 0px auto;
}

.protal-products-box >>> .protal-product-card .protal-product-image .el-image{
  width: 100%;
  height: 100%;
}

.protal-products-box >>> .protal-product-card .protal-product-image .el-image .el-image__inner{
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition-duration: 1s;
  -moz-transition-duration: 1s; /* Firefox 4 */
  -webkit-transition-duration: 1s; /* Safari 和 Chrome */
  -o-transition-duration: 1s; /* Opera */
}

.protal-products-box >>> .protal-product-card:hover .protal-product-image .el-image .el-image__inner{
  width: 100%;
  height: 100%;
}

</style>
