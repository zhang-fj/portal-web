<template>
  <div style="background-color: #efefef;">
    <div class="protal-in-box" style="text-align:left">
       <div v-if="data&&data.length>0" v-html="data[0].content"></div>
    </div>
  </div>
</template>
<script>

import SecondaryInfos from '../../../mixins/secondary-infos'
import SecondaryCates from '../../compoents/SecondaryCates.vue'

export default {
  name: 'TwoTemp05',
  components: {SecondaryCates},
  mixins: [SecondaryInfos],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
