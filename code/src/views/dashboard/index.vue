<template>
  <div  >
    <div class="xuexi"></div>
    <div style="margin-top: 10px">
      <el-row >
        <el-col :span="2"> &nbsp;</el-col>
        <el-col :span="20"> 
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item >
              <img src="@/assets/carousel/1.png" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item >
              <img src="@/assets/carousel/2.png" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item >
              <img src="@/assets/carousel/3.png" class="carousel-img">
            </el-carousel-item>
            <el-carousel-item >
              <img src="@/assets/carousel/4.png" class="carousel-img">
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
    // let _this = this
    // this.loading = true
    // indexApi.index().then(re => {
    //   _this.fixedPaper = re.response.fixedPaper
    //   _this.timeLimitPaper = re.response.timeLimitPaper
    //   _this.pushPaper = re.response.pushPaper
    //   _this.loading = false
    // })

    // this.taskLoading = true
    // indexApi.task().then(re => {
    //   _this.taskList = re.response
    //   _this.taskLoading = false
    // })
  },
  methods: {
    // statusTagFormatter (status) {
    //   return this.enumFormat(this.statusTag, status)
    // },
    // statusTextFormatter (status) {
    //   return this.enumFormat(this.statusEnum, status)
    // }
  },
  computed: {
    // ...mapGetters('enumItem', [
    //   'enumFormat'
    // ]),
    // ...mapState('enumItem', {
    //   statusEnum: state => state.exam.examPaperAnswer.statusEnum,
    //   statusTag: state => state.exam.examPaperAnswer.statusTag
    // })
  }
}
</script>
<style src="../../styles/dashboard.css" scoped></style>
