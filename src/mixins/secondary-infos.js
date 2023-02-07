
import { infos, cates } from '../api/protal-api'

export default {
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      cates: [],
      data: [],
      page: 0,
      size: 10,
      total: 0,
      query: {},
      mainImageCate: 'PORTAL_INFO_MAIN_IMAGE'
    }
  },
  mounted () {
    this.queryCates()
    this.queryInfos()
  },
  methods: {
    queryInfos () {
      infos({page: this.page, size: this.size, topicId: this.topic.topicId, ...this.query}).then(data => {
        this.data = data.data || []
        this.total = data.data ? data.total : 0
        this.queryAfter()
      })
    },
    changeCaseHandler (cateId) {
      this.query.cateId = cateId
      this.queryInfos()
    },
    queryAfter () {
    },
    queryCates () {
      cates({topicId: this.topic.topicId}).then(data => {
        this.cates = data || []
      })
    },
    getImageUrl (id) {
      return `/api/sys/attachment/download?fileId=${id}&type=${this.mainImageCate}&isImage=true`
    },
    handleSizeChange (value) {
      this.page = 0
      this.size = value
      this.queryInfos()
    },
    handleCurrentChange (value) {
      this.page = value - 1
      this.queryInfos()
    }

  }
}
