<template>
  <div class="app-contain">
    <div class="block">
      <el-button type="text" @click="centerDialogVisible = true">我的长征路</el-button>
      <el-dialog title="我的长征路" :visible.sync="centerDialogVisible" width="30%" center>
        <el-timeline>
          <el-timeline-item timestamp="1934年10月18日傍晚" placement="top">
            <el-card>
              <h3>江西</h3>
              <p>时任中华苏维埃共和国中央执行委员会主席的毛泽东带领警卫班离开于都城，踏上长征的路途。（第五次“反围剿”失败，国民党穷追不舍。）</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1934年10月" placement="top">
            <el-card>
              <h3>福建</h3>
              <p>中国工农红军第一、第三、第五军团（即红军第一方面军，亦称中央红军），从福建西部的长汀、宁化和江西南部的瑞金、于都等地出发，开始战略性的大转移。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1934年11月底" placement="top">
            <el-card>
              <h3>湖南</h3>
              <p>湘江之战中红军遭受惨重损失。11月30日，随军委第一野战纵队渡过湘江。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1934年12月12日" placement="top">
            <el-card>
              <h3>湖南</h3>
              <p>在湖南通道召开的中共中央负责人紧急会议上，力主红军放弃原定向湘西与红二、六军团会合的计划，改向敌人力量薄弱的贵州前进，被采纳。（黎平会议）</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年1月15日至17日" placement="top">
            <el-card>
              <h3>贵州</h3>
              <p>出席在贵州遵义召开的中共中央政治局扩大会议，被增选为中央政治局常委。会议结束了王明“左”倾冒险主义在中共中央的统治，实际确立了以毛泽东为代表的新的中央领导。（遵义会议）</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年1月" placement="top">
            <el-card>
              <h3>贵州</h3>
              <p>红军强渡乌江江界河渡口的军事行动</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年3月" placement="top">
            <el-card>
              <h3>贵州</h3>
              <p>同周恩来、王稼祥组成三人军事指挥小组。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年3月至5月" placement="top">
            <el-card>
              <h3>贵州、云南、四川</h3>
              <p>同周恩来等指挥红一方面军四渡赤水，巧渡金沙江，飞夺泸定桥，取得战略转移中具有决定意义的胜利。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年6月" placement="top">
            <el-card>
              <h3>四川</h3>
              <p>率红一方面军同红四方面军在四川西部会合。不久，即同张国焘的逃跑主义、分裂主义进行斗争。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年6月" placement="top">
            <el-card>
              <h3>西康</h3>
              <p>中央红军在川康边地区翻越了终年积雪、气候变化无常的大雪山——夹金山。</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="1935年10月19日" placement="top">
            <el-card>
              <h3>陕西</h3>
              <p>率领中国工农红军陕甘支队到达陕西延安吴起镇。红军胜利完成长征。</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
// import Pagination from "@/components/Pagination";
// import Vue from "vue"
import { Timeline, Dialog } from "element-ui"
// Vue.use(Timeline)
// Vue.use(Dialog)

// import examPaperApi from '@/api/examPaper'
// import subjectApi from '@/api/subject'

export default {
  // components: { Pagination },
  data() {
    return {
      visible: false,
      centerDialogVisible: false
    }
  },
  methods: {},
  computed: {}
}
</script>

<style src="../../styles/h1.css" scoped></style>
