<template>
  <div style="background-color: #efefef;">
    <div class="protal-in-box" style="text-align:left">
      <el-form ref="form" :model="form" label-width="120px" :rules="rules">
        <el-form-item label="您的姓名：" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
           <el-form-item label="您的电话：" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
          <el-form-item label="常用邮箱：" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
          <el-form-item label="留言内容：" prop="content">
          <el-input type="textarea" :rows="10" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="onSubmit">提交</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>

import { onlinemsg } from '../../../api/protal-api'

export default {
  name: 'TwoTemp07',
  data () {
    return {
      loading: false,
      form: {
        name: '',
        mobile: '',
        email: '',
        content: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入您的姓名', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入您的电话', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入您的邮箱', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入留言内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        // 校验表单
        if (!valid) {
          return
        }
        this.loading = true
        onlinemsg(this.form).then(result => {
          this.loading = false
          this.$alert('保存成功', '提示信息', {
            confirmButtonText: '确定',
            callback: action => {
              this.form = {}
            }
          })
        }).catch(() => {
          this.loading = false
          this.$message.error({ message: '保存失败', duration: 3000, showClose: true })
        })
      })
    },
    onReset () {
      this.$refs.form.clearValidate()
      this.form = {}
    }
  }
}
</script>

<style scoped>

</style>
