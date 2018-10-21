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
import _ from 'lodash'

export default {
  props: ['value', 'list'],
  components: {
  },
  computed: {
    loadAll () {
      return _.map(this.list, (o) => {
        return {value: o.value, address: o.address}
      })
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
      let [restAurants, res] = [this.restAurants, null]

      if (queryString) {
        res = restAurants.filter(this.createStateFilter(queryString))
      } else {
        res = restAurants
      }

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
    handleSelect () {
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
