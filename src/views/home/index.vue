<template>
  <div class="protal-main protal-out-box">
    <template v-for="item in areas">
      <home-temp-01 v-if="item.homeTemp === 'HOME_TEMP_01'" :key="item.topicId" :topic="item"/>
      <home-temp-02 v-else-if="item.homeTemp === 'HOME_TEMP_02'" :key="item.topicId" :topic="item"/>
      <home-temp-03 v-else-if="item.homeTemp === 'HOME_TEMP_03'" :key="item.topicId" :topic="item"/>
      <home-temp-04 v-else-if="item.homeTemp === 'HOME_TEMP_04'" :key="item.topicId" :topic="item"/>
      <home-temp-05 v-else-if="item.homeTemp === 'HOME_TEMP_05'" :key="item.topicId" :topic="item"/>
      <home-temp-07 v-else-if="item.homeTemp === 'HOME_TEMP_07'" :key="item.topicId" :topic="item"/>
      <home-temp-06 v-else-if="item.homeTemp === 'HOME_TEMP_06'" :key="item.topicId" :topic="item"/>
      <template v-else></template>
    </template>
  </div>
</template>

<script>

import { homeTopics } from '../../api/protal-api'
import homeTemp01 from './temp/HomeTemp01.vue'
import HomeTemp02 from './temp/HomeTemp02.vue'
import HomeTemp03 from './temp/HomeTemp03.vue'
import HomeTemp04 from './temp/HomeTemp04.vue'
import HomeTemp05 from './temp/HomeTemp05.vue'
import HomeTemp06 from './temp/HomeTemp06.vue'
import HomeTemp07 from './temp/HomeTemp07.vue'

export default {
  components: { homeTemp01, HomeTemp02, HomeTemp03, HomeTemp04, HomeTemp05, HomeTemp07, HomeTemp06 },
  name: 'Home',
  data () {
    return {
      urls: [],
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
.protal-main {
  width: 100%;
}
</style>
