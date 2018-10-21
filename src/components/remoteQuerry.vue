<template>
  <div class="remote-querry">
    <el-autocomplete
      v-model="querryValue"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>

<script>
export default {
  props: ['value', 'list'],
  components: {
  },
  computed: {
    loadAll () {
      return this.list
    }
  },
  data () {
    return {
      restAurants: [],
      querryValue: '',
      timeOut: null
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      let restAurants = this.restAurants
      let res = queryString ? restAurants.filter(this.createStateFilter(queryString)) : restAurants

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        cb(res)
      }, 3000 * Math.random())
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      this.$emit('input', this.querryValue)
    }
  },
  mounted () {
    this.restAurants = this.loadAll
  },
  created () {
  }
}
</script>

<style scopend lang="scss">

</style>
