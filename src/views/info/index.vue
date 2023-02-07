<template>
  <info-main :key="$route.query.infoId" :infoId="$route.query.infoId" :topicId="$route.query.topicId"/>
</template>

<script>

import InfoMain from './InfoMain.vue'

export default {
  components: {InfoMain}
}
</script>

<style scoped>
</style>
