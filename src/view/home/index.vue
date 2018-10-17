<template>
  <div class="container">
    <file-upload></file-upload>
    <div>
      <el-button :class="{'bg': item.active}" v-for="(item, index) in selectButton" :key="index" @click="btnClick(item, index)">{{item.name}}</el-button>
    </div>
    {{ arr }}
  </div>
</template>

<script>
import api from '@/server/api'
import {mapMutations, mapGetters} from 'vuex'
// import _ from 'lodash'
import fileUpload from '../../components/fileUpload'
import selectItem from '../../components/selectItem'

export default {
  name: 'home',
  components: {
    fileUpload,
    selectItem
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  data () {
    return {
      fileList: [],
      citys: [],
      size: 'mini',
      value: '',
      selectButton: [
        {id: 1, name: '1', active: false},
        {id: 2, name: '2', active: false},
        {id: 3, name: '3', active: false}
      ],
      currIndex: 0,
      arr: []
    }
  },
  methods: {
    ...mapMutations({
      set_city: 'SET_CITY'
    }),
    async init () {
      // 调用接口例子
      let res = await api.fetchCycle()
      console.log(res)
    },
    btnClick (item, index) {
      if (item.active) {
        this.$set(item, 'active', false)
        for (let i = 0; i < this.arr.length; i++) {
          if (this.arr[i].id === item.id) {
            this.arr.splice(i, 1)
          }
        }
      } else {
        this.arr.push(item)
        this.$set(item, 'active', true)
      }
    }
  },
  created () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background: red;
}
</style>
