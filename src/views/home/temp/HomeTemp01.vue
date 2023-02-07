<template>
    <div class="protal-carousel-box">
      <el-carousel trigger="click" height="400px">
        <el-carousel-item v-for="item in data" :key="item.id">
          <el-image
            style="width: 100%; height: 100%"
            fit="fill"
            :src="getImageUrl(item.mainImgId)"
          ></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>

import HomeInfos from '../../../mixins/home-infos'

export default {
  name: 'HomeTemp01',
  mixins: [HomeInfos]
}
</script>

<style scoped>

</style>
