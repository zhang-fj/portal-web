<template>
  <div class="protal-footer">
    <div class="pertal-footer-contact">
        <span>如果您有任何问题，请跟我们联系！</span>
        <el-button type="success" @click="toContactUs">联系我们</el-button>
    </div>
    <div class="pertal-footer-copyright">
      <p>Copyright © 2018-2021 JEELP信息技术有限公司   版权所有 备案号：XICP备1234567890号</p>
      <span>地址：北京市海淀区北四环中路10000号</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloFooter',
  data () {
    return {
    }
  },
  methods: {
    toContactUs () {
      if (this.$route.query.topicId !== '5e4372d913df4d189acc489b8bff45fe') {
        this.$router.push({path: 'secondary', query: { topicId: '5e4372d913df4d189acc489b8bff45fe' }})
      }
    }
  }
}
</script>

<style scoped>
.protal-footer {
  width: 100%;
  background-color: #FFF;
}

.pertal-footer-copyright{
  height: 80px;
  margin: 0px auto;
  font-size: 12px;
  color:#aaaaaa;
  background-color: #1c222a;
}

.pertal-footer-copyright p{
  padding-top:20px;
  margin: 0px;
  display: block;
  height: 20px;
  line-height: 20px;
}

.pertal-footer-copyright span{
  margin: 0px;
  display: block;
  height: 20px;
  line-height: 20px;
}

.pertal-footer-contact{
  background-color: rgb(31, 113, 194);
  color:#FFF;
  font-size: 32px;
}

.pertal-footer-contact span{
  display:inline-block;
  height: 80px;
  line-height: 80px;
}

.pertal-footer-contact >>> .el-button{
  position:relative;
  top:-5px;
  border-radius:0px
}

</style>
