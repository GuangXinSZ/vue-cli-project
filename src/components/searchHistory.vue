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
      let res = localStorage.getItem(this.name) || null
      this.arrHistory = JSON.parse(res)
    },
    historyQuery () {
      if (!this.inputValue || this.inputValue.trim() === '') {
        return
      }
      this.$emit('handleOut', this.inputValue) // 抛出value值
      this.arrHistory = _.union(this.arrHistory, [this.inputValue]) // 如果数组里面有这个值 则不添加 没有则添加
      if (this.arrHistory.length > 6) {
        this.arrHistory = _.drop(this.arrHistory) // 删除第一个
      }

      localStorage.setItem(this.name, JSON.stringify(this.arrHistory)) // JSON.stringify 以数组的形式保存
    },
    deleteTag (tag) {
      this.arrHistory = _.without(this.arrHistory, tag) // without 删除arrHistory 里面的tag
      localStorage.setItem(this.name, JSON.stringify(this.arrHistory))
    },
    handleTag (res) {
      this.inputValue = res
      this.$emit('handleOut', res) // 抛出value值
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
