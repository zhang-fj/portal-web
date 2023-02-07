<template>
  <div class="protal-products-box protal-in-box">
  <secondary-cates :cates='cates' @change="changeCaseHandler"/>
    <div v-for="item in data" :key="item.id" style="text-align:left">
        {{item.title}}
        <file-list :type="'PORTAL_ZLXZ'" :src-id="item.id" />
        <el-divider></el-divider>
    </div>
    <el-divider></el-divider>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>

import SecondaryInfos from '../../../mixins/secondary-infos'
import FileList from '../../compoents/FileList.vue'
import SecondaryCates from '../../compoents/SecondaryCates.vue'

export default {
  name: 'TwoTemp04',
  components: {SecondaryCates, FileList},
  mixins: [SecondaryInfos],
  data () {
    return {}
  }
}
</script>

<style scoped>

.protal-product-in-box{
  background-color: #f1f1f1;
  box-shadow: 0 0 60px 60px #f1f1f1;
}

</style>
