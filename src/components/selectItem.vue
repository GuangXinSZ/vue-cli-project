/**
* Author：liuGuangXin 2018/10/14
* 使用方式:
*    1: 此组件使用v-model绑定组件。(如果不懂v-model绑定组件请自行查看api!)
*    2：select列表许传入，select大小自由控制。
*/
<template>
  <div class="select">
    <el-select v-model="selectValue" clearable :size="size" placeholder="请选择" @change="hanleChange">
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  props: ['value', 'list', 'size'],
  components: {
  },
  computed: {
  },
  data () {
    return {
      selectValue: ''
    }
  },
  methods: {
    hanleChange () {
      this.$emit('input', this.selectValue)
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
