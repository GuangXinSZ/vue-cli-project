/**
* Author：liuGuangXin 2018/10/26

** title: 使用组件规则
*     1: 需传入localStorage的名字
*     2: 需在组件上绑定handleOut事件，接收res。
*     3：引入lodash。
*/
<template>
  <div class="search-history">
    <div class="search-input">
      <el-input class="input" size="medium" v-model="inputValue" placeholder="请输入内容" @keyup.enter.native="historyQuery"></el-input>
      <el-button type="primary" size="medium" @click="historyQuery">搜索</el-button>
    </div>
    <div class="search-list">
      <el-tag
        class="tag"
        v-for="tag in arrHistory"
        :key="tag"
        closable
        @click.native="handleTag(tag)"
        @close="deleteTag(tag)"
        >
        {{tag}}
      </el-tag>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: ['name'],
  components: {
  },
  computed: {
  },
  data () {
    return {
      inputValue: '',
      arrHistory: []
    }
  },
  methods: {
    getArrHistoryList () {
      let res = localStorage.getItem(this.name)
      this.arrHistory = JSON.parse(res)
    },
    historyQuery () {
      if (!this.inputValue || this.inputValue.trim() === '') {
        return
      }
      this.$emit('handleOut', this.inputValue)
      this.arrHistory = _.union(this.arrHistory, [this.inputValue])
      if (this.arrHistory.length > 6) {
        this.arrHistory = _.drop(this.arrHistory)
      }

      localStorage.setItem(this.name, JSON.stringify(this.arrHistory))
    },
    deleteTag (tag) {
      this.arrHistory = _.without(this.arrHistory, tag)
      localStorage.setItem(this.name, JSON.stringify(this.arrHistory))
    },
    handleTag (res) {
      this.inputValue = res
      this.$emit('handleOut', res)
    }
  },
  mounted () {
  },
  created () {
    this.getArrHistoryList()
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

  .search-list {
    margin-top: 10px;
    .tag + .tag {
      margin-left: 8px;
    }
  }
}

</style>
