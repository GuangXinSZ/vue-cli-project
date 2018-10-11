<template>
  <div class="container">
    <mt-button type="primary">hello world</mt-button>
  </div>
</template>

<script>
import api from '@/server/api'
import {mapMutations, mapGetters} from 'vuex'

export default {
  name: 'home',
  components: {
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
      // 使用vuex列子
      console.log(this.city)
      this.set_city('广东')
      console.log(this.city)
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
