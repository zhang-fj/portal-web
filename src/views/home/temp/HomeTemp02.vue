<template>
  <div style="background-color:#f8f8f8;">
    <div class="protal-news-box protal-in-box">
      <p class="protal-title1">{{topic.topicName}}</p>
      <span class="protal-text1">{{topic.topicDesc}}</span>
      <el-row>
        <el-col :span="12">
          <div class="protal-news-left">
            <template v-if="data&&data.length>0">
            <el-image style="width:100%;height:50%" :src="getImageUrl(data[0].mainImgId)"></el-image>
            <div class="protal-news-text">
              <router-link :to="{path:'/info',query:{topicId:topic.topicId,infoId:data[0].id}}">
                <el-link :underline = "false" class="protal-title2">{{data[0].title}}</el-link>
              </router-link>
              <span class="protal-text2" style="height:132px;-webkit-line-clamp: 7;">{{data[0].desc}}</span>
              <span class="protal-date1">{{data[0].releaseTime||data[0].inputTime}}</span>
            </div>
            </template>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="protal-news-right">
            <el-timeline>
              <template v-for="(item, index) in data">
                <el-timeline-item v-if="index > 0" :key="item.id" :timestamp="item.releaseTime||item.inputTime" placement="top" color="#1fbec2">
                  <div class="protal-news-text">
                    <router-link class="protal-title2" :to="{path:'/info',query:{topicId:topic.topicId,infoId:item.id}}">
                      <el-link :underline = "false" >{{item.title}}</el-link>
                    </router-link>
                    <span class="protal-text2" style="height:60px;-webkit-line-clamp: 3;">{{item.desc}}</span>
                  </div>
                </el-timeline-item>
              </template>
            </el-timeline>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp02',
  mixins: [HomeInfos]
}
</script>

<style scoped>

.protal-news-box .protal-news-left{
  padding: 40px 20px;
  height: 400px;
}

.protal-news-box .protal-news-left .protal-news-text{
  padding: 10px;
}

.protal-news-box .protal-news-right{
  padding: 40px 20px;
  height: 400px;
}

.protal-news-box .protal-news-right .protal-news-text{
  padding: 0px;
  background-color: #FFF;
}

</style>
