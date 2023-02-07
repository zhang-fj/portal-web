<template>
 <!-- 关于我们 -->
  <div style="background-color: #efefef;">
    <sub-header :title="'关于我们'"/>
    <div class="protal-in-box">
      <div v-if="data&&data.length>0" v-html="data[0].content"></div>
    </div>
    <sub-footer/>
  </div>
</template>
<script>

import SecondaryInfos from '../../../mixins/secondary-infos'
import SecondaryCates from '../../compoents/SecondaryCates.vue'

export default {
  name: 'TwoTemp06',
  components: {SecondaryCates},
  mixins: [SecondaryInfos],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

.protal-about-box .protal-about-left{
  padding: 40px 20px;
  height: 300px;
}

.protal-about-box .protal-about-right .protal-about-titile{
  display:inline-block;
  font-size: 20px;
  padding-left: 10px;
  color:#cccccc;
}

.protal-about-box .protal-about-right{
  padding: 40px 20px;
  height: 300px;
}

.protal-about-box >>> .el-button{
   border-radius: 0px;
   border: 0px;
   background-color: #135eb4;
   color:#FFFFFF;
}

.protal-about-box >>> .el-button:hover{
   border-radius: 0px;
   border: 0px;
   background-color: #1fbec2;
}

</style>
