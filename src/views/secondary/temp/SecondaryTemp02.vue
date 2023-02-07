<template>
  <div class="protal-products-box protal-in-box">
    <secondary-cates :cates='cates' @change="changeCaseHandler"/>
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
      <el-divider></el-divider>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>

import SecondaryInfos from '../../../mixins/secondary-infos'
import SecondaryCates from '../../compoents/SecondaryCates.vue'

export default {
  name: 'TwoTemp02',
  components: {SecondaryCates},
  mixins: [SecondaryInfos],
  data () {
    return {}
  }
}
</script>

<style scoped>

.protal-product-in-box{
  background-color: #f1f1f1;
  box-shadow: 0 0 60px 60px #f1f1f1;
}

.protal-products-box .protal-product-card{
  background-color: #ffffff;
  width: 280px;
  height: 240px;
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
  width: 100%;
  height: 200px;
  margin: 0px auto;
}

.protal-products-box >>> .protal-product-card .protal-product-image .el-image{
  width: 100%;
  height: 100%;
}

.protal-products-box >>> .protal-product-card .protal-product-image .el-image .el-image__inner{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition-duration: 1s;
  -moz-transition-duration: 1s; /* Firefox 4 */
  -webkit-transition-duration: 1s; /* Safari 和 Chrome */
  -o-transition-duration: 1s; /* Opera */
}

.protal-products-box >>> .protal-product-card:hover .protal-product-image .el-image .el-image__inner{
  width: 120%;
  height: 120%;
}
</style>
