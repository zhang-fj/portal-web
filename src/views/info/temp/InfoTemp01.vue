<template>
    <div>
      <div class="protal-in-box">
        <h2>{{data.title}}</h2>
        <div>
          时间:{{data.inputTime}}
        </div>
        <el-divider></el-divider>
        <div v-if="data" v-html="data.content"></div>
      </div>
    </div>
</template>
<script>

import InfoData from '../../../mixins/info-data'

export default {
  name: 'InfoTemp01',
  mixins: [InfoData],
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
