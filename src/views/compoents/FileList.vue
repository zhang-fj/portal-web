<template>
  <div>
    <a class="link" v-for="item in data" :key="item.id" :href="`/api/protal/download?fileId=${item.id}`" target="_blank">
      {{item.oriFileName}}
    </a>
  </div>
</template>

<script>

import { files } from '../../api/protal-api'

export default {
  name: 'FileList',
  props: {
    type: {
      type: String,
      required: true
    },
    srcId: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.query()
  },
  data () {
    return {
      data: []
    }
  },
  methods: {
    query () {
      files({type: this.type, srcId: this.srcId}).then(data => {
        this.data = data.data || []
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
  display:block;
  padding-top: 16px;
}

</style>
