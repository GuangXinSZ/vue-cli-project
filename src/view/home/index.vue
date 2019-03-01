<template>
  <div class="container">
    <div>111111</div>
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
    <el-button @click="addList('a')">点击</el-button>
    {{city}}
    <!-- <quill-editor></quill-editor> -->
      <el-form ref="ruleForm"  :model="form">
          <el-form-item label="店铺名称:" >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="item-from" label="店铺区域:" >
            <el-select v-model="form.provinceid" placeholder="请选择活动区域" clearable value-key="key" @change="selectCity">
                 <el-option
                  v-for="(item,index) in citys"
                  :key="index"
                  :label="item.name"
                  :value="item.id">
                </el-option>
            </el-select>
            <el-select class="item-from" v-model="form.cityid" placeholder="请选择活动区域"  @change="selectArea">
               <el-option
                  v-for="(item,index) in areaList"
                  :key="index"
                  :label="item.name"
                  :value="item.id">
                </el-option>
            </el-select>
            <el-select class="item-from" v-model="form.areaid" placeholder="请选择活动区域">
             <el-option
                  v-for="(item,index) in adressList"
                  :key="index"
                  :label="item.name"
                  :value="item.id">
                </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE> -->
    <div v-for="(item, index) in adminAuth" :key="index">
      <el-checkbox :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="handleCheckAllChange(index, $event)">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="item.checkedCities" @change="handleCheckedCitiesChange(index, $event)">
        <el-checkbox v-for="(ele, index) in item.cities" :label="ele" :key="index">{{ele}}</el-checkbox>
      </el-checkbox-group>
    </div>
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
import quillEditor from '../../components/ue'
import UE from '../../components/ueditor'

var commonCityData = require('@/server/city.js')
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  name: 'home',
  components: {
    fileUpload,
    selectItem,
    remoteQuerry,
    searchHistory,
    tagQuerry,
    quillEditor,
    UE
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  data () {
    return {
      adminAuth:[
        {
          checkAll: false,
          cities: ['上海', '北京', '广州', '深圳'],
          checkedCities: ['上海', '北京'],
          isIndeterminate: true
        },
         {
          checkAll: false,
          cities: ['上海', '北京', '广州', '深圳'],
          checkedCities: ['上海', '北京'],
          isIndeterminate: true
        }
      ],
      form: {
        token: localStorage.getItem('token'),
        id: null,
        provinceid: null,
        cityid: null,
        areaid: null,
        address: null,
        name: null,
        phone: null
      },
      list: ['a', 'b', 'c'],
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
      historyName: 'arr_history',
      citys: null,
      areaList: [],
      adressList: null,
      defaultMsg: '这里是UE测试',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 200
      }
    }
  },
  methods: {
    ...mapMutations({
      set_city: 'SET_CITY'
    }),
    handleCheckAllChange(index, val) {
      this.adminAuth[index].checkedCities = val ? this.adminAuth[index].cities : [];
      this.adminAuth[index].isIndeterminate = false;
    },
    handleCheckedCitiesChange(index, value) {
      let checkedCount = value.length;
      this.adminAuth[index].checkAll = checkedCount === this.adminAuth[index].cities.length;
      console.log(checkedCount === this.adminAuth[index].cities.length)
      this.adminAuth[index].isIndeterminate = checkedCount > 0 && checkedCount < this.adminAuth[index].cities.length;
    },
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: '获取成功，可在控制台查看！',
        message: content,
        type: 'success'
      })
      console.log(content)
    },
    addList (value) {
      this.set_city('2')
      let isEnable = this.list.includes(value)
      if (isEnable) {
        return
      }
      this.list.push(value)
    },
    async init () {
      // 调用接口例子
      let res = await api.fetchCycle()
      console.log(res)
      console.log('123')
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
    },
    initCityData (level, obj) {
      let pinkArray = []
      if (level == 1) {
         for (var i = 0; i < commonCityData.cityData.length; i++) {
          let params = {
            id: commonCityData.cityData[i].id,
            name: commonCityData.cityData[i].name
          }
          pinkArray.push(params);
        }
      } else if (level == 2) {
        var dataArray = obj.cityList
        for (var i = 0; i < dataArray.length; i++) {
          pinkArray.push(dataArray[i].name);
        }
      } else if (level == 3) {
        var dataArray = obj.districtList
        for (var i = 0; i < commonCityData.cityData.length; i++) {
          let params = {
            id: commonCityData.cityData[i].id,
            name: commonCityData.cityData[i].name
          }
          pinkArray.push(params);
        }
      }

      this.citys = pinkArray
    },
      // 选择市
    selectCity (id) {
      // this.queryId.provinceid = id
       for (var i = 0; i < commonCityData.cityData.length; i++) {
         if (id == commonCityData.cityData[i].id) {
           let res = commonCityData.cityData[i]
           for (let j in res.cityList) {
             this.areaList.push(res.cityList[j])
           }
          //  this.areaList = res.cityList
           console.log(this.areaList)
         }
       }
    },
   async selectArea (id) {
      let arrPick = []
      let areaList = this.areaList
      for (let i = 0; i < areaList.length; i++) {
        if (areaList[i].id == id) {
          arrPick = areaList[i].districtList
        }
      }
      this.adressList = arrPick
    }
  },
  created () {
    this.init()
    this.initCityData(1)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg {
  background: red;
}
</style>
