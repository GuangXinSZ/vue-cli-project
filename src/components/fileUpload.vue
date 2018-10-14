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
    beforeUpload () {
    },
    onSuccess () {
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
