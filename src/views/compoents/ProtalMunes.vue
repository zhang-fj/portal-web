<template>
  <div class="protal-menu">
    <el-menu
      class="protal-in-box"
      mode="horizontal"
      background-color="#1f71c2"
      text-color="#fff"
      active-text-color="#fff"
      router
      :default-active="$route.query.topicId||'home'"
    >
      <el-menu-item :index="'home'" :route="{name:'home'}">首页</el-menu-item>
      <el-menu-item v-for="item in menus" :key="item.id" :index="item.id" :route="{name:'secondary', query:{'topicId':item.topicId}}">{{item.topicName}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'
import { navTopics } from '../../api/protal-api'

export default {
  name: 'ProtalMunes',
  data () {
    return {
      logo: Logo,
      menus: []
    }
  },
  mounted () {
    this.queryTopics()
  },
  methods: {
    queryTopics () {
      navTopics({}).then(data => {
        this.menus = data || []
      })
    }
  }
}
</script>

<style scoped>

.protal-menu{
  background-color: rgb(31, 113, 194);
  height: 45px;
}
.protal-menu >>> .el-menu {
  padding-left: revert;
  border: 0px;
}

.protal-menu >>> .el-menu--horizontal > .el-menu-item {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
}

.protal-menu >>> .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 45px;
  line-height: 45px;
  font-size: 15px;
}
</style>
