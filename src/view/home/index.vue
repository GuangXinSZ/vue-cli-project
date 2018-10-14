<template>
  <div class="container">
    hello world
    <file-upload></file-upload>
  </div>
</template>

<script>
import api from '@/server/api'
import fileUpload from '../../components/fileUpload'
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'home',
  components: {
    fileUpload
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  data () {
    return {
      fileList: [],
      citys: []
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
