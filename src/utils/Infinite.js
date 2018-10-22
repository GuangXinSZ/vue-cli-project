class Infinite {
  constructor(querryFun, limit = 10) {
    this.page = 1
    this.limit = limit
    this.hasMore = true
    this.querryFun = querryFun
  }

  async hasMore () {
    if (!this.hasMore) {
      return
    }
    try {
      let count = await this.querryFun({page: this.page, limit: this.limit})
      // 再次触发
      if (count > 0) {
        this.page += 1
      }
      if (count < this.limt) {
        this.hasMore = false
      }
    } catch {
      console.log(error)
    }
  }

  async refresh () {
    this.hasMore = true
    this.page = 1
    await this.hasMore()
  }
}

export default {
  Infinite
}