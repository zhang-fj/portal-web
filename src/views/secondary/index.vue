<template>
  <secondary-main :key="$route.query.topicId" :topicId="$route.query.topicId"/>
</template>

<script>

import SecondaryMain from '../secondary/SecondaryMain.vue'

export default {
  components: {SecondaryMain}
}
</script>

<style scoped>
</style>
