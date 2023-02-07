<template>
  <div class="protal-case-box protal-in-box">
    <p class="protal-title1">{{topic.topicName}}</p>
    <span class="protal-text1">{{topic.topicDesc}}</span>
    <div class="protal-case-carousel-box">
      <el-carousel :type="'card'" trigger="click" height="400px">
        <el-carousel-item v-for="item in data" :key="item.id">
          <div class="protal-case-carousel-card">
            <el-image
              style="width: 100%; height: 100%"
              fit="fill"
              :src="getImageUrl(item.mainImgId)"
            >
            </el-image>
            <div class="protal-case-carousel-text">
              <p style="text-align:center;margin:5px">{{item.title}}</p>
              <span>{{item.desc}}</span>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp05',
  mixins: [HomeInfos]
}
</script>

<style scoped>
.protal-case-box .protal-case-carousel-box {
  margin: 40px 0px;
}

.protal-case-box .protal-case-carousel-box .protal-case-carousel-card{
  position: relative;
  height: 100%;
}

.protal-case-box .protal-case-carousel-box .el-carousel .protal-case-carousel-card .protal-case-carousel-text{
  width: 100%;
  height: 140px;
  position: absolute;
  bottom: 0px;
  z-index: 5555;
  background-color: #1fbec2ed;
  color: #FFFFFF;
  text-align: left;
  display: none;
}

.protal-case-box >>> .protal-case-carousel-box .el-carousel .is-active .protal-case-carousel-card .protal-case-carousel-text{
  display: block;
}

.protal-case-box >>> .protal-case-carousel-box .el-carousel .is-in-stage .protal-case-carousel-card:hover .protal-case-carousel-text{
  display: block;
}

.protal-case-box .protal-case-carousel-box .protal-case-carousel-card .protal-case-carousel-text span{
  display: block;
  padding: 0px 10px;
}

</style>
