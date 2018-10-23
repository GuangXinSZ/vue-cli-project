<template>
  <div class="search-history">
    <div class="search-input">
      <el-input class="input" size="medium" v-model="inputValue" placeholder="请输入内容" @keyup.enter.native="handleSearch"></el-input>
      <el-button type="primary" size="medium" @click="handleSearch">搜索</el-button>
    </div>
    <div class="search-list">
      <ul></ul>
    </div>
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
      inputValue: '',
      fuzzy: ['1']
    }
  },
  methods: {
    historyQuery () {
      this.fuzzy = this.inputValue

      if (!this.fuzzy || this.fuzzy.trim() === '') {
        return
      }
      console.log('res')
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>

.search-history {

  .search-input {

    .input {
      width: 180px;
    }
  }
}

</style>
