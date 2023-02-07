<template>
  <div>
    <info-header :topic="topic"/>
    <info-temp-01  v-if="topic.infoTemp === 'INFO_TEMP_01'" :info-id="infoId" :topic="topic"/>
    <info-footer />
  </div>
</template>

<script>

import { topic } from '../../api/protal-api'

import InfoHeader from '../compoents/InfoHeader.vue'
import InfoFooter from '../compoents/InfoFooter.vue'
import InfoTemp01 from './temp/InfoTemp01.vue'

export default {
  components: {InfoHeader, InfoFooter, InfoTemp01},
  name: 'InfoMain',
  props: {
    topicId: {
      type: String,
      required: true
    },
    infoId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      topic: {}
    }
  },
  mounted () {
    this.queryTopic()
  },
  methods: {
    queryTopic () {
      topic({id: this.topicId}).then(data => {
        this.topic = data
      })
    }
  }
}
</script>

<style scoped>
</style>
