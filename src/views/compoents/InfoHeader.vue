<template>
  <div>
     <template v-for="item in areas">
      <home-temp-01 v-if="item.homeTemp === 'HOME_TEMP_01'" :key="item.topicId" :topic="item"/>
     </template>
     <div class="protal-in-box">
        <div style="height:20px;">
           <div class="title">{{topic.topicName}}</div>
           <div class="link">
            <div style="float:right">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/secondary',query:{topicId:topic.topicId}}">{{topic.topicName}}</el-breadcrumb-item>
                <el-breadcrumb-item>详细信息</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
     </div>
  </div>
</template>

<script>

import { homeTopics } from '../../api/protal-api'
import header from '@/assets/header.png'
import homeTemp01 from '../home/temp/HomeTemp01.vue'

export default {
  name: 'ProtalMain',
  components: { homeTemp01 },
  props: {
    topic: Object,
    default () {
      return {}
    }
  },
  data () {
    return {
      header: header,
      areas: []
    }
  },
  mounted () {
    this.queryHomeTopics()
  },
  methods: {
    queryHomeTopics () {
      homeTopics({}).then(data => {
        this.areas = data || []
      })
    }
  }
}
</script>

<style scoped>

.title{
  font-size: 20px;
  line-height: 40px;
  font-weight: bold;
  float:left;
}

.link{
  float: right;
  padding-top: 16px;
}

</style>
