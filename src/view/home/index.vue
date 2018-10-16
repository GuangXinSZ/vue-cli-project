<template>
  <div class="container">
    <file-upload></file-upload>
    <!--使用列子-->
    {{ value }}
    <select-item :list="options" :size="size" v-model="value"></select-item>
  </div>
</template>

<script>
import api from '@/server/api'
import {mapMutations, mapGetters} from 'vuex'
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
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
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
    }
  },
  created () {
    this.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
