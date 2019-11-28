<template>
  <div  class="app-contain">
    <div class="welcome" v-show="isSuccess1">
      <img src="../../assets/success.png" class="trans_fade_image">
    </div>
    <div class="welcome" v-show="isSuccess2">
      <img src="../../assets/failure.png" class="trans_fade_image">
    </div>
    <div class="p9_map">
      <img src="../../assets/h1.png">
      <el-popover
        class="dian01"
        placement="top-start"
        title="吴起镇"
        width="200"
        trigger="hover"
        content="1935年10月19日，红一方面军到达陕甘苏区的吴起镇。11月初，在甘泉附近地区同红15军团会师。"
      >
        <el-button slot="reference" size="small" round @click="isShow(13)">吴起镇</el-button>
      </el-popover>

      <el-popover
        class="dian00"
        placement="top-start"
        title="开始长征"
        width="200"
        trigger="hover"
        content="1934年10月10日，红军开始长征。">
        <el-button slot="reference" size="small" round @click="isShow(0)">开始长征</el-button>
      </el-popover>

      <el-popover
        class="dian03"
        placement="top-start"
        title="腊子口"
        width="200"
        trigger="hover"
        content="1935年9月10日，红一方面军第1、第3军继续北上，17日拂晓，夺取天险腊子口。">
        <el-button slot="reference" size="small" round @click="isShow(12)">腊子口</el-button>
      </el-popover>

      <el-popover
        class="dian10"
        placement="top-start"
        title="水草地"
        width="200"
        trigger="hover"
        content="1935年6月26日，中共中央政治局在两河口举行会议，决定中央红军和红四方面军共同北上。">
        <el-button slot="reference" size="small" round @click="isShow(11)">水草地</el-button>
      </el-popover>

      <el-popover
        class="dian11"
        placement="top-start"
        title="夹金山"
        width="200"
        trigger="hover"
        content="1935年6月18日，中央红军到达懋功地区，和红四方面军会师。">
        <el-button slot="reference" size="small" round @click="isShow(10)">夹金山</el-button>
      </el-popover>

      <el-popover
        class="dian12"
        placement="top-start"
        title="大渡河"
        width="200"
        trigger="hover"
        content="1935年5月25日，强渡大渡河。">
        <el-button slot="reference" size="small" round @click="isShow(8)">大渡河</el-button>
      </el-popover>

      <el-popover
        class="dian05"
        placement="top-start"
        title="泸定桥"
        width="200"
        trigger="hover"
        content="1935年5月29日，飞夺泸定桥">
        <el-button slot="reference" size="small" round @click="isShow(9)">泸定桥</el-button>
      </el-popover>

      <el-popover
        class="dian06"
        placement="top-start"
        title="金沙江"
        width="200"
        trigger="hover"
        content="1935年5月9日从皎平渡渡过金沙江。">
        <el-button slot="reference" size="small" round @click="isShow(6)">金沙江</el-button>
      </el-popover>

      <el-popover
        class="dian07"
        placement="top-start"
        title="遵义"
        width="200"
        trigger="hover"
        content="1935年1月15日至17日，中共中央政治局在遵义举行扩大会议，纠正了王明“左倾”冒险主义在军事上的错误。">
        <el-button slot="reference" size="small" round @click="isShow(4)">遵义</el-button>
      </el-popover>

      <el-popover
        class="dian08"
        placement="top-start"
        title="乌江"
        width="200"
        trigger="hover"
        content="1934年12月30日至1935年1月6日，中央红军强渡乌江，并于7日占领遵义。">
        <el-button slot="reference" size="small" round @click="isShow(3)">乌江</el-button>
      </el-popover>

      <el-popover
        class="dian13"
        placement="top-start"
        title="瑞金"
        width="200"
        trigger="hover"
        content="中央红军主力8.6万人，从瑞金等地出发，开始长征路。">
        <el-button slot="reference" size="small" round @click="isShow(1)">瑞金</el-button>
      </el-popover>

      <el-popover
        class="dian14"
        placement="top-start"
        title="赤水"
        width="200"
        trigger="hover"
        content="1935年1月29日至3月21日，四渡赤水河。">
        <el-button slot="reference" size="small" round @click="isShow(5)">赤水</el-button>
      </el-popover>

      <el-popover
        class="dian15"
        placement="top-start"
        title="湘江"
        width="200"
        trigger="hover"
        content="1934年11月25日至12月1日，中央红军强渡湘江，减为3万余人。">
        <el-button slot="reference" size="small" round @click="isShow(2)">湘江</el-button>
      </el-popover>

      <el-popover
        class="dian09"
        placement="top-start"
        title="彝族区"
        width="200"
        trigger="hover"
        content="1935年5月，中央红军顺利通过彝民区。">
        <el-button slot="reference" size="small" round @click="isShow(7)">彝族区</el-button>
      </el-popover>

      <div class="btn">
        <el-button
          type="primary"
          round
          @click="start()"
        >
          返回
        </el-button>
      </div>

      <div class="question">
        <el-dialog
          :title="questions[i].content"
          :visible.sync="show"
          width="30%"
          :before-close="handleClose">
          <div>
            <el-radio v-model="questions[i].radio" label="1">{{questions[i].A}}</el-radio>
            <el-radio v-model="questions[i].radio" label="2">{{questions[i].B}}</el-radio>
            <el-radio v-model="questions[i].radio" label="3">{{questions[i].C}}</el-radio>
            <el-radio v-model="questions[i].radio" label="4">{{questions[i].D}}</el-radio>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="check">确 定</el-button>
          </span>
        </el-dialog>
      </div>

      <div class="block">
        <el-timeline >
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
            :size="activity.size"
            :type="activity.type"
            hide-timestamp
          >
          <!-- hide-timestamp -->
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'lx1',
  data () {
    return {
      isSuccess: false,
      isSuccess1: false,
      isSuccess2: false,
      i: '0',
      j: '1',
      k: '13', // 记录答对的题目数量
      l: '13', // 做题的题目数量
      show: false,
      visible: false,
      reverse: true,
      questions: [
        {
          content: '出发时中央红军主力多少人？',
          radio: '',
          A: 'A.8.6万',
          B: 'B.10万',
          C: 'C.8.8万',
          D: 'D.7.9万',
          right: '1'
        }, {
          content: '中央红军在此地和哪几个红军军队协同作战？',
          radio: '',
          A: '红二',
          B: '红六',
          C: '红二和红六',
          D: '独自作战',
          right: '3'
        }, {
          content: '强渡湘江后，红军减为几万余人？',
          radio: '',
          A: 'A.3万',
          B: 'B.5万',
          C: 'C.2万',
          D: 'D.4万',
          right: '1'
        },
        {
          content: '红军在此地击败的是国民党的哪个军队？',
          radio: '',
          A: '川军',
          B: '黔军',
          C: '党军',
          D: '国军',
          right: '2'
        }, {
          content: '红军于几日占领遵义？',
          radio: '',
          A: 'A.6日',
          B: 'B.7日',
          C: 'C.8日',
          D: 'D.9日',
          right: '2'
        }, {
          content: '四渡赤水的指挥官是谁？',
          radio: '',
          A: '毛泽东',
          B: '朱德',
          C: '周恩来',
          D: '何畏',
          right: '1'
        }, {
          content: '红军从哪个渡口渡过的金沙江？',
          radio: '',
          A: 'A.皎平',
          B: 'B.龙街',
          C: 'C.洪门',
          D: 'D.南岸',
          right: '1'
        }, {
          content: '红军在哪一年几月通过彝民区？',
          radio: '',
          A: 'A.1935年4月',
          B: 'B.1935年5月',
          C: 'C.1935年7月',
          D: 'D.1936年5月',
          right: '2'
        }, {
          content: '红军长征时是什么时候强渡大渡河的？',
          radio: '',
          A: 'A.1935年5月',
          B: 'B.1935年5月',
          C: 'C.1934年2月',
          D: 'D.1934年5月',
          right: '1'
        }, {
          content: '红军长征中飞夺泸定桥。泸定桥是______上的一座桥？',
          radio: '',
          A: 'A.湘江',
          B: 'B.乌江',
          C: 'C.大渡河',
          D: 'D.赤水河',
          right: '3'
        }, {
          content: '截止到吴起镇会师，红军长征有多长的行程？',
          radio: '',
          A: 'A.一万九千里',
          B: 'B.二万五千里',
          C: 'C.二万三千',
          D: 'D.三万一千',
          right: '2'
        }, {
          content: '红军长征时过夹金山用多长时间？',
          radio: '',
          A: 'A.三天',
          B: 'B.四天',
          C: 'C.五天',
          D: 'D.两天',
          right: '1'
        }, {
          content: '红一方面军哪两个军队北上夺取腊子口？',
          radio: '',
          A: 'A.1，2',
          B: 'B.1，4',
          C: 'C.2，4',
          D: 'D.1，3',
          right: '4'
        }, {
          content: '吴起镇会师是那两只红军的会师？',
          radio: '',
          A: 'A.红一方面军与红二方面军',
          B: 'B.红一方面军与陕北红军',
          C: 'C.红二方面军与陕北红军',
          D: 'D.红一方面军与红四方面军',
          right: '1'
        }
      ],
      activities: [
        {
          content: '开始长征',
          timestamp: '1934-10-10',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '突破国民党四道封锁线',
          timestamp: '1934-10-21至11-15',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '血战湘江',
          timestamp: '1934-11-25至12-01',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '强渡乌江',
          timestamp: '1934-12-30至1935-01-06',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '遵义会议',
          timestamp: '1935-01-15至01-17',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '四渡赤水',
          timestamp: '1935-01-29至03-21',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '抢渡金沙江',
          timestamp: '1935-05-09',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '通过彝族区',
          timestamp: '1935-05-15至05-22',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '强渡大渡河',
          timestamp: '1935-05-25至06-02',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '飞夺泸定桥',
          timestamp: '1935-05-29',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '翻越夹金山',
          timestamp: '1935-06-08至06-12',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '与红四方面军会师',
          timestamp: '1935-06-18',
          type: '',
          color: ' #1aa3ff',
          size: 'normal'
        }, {
          content: '激战腊子口',
          timestamp: '1935-09-10至09-17',
          type: '',
          color: ' #1aa3ff',
          size: 'normal',
          hide: 'true'
        }, {
          content: '到达吴起镇',
          timestamp: '1935-10-19',
          type: '',
          color: ' #1aa3ff',
          size: 'normal',
          hide: 'true'
        }
      ]
    }
  },
  created () {
    // this.initSubject()
  },
  methods: {
    check () {
      if (this.questions[this.i].radio === this.questions[this.i].right) {
        this.$message({ message: '恭喜你答对了！', type: 'success' })
        this.activities[this.j].size = 'large'
        this.activities[this.j].type = 'primary'
        this.k++
        this.l++
        this.show = false
        if (this.l === 14 && this.k === 14) {
          this.isSuccess1 = true
          this.isSuccess = true
        } else if (this.l === 14 && this.k !== 14) {
          this.isSuccess2 = true
          this.isSuccess = true
        }
        // this.i++
      } else {
        this.$message.error('不好意思哦，你答错了！')
        this.show = false
        this.l++
        if (this.l === 14 && this.k === 14) {
          this.isSuccess1 = true
          this.isSuccess = true
        } else if (this.l === 14 && this.k !== 14) {
          this.isSuccess2 = true
          this.isSuccess = true
        }
        // this.i++
      }
    },
    isShow (i) {
      this.show = true
      this.i = i
      this.j = i
    },
    start () {
      if (this.l !== 14) {
        this.$confirm('长征之路还没走完哦', '确认离开吗？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/game/start')
        }).catch(() => {
        })
      } else { this.$router.push('/game/start') }
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  computed: {
    // ...mapState('enumItem', {
    //   paperTypeEnum: state => state.exam.examPaper.paperTypeEnum
    // })
  }
}
</script>

<style src="../../styles/lx1.css" scoped></style>
