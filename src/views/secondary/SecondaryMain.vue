<template>
  <div style="background-color: #efefef;">
    <secondary-header :title="topic.topicName"/>
      <secondary-temp-01 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_01'" :topic="topic" />
      <secondary-temp-02 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_02'" :topic="topic" />
      <secondary-temp-03 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_03'" :topic="topic" />
      <secondary-temp-04 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_04'" :topic="topic" />
      <secondary-temp-05 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_05'" :topic="topic" />
      <secondary-temp-06 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_06'" :topic="topic" />
      <secondary-temp-07 v-if="topic.secondaryTemp === 'SECONDARY_TEMP_07'" :topic="topic"/>
    <secondary-footer/>
  </div>
</template>

<script>

import { topic } from '../../api/protal-api'

import SecondaryHeader from '../compoents/SecondaryHeader.vue'
import SecondaryFooter from '../compoents/SecondaryFooter.vue'
import SecondaryTemp01 from './temp/SecondaryTemp01.vue'
import SecondaryTemp02 from './temp/SecondaryTemp02.vue'
import SecondaryTemp03 from './temp/SecondaryTemp03.vue'
import SecondaryTemp04 from './temp/SecondaryTemp04.vue'
import SecondaryTemp05 from './temp/SecondaryTemp06.vue'
import SecondaryTemp06 from './temp/SecondaryTemp05.vue'
import SecondaryTemp07 from './temp/SecondaryTemp07.vue'

export default {
  components: {SecondaryHeader, SecondaryFooter, SecondaryTemp01, SecondaryTemp02, SecondaryTemp03, SecondaryTemp04, SecondaryTemp05, SecondaryTemp06, SecondaryTemp07},
  name: 'SecondaryMain',
  props: {
    topicId: {
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
