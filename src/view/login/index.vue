<template>
  <div class="login">
    <el-input v-model="from.user" placeholder="请输入内容"></el-input>
    <el-input v-model="from.passWorld" placeholder="请输入内容"></el-input>
    <el-button @click="loginAuth">登陆</el-button>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  data () {
    return {
      from: {
        user: '',
        passWorld: ''
      }
    }
  },
  methods: {
    loginAuth () {
      if (this.from.user === '' || this.from.passWorld === '') {
        this.$message.error('账号密码不能为空')
        return
      }
      sessionStorage.setItem()
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scopend lang="scss">

</style>
