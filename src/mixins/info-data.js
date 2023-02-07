
import { info } from '../api/protal-api'

export default {
  props: {
    topic: {
      type: Object,
      required: true
    },
    infoId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      mainImageCate: 'PORTAL_INFO_MAIN_IMAGE',
      data: {}
    }
  },
  mounted () {
    this.queryInfo()
  },
  methods: {
    queryInfo () {
      info(this.infoId).then(data => {
        this.data = data
      })
    },
    getImageUrl (id) {
      return `/api/sys/attachment/download?fileId=${id}&type=${this.mainImageCate}&isImage=true`
    }
  }
}
