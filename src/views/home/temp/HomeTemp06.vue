<template>
  <div class="protal-links-box protal-in-box">
    <div class="link-title">{{topic.topicName}}</div>
    <div class="link-box">
      <el-link v-for="item in data" :underline="false" target="_blank" :key="item.id" :href="item.desc" type="info">{{item.title}}</el-link>
    </div>
  </div>
</template>
<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp06',
  mixins: [HomeInfos]
}
</script>

<style scoped>
  .protal-links-box .link-title{
    padding: 0px 20px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }

  .protal-links-box .link-box{
    padding: 10px 20px;
    text-align: left;
  }

  .protal-links-box .link-box /deep/ .el-link{
    padding: 0px 10px;
    text-align: left;
  }
</style>
