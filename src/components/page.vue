template>
  <div class="align-center">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['fetchData', 'total', 'initSize'],
  data () {
    return {
      pageSize: this.initSize === undefined ? 10 : this.initSize,
      page: 1
    }
  },
  methods: {
    reset: function () {
      this.page = 1
      this.fetchDataByPage()
    },
    fetchDataByPage: function () {
      let pageParams = {
        page: this.page,
        pageSize: this.pageSize
      }
      this.fetchData(pageParams)
    },
    handleSizeChange: function (size) {
      this.pageSize = size
      this.fetchDataByPage()
    },
    handleCurrentChange: function (currentPage) {
      this.page = currentPage
      this.fetchDataByPage()
    }
  },
  mounted: function () {
    this.fetchDataByPage()
  }
}
</script>

<style scoped>
.el-pagination {
  margin-top: 30px;
}
</style>
