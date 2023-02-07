
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
      infos({page: 0, size: this.topic.homeInfoSize, topicId: this.topic.topicId, ...this.query}).then(data => {
        this.data = data.data || []
      })
    },
    queryCates () {
      cates({topicId: this.topic.topicId}).then(data => {
        this.cates = data || []
      })
    },
    getImageUrl (id) {
      return `/api/sys/attachment/download?fileId=${id}&type=${this.mainImageCate}&isImage=true`
    }
  }
}
