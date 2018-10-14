/**
* 作者： liuGuangXin 2018/10/14

** title: 使用组件规则
*     1: 需自己配置上传地址
*     2: 显示图片可自己配置，目前暂无后台用的是死的。
*     3: 使用v-model绑定组件。
*/
<template>
  <div class="container">
    <el-upload class="avatar-uploader" :action="upLoadUrl" :show-file-list="false" :on-success="onSuccess" :before-upload="beforeUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import config from '@/server/config'

export default {
  props: ['value'],
  components: {
  },
  computed: {
    upLoadUrl () {
      return config.server
    }
  },
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png' || 'image/jpg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }

      return isJPG && isLt2M
    },
    onSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.$emit('input', file[0])
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scopend lang="scss">
.avatar-uploader {

  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &:hover {
    border-color: #409EFF;
    }
  }
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.avatar {
  width: 60px;
  height: 60px;
  display: block;
}

</style>
