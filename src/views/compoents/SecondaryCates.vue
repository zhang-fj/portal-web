<template>
  <div v-if="cates&&cates.length > 0" class="protal-cate-box">
      <el-radio-group v-model="cateId" size="small" @change="changeHandler">
        <el-radio-button :label="''" size="small" style="margin-right:10px">全部</el-radio-button>
        <el-radio-button  style="margin-right:10px" size="small" v-for="item in cates" :key="item.cateId" :label="item.cateId">{{ item.cateName }}</el-radio-button>
      </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'SecondaryCates',
  props: {
    cates: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      cateId: ''
    }
  },
  methods: {
    changeHandler (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>

.protal-cate-box{
  text-align: left;
  margin: 10px;
}

</style>
