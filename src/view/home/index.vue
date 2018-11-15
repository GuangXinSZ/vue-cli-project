<template>
  <div class="container">
    <!-- <file-upload></file-upload>
    <div>
      <el-button :class="{'bg': item.active}" v-for="(item, index) in selectButton" :key="index" @click="btnClick(item, index)">{{item.name}}</el-button>
    </div>
    {{ arr }}
    使用方式
    <remote-querry :list="arrList" v-model="querryFuzzy"></remote-querry>
    {{ querryFuzzy }} -->
    <div>测试</div>
    <search-history :name="historyName" @handleOut="querrySearch"></search-history>
    <div>3</div>
    <tag-querry :tagList="tagList" @querryAll="querryAll" @querryTag="querryTag"></tag-querry>
  </div>
</template>

<script>
import api from '@/server/api'
import {mapMutations, mapGetters} from 'vuex'
import fileUpload from '../../components/fileUpload'
import selectItem from '../../components/selectItem'
import remoteQuerry from '../../components/remoteQuerry'
import searchHistory from '../../components/searchHistory'
import tagQuerry from '../../components/tagQuerry'

export default {
  name: 'home',
  components: {
    fileUpload,
    selectItem,
    remoteQuerry,
    searchHistory,
    tagQuerry
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  data () {
    return {
      tagList: [
        {isEnable: false, title: '2'},
        {isEnable: false, title: '1'},
        {isEnable: false, title: '3'}
      ],
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
      arr: [],
      querryFuzzy: null,
      arrList: [
        { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
        { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
        { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
        { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' }
      ],
      historyName: 'arr_history'
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
    },
    querryTag () {
      console.log('123')
    },
    querryAll () {
      console.log('456')
    },
    querrySearch (value) {
      console.log(value)
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
