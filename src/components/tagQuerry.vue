<template>
  <div class="search-list">
    <el-tag @click.native="handleAll">全部</el-tag>
    <el-tag class="tag" v-for="tag in arrHistory" :key="tag" @click.native="handleTag(tag)">
      {{tag}}
    </el-tag>
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
      arrHistory: ['1', '2']
    }
  },
  methods: {
    handleAll () {
    },
    hanleChange (tag) {
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scopend lang="scss">
.tag + .tag{
  margin-left: 5px;
}
</style>
