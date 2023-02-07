<template>
  <div class="protal-index">
    <protal-header/>
    <div class="protal-main-box">
      <router-view/>
    </div>
    <protal-footer/>
  </div>
</template>

<script>
import ProtalFooter from './ProtalFooter.vue'
import ProtalHeader from './ProtalHeader'
export default {
  components: { ProtalHeader, ProtalFooter },
  name: 'Index',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .protal-main-box{
    margin-top: 145px;
    width: 100%;
  }
</style>
