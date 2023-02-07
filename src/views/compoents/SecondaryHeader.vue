<template>
  <div>
     <template v-for="item in areas">
      <home-temp-01 v-if="item.homeTemp === 'HOME_TEMP_01'" :key="item.topicId" :topic="item"/>
     </template>
     <div class="protal-in-box">
        <div style="height:20px;">
           <div class="title">{{title}}</div>
           <div class="link">
            <div style="float:right">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
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
  name: 'SecondaryHeader',
  components: { homeTemp01 },
  props: {
    title: String
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
