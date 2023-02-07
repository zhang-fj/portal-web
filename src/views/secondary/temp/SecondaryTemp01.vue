<template>
    <div class="protal-two-box protal-in-box">
      <secondary-cates :cates='cates' @change="changeCaseHandler"/>
      <div :key="item.id" v-for="item in data">
        <el-row class="info-row">
          <el-col :span="4">
            <div class="date-box">
              <div class="date-box-inner">
                  {{item.inputTime}}
              </div>
            </div>
          </el-col>
          <el-col :span="item.span">
            <el-divider></el-divider>
          </el-col>
           <el-col :span="18">
            <div class="info-box" @mouseover="mouseover(item)" @mouseleave="mouseleave(item)">
              <div class="info-title">
                <router-link :to="{path:'/info',query:{topicId:topic.topicId,infoId:item.id}}">
                  <el-link type="primary" :underline="false"><span class="protal-title2" style="padding-top:0px">{{item.title}}</span></el-link>
                </router-link>
              </div>
              <div class="info-content protal-text2">
                {{item.desc}}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
      </div>
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
import SecondaryCates from '../../compoents/SecondaryCates.vue'

export default {
  name: 'TwoTemp01',
  components: {SecondaryCates},
  mixins: [SecondaryInfos],
  data () {
    return {}
  },
  computed: {
    infos () {
      return this.data.map((item) => { return {...item, ...{span: 2}} })
    }
  },
  methods: {
    queryAfter () {
      this.data = this.data.map(item => { return {...item, ...{span: 2}} })
    },
    mouseover (item) {
      item.span = 1
    },
    mouseleave (item) {
      item.span = 2
    }
  }
}
</script>

<style scoped>
  .protal-two-box .info-row /deep/ .el-divider{
    background-color: #16b4b9;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 90px;
  }

  .protal-two-box .info-row .info-box{
    margin: 0px 20px;
  }

  .protal-two-box .info-row .info-box .info-title{
    text-align: left;
    height: 24px;
    overflow: hidden;
    margin-bottom: 10px;
    transition: all .3s ease-out 0s;
  }

  .info-row .date-box{
    width: 100%;
    height: 100px;
    text-align: center;
  }

  .info-row .date-box .date-box-inner{
    color: #fff;
    height: 80px;
    line-height: 40px;
    font-size: 18px;
    width: 100px;
    padding: 0px 10px;
    margin: auto;
    background-color: #16b4b9;
    border-radius:5px;
  }

  .protal-two-box .info-row .info-box .info-content{
    text-align: left;
    height: 55px;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
</style>
