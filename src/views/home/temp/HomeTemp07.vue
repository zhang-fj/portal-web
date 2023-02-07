<template>
  <div class="protal-advantage-box protal-in-box">
    <p class="protal-title1">{{topic.topicName}}</p>
    <span class="protal-text1">{{topic.topicDesc}}</span>
    <el-row>
      <el-col v-for="item in data" :key="item.id" :sm="12" :lg="6">
        <el-result
          :title="item.title"
          :subTitle="item.desc"
        >
          <template slot="icon">
           <el-avatar :size="100">
              <img :src="getImageUrl(item.mainImgId)"/>
            </el-avatar>
          </template>
        </el-result>
      </el-col>
    </el-row>
  </div>
</template>
<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp07',
  mixins: [HomeInfos]
}
</script>

<style scoped>

.protal-advantage-box {
  padding: 20px 0px;
}

.protal-advantage-box >>> .el-result .el-button{
  width: 120px;
  height: 120px;
  font-size: 80px;
  background-color: #eee;
  color: #90a4ae;
  border: 0px;
}

.protal-advantage-box >>> .el-result .el-button:hover{
  background-color: #1fbec2;
  color: #FFF;
}

</style>
