<template>
  <div style="background-color: #efefef;">
    <div class="protal-about-box protal-in-box">
      <el-row v-if="data&&data.length > 0">
        <el-col :span="10">
          <div class="protal-about-left">
            <el-image style="width:100%;height:100%" :src="getImageUrl(data[0].mainImgId)"></el-image>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="protal-about-right">
            <p class="protal-title1" style="text-align:left">{{topic.topicName}}<span class="protal-about-titile">{{topic.topicName}}</span></p>
            <span class="protal-text2" style="height:210px;-webkit-line-clamp: 11;margin-bottom:3px">{{data[0].desc}}</span>
            <div style="text-align:left">
              <router-link :to="{path:'/secondary',query:{topicId:topic.topicId}}">
                <el-button>查看详情>>></el-button>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp03',
  mixins: [HomeInfos]
}
</script>

<style scoped>

.protal-about-box .protal-about-left{
  padding: 40px 20px;
  height: 300px;
}

.protal-about-box .protal-about-right .protal-about-titile{
  display:inline-block;
  font-size: 20px;
  padding-left: 10px;
  color:#cccccc;
}

.protal-about-box .protal-about-right{
  padding: 40px 20px;
  height: 300px;
}

.protal-about-box >>> .el-button{
   border-radius: 0px;
   border: 0px;
   background-color: #135eb4;
   color:#FFFFFF;
}

.protal-about-box >>> .el-button:hover{
   border-radius: 0px;
   border: 0px;
   background-color: #1fbec2;
}

</style>
