<template>
  <div class="search-list">
    <el-tag :class="isAll ? 'el-tag-bg' : ''" @click.native="handleAll">全部</el-tag>
    <el-tag v-for="(tag, index) in list" :key="index" :class="tag.isEnable ? 'el-tag-bg' : ''" @click.native="handleTag(tag, index)">
      {{tag.title}}
    </el-tag>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    tagList: {
      Type: Array,
      default: []
    }
  },
  components: {
  },
  computed: {
  },
  data () {
    return {
      isAll: false,
      list: null
    }
  },
  methods: {
    handleAll () {
      this.list = _.map(this.list, (ele, key) => {
        ele.isEnable = true
        return ele
      })

      this.isAll = true
      this.$emit('querryAll')
    },
    handleTag (tag, index) {
      if (this.isAll) {
        this.list = _.map(this.list, (ele, key) => {
          ele.isEnable = false
          return ele
        })
        this.isAll = false
      }

      this.list[index].isEnable = !this.tagList[index].isEnable
      if (!this.tagList[index].isEnable) {
        return
      }

      this.$emit('querryTag', tag)
    }
  },
  mounted () {
    this.list = this.tagList
  },
  created () {
  }
}
</script>

<style scopend lang="scss">
.tag + .tag{
  margin-left: 5px;
  cursor: pointer;
}

.el-tag {
  cursor: pointer;
  margin-left: 5px;
  background-color: white !important;
}

.el-tag-bg {
  background-color: rgba(64, 158, 255, .1) !important;
}
</style>
