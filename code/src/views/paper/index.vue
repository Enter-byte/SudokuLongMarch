<template>
  <div class="app-contain">
    <div class="echarts">
      <div :style="{height:'888px',width:'100%'}" ref="myEchart"></div>
    </div>
    <div class='btn'>
      <el-button type="primary" round @click="start()">我的长征</el-button>
    </div>
    <div class='btnTop'>
      <el-button icon="el-icon-reading" circle @click="drawer = true"></el-button>
    </div>
    <div class="drawer">
          <el-drawer
            title="数读长征"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
          <div class="block">
            <!-- <span class="demonstration">Click 指示器触发</span> -->
            <el-carousel :interval="5000" arrow="always" type="card">
              <el-carousel-item >
                <img src="@/assets/p1.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p2.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p3.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p4.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p5.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p6.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p7.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p8.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p9.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p10.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p11.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p12.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p13.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p14.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p15.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p16.png" class="carousel-img">
              </el-carousel-item>
              <el-carousel-item >
                <img src="@/assets/p17.png" class="carousel-img">
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-drawer>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
// 引入中国地图数据

export default {
  props: ['renderData'],
  data () {
    return {
      visible: false,
      chart: null,
      drawer: false,
      direction: 'ttb'
    }
  },
  created () {},
  mounted () {
    this.initEchartMap()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    start () {
      this.$router.push('/game/start')
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    initEchartMap () {
      // console.log(this.renderData)
      // 这里我们用固定的数据，真正使用时，用父组件传递来的数据替换series即可
      let myChart = echarts.init(this.$refs.myEchart)
      window.onresize = myChart.resize
      myChart.setOption({
        backgroundColor: '#fff',
        // 背景色
        title: {
          text: '数读长征',
          right: '90',
          top: 50,
          textStyle: {
            color: '#003366',
            fontSize: '30',
            fontWeight: '400',
            fontFamily: 'sans-serif'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['#ffff66', 'orangered', 'yellow', 'lightskyblue']
        },
        visualMap: {
          show: true,
          min: 0,
          max: 255,
          calculable: true,
          inRange: {
            color: ['aqua', 'lime', 'yellow', 'orange', '#ff3333']
          },
          textStyle: {
            color: ' #ffffff'
          }
        },
        geo: {
          // 这个是重点配置区
          map: 'china',
          // 表示中国地图
          roam: true,
          layoutCenter: ['50%', '50%'],
          layoutSize: '130%',
          label: {
            normal: {
              show: true,
              // 是否显示对应地名
              textStyle: { color: '#fff' }
              // 地名的字体颜色
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#00264d',
              // 中国背景色
              borderColor: '#808080'
              // 省份边界线的颜色
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.02,
              symbol: 'arrow',
              symbolSize: 6,
              color: '#ff5050'
            },
            lineStyle: {
              normal: {
                width: 1.5,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                fromName: '于都',
                toName: '信丰',
                value: 0,
                coords: [[115.11, 25.8], ['114.93', '25.38']]
              },
              {
                fromName: '瑞金',
                toName: '信丰',
                value: 30,
                coords: [[116.03, 25.88], ['114.93', '25.38']]
              },
              {
                fromName: '信丰',
                toName: '大庾',
                value: 25,
                coords: [[114.93, 25.38], ['114.10', '25.27']]
              },
              {
                fromName: '大庾',
                toName: '临武',
                value: 31,
                coords: [[114.1, 25.27], ['112.55', '25.28']]
              },
              {
                fromName: '临武',
                toName: '蓝山',
                value: 12,
                coords: [[112.55, 25.28], ['112.04', '25.12']]
              },
              {
                fromName: '蓝山',
                toName: '江华',
                value: 19,
                coords: [[112.04, 25.12], ['111.79', '24.97']]
              },
              {
                fromName: '江华',
                toName: '兴安北',
                value: 18,
                coords: [[111.79, 24.97], ['110.88', '25.4']]
              },
              {
                fromName: '蓝山',
                toName: '兴安北',
                value: 15,
                coords: [[112.04, 25.12], ['110.88', '25.4']]
              },
              {
                fromName: '兴安北',
                toName: '通道',
                value: 12,
                coords: [[110.88, 25.4], ['109.614', '26.2812']]
              },
              {
                fromName: '通道',
                toName: '剑河',
                value: 12,
                coords: [[109.614, 26.2812], ['108.45', '26.73']]
              },
              {
                fromName: '剑河',
                toName: '遵义',
                value: 10,
                coords: [[108.45, 26.73], ['106.55', '27.42']]
              },
              {
                fromName: '剑河',
                toName: '三穗',
                value: 9,
                coords: [[108.45, 26.73], ['108.403', '26.73']]
              },
              {
                fromName: '三穗',
                toName: '镇远',
                value: 8,
                coords: [[108.403, 26.73], ['108.41', '27.06']]
              },
              {
                fromName: '镇远',
                toName: '施秉',
                value: 4,
                coords: [['108.41', '27.06'], ['108.12', '27.03']]
              },
              {
                fromName: '施秉',
                toName: '遵义',
                value: 4,
                coords: [['108.12', '27.03'], ['106.55', '27.42']]
              },
              {
                fromName: '遵义',
                toName: '古蔺',
                value: 4,
                coords: [['106.55', '27.42'], ['105.79', '28.03']]
              },
              {
                fromName: '遵义',
                toName: '古蔺东北',
                value: 3,
                coords: [['106.55', '27.42'], ['106.927649', '28.871067']]
              },
              {
                fromName: '古蔺东北',
                toName: '叙永',
                value: 2,
                coords: [['106.927649', '28.871067'], ['105.43', '28.17']]
              },
              {
                fromName: '叙永',
                toName: '珙县',
                value: 2,
                coords: [['105.43', '28.17'], ['104.72', '28.45']]
              },
              {
                fromName: '珙县',
                toName: '威信',
                value: 2,
                coords: [['104.72', '28.45'], ['104.60', '27.88']]
              },
              {
                fromName: '威信',
                toName: '古蔺',
                value: 2,
                coords: [['104.60', '27.88'], ['105.79', '28.03']]
              },
              {
                fromName: '古蔺',
                toName: '遵义',
                value: 2,
                coords: [['105.79', '28.03'], ['106.55', '27.42']]
              },
              {
                fromName: '古蔺',
                toName: '息烽',
                value: 2,
                coords: [['105.79', '28.03'], ['106.700423', '27.005357']]
              },
              {
                fromName: '息烽',
                toName: '曲靖',
                value: 2,
                coords: [
                  ['106.700423', '27.005357'],
                  ['103.803586', '25.497451']
                ]
              },
              {
                fromName: '古蔺',
                toName: '织金',
                value: 2,
                coords: [['105.79', '28.03'], ['105.797141', '26.650624']]
              },
              {
                fromName: '织金',
                toName: '会泽',
                value: 2,
                coords: [
                  ['105.797141', '26.650624'],
                  ['103.291992', '26.422663']
                ]
              },
              {
                fromName: '会泽',
                toName: '西昌',
                value: 2,
                coords: [
                  ['103.291992', '26.422663'],
                  ['102.185818', '27.98636']
                ]
              },
              {
                fromName: '曲靖',
                toName: '会理',
                value: 2,
                coords: [
                  ['103.803586', '25.497451'],
                  ['102.255463', '26.6601676']
                ]
              },
              {
                fromName: '会理',
                toName: '西昌',
                value: 2,
                coords: [
                  ['102.255463', '26.6601676'],
                  ['102.185818', '27.98636']
                ]
              },
              {
                fromName: '西昌',
                toName: '泸定',
                value: 2,
                coords: [
                  ['102.185818', '27.98636'],
                  ['102.338593', '29.980985']
                ]
              },
              {
                fromName: '泸定',
                toName: '懋功',
                value: 2,
                coords: [
                  ['102.338593', '29.980985'],
                  ['102.370311', '31.006861']
                ]
              },
              {
                fromName: '懋功',
                toName: '班佑',
                value: 2,
                coords: [
                  ['102.370311', '31.006861'],
                  ['103.081248', '33.596239']
                ]
              },
              {
                fromName: '班佑',
                toName: '吴起镇',
                value: 2,
                coords: [
                  ['103.081248', '33.596239'],
                  ['108.181583', '36.936358']
                ]
              }
            ]
          }, {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.02,
              symbol: 'arrow',
              symbolSize: 6,
              color: '#fff' // 移动箭头拖尾颜色
            },
            lineStyle: {
              normal: {
                width: 1.5,
                opacity: 0.6,
                curveness: 0.2
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                fromName: '何家冲',
                toName: '枣阳',
                value: 0,
                coords: [[114.018623, 32.087089], [112.784224, 32.131794]]
              }, {
                fromName: '枣阳',
                toName: '泌阳',
                value: 0,
                coords: [[112.784224, 32.131794], [113.335281, 32.727301]]
              }, {
                fromName: '泌阳',
                toName: '山阳',
                value: 0,
                coords: [[113.335281, 32.727301], [109.881727, 33.537533]]
              }, {
                fromName: '山阳',
                toName: '凤县',
                value: 0,
                coords: [[109.881727, 33.537533], [106.526008, 33.918501]]
              }, {
                fromName: '凤县',
                toName: '将台堡',
                value: 0,
                coords: [[106.526008, 33.918501], [105.876144, 35.820046]]
              }, {
                fromName: '将台堡',
                toName: '崇信',
                value: 0,
                coords: [[105.876144, 35.820046], [107.11615, 35.263831]]
              }, {
                fromName: '崇信',
                toName: '平凉',
                value: 0,
                coords: [[107.11615, 35.263831], [106.676043, 35.542653]]
              }, {
                fromName: '平凉',
                toName: '庆阳',
                value: 0,
                coords: [[106.676043, 35.542653], [107.638461, 35.714278]]
              }, {
                fromName: '庆阳',
                toName: '鄜县',
                value: 0,
                coords: [[107.638461, 35.714278], [109.410745, 36.029335]]
              }, {
                fromName: '鄜县',
                toName: '永坪镇',
                value: 0,
                coords: [[109.410745, 36.029335], [109.829982, 37.016223]]
              }
            ]
          }, {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.2,
              symbol: 'arrow',
              symbolSize: 5,
              color: '#00b300' // 移动箭头拖尾颜色
            },
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.6,
                curveness: 0.3,
                color: '#EE0000'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                fromName: '遂川',
                toName: '新田',
                value: 0,
                coords: [[114.521817, 26.318999], [112.205886, 25.917944]]
              }, {
                fromName: '新田',
                toName: '零陵',
                value: 0,
                coords: [[112.205886, 25.917944], [111.631752, 26.40489]]
              }, {
                fromName: '零陵',
                toName: '新田',
                value: 0,
                coords: [[111.631752, 26.40489], [112.205886, 25.917944]]
              }, {
                fromName: '新田',
                toName: '通道',
                value: 0,
                coords: [[112.205886, 25.917944], [109.614, 26.2812]]
              }, {
                fromName: '通道',
                toName: '施秉',
                value: 0,
                coords: [[109.614, 26.2812], [108.12, 27.03]]
              }, {
                fromName: '施秉',
                toName: '木黄',
                value: 0,
                coords: [[108.12, 27.03], [108.698127, 28.089989]]
              }, {
                fromName: '木黄',
                toName: '永顺',
                value: 0,
                coords: [[108.698127, 28.089989], [109.777353, 28.979709]]
              }
            ]
          }, {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.5,
              symbol: 'arrow',
              symbolSize: 5,
              color: '#e600e5' // 移动箭头拖尾颜色
            },
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.6,
                curveness: 0.4,
                color: '#EE0000'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                fromName: '龙山',
                toName: '江口',
                value: 0,
                coords: [[109.457314, 29.462613], [108.865465, 27.719436]]
              }, {
                fromName: '江口',
                toName: '黔西',
                value: 0,
                coords: [[108.865465, 27.719436], [106.044318, 27.018465]]
              }, {
                fromName: '大庸',
                toName: '辰溪',
                value: 0,
                coords: [[110.386584, 29.232592], [110.196233, 28.015156]]
              }, {
                fromName: '辰溪',
                toName: '黔阳',
                value: 0,
                coords: [[110.196233, 28.015156], [109.823718, 27.197074]]
              }, {
                fromName: '黔阳',
                toName: '江口',
                value: 0,
                coords: [[109.823718, 27.197074], [108.865465, 27.719436]]
              }, {
                fromName: '黔阳',
                toName: '江口',
                value: 0,
                coords: [[109.823718, 27.197074], [108.865465, 27.719436]]
              }, {
                fromName: '黔西',
                toName: '威宁',
                value: 0,
                coords: [[106.044318, 27.018465], [104.266383, 26.884919]]
              }, {
                fromName: '威宁',
                toName: '盘县',
                value: 0,
                coords: [[104.266383, 26.884919], [104.482983, 25.715299]]
              }, {
                fromName: '盘县',
                toName: '嵩明',
                value: 0,
                coords: [[104.482983, 25.715299], [103.385047, 25.288024]]
              }, {
                fromName: '嵩明',
                toName: '楚雄',
                value: 0,
                coords: [[103.385047, 25.288024], [101.497025, 25.085038]]
              }, {
                fromName: '嵩明',
                toName: '盐兴',
                value: 0,
                coords: [[103.385047, 25.288024], [101.748217, 25.534713]]
              }, {
                fromName: '盐兴',
                toName: '宾川',
                value: 0,
                coords: [[101.748217, 25.534713], [100.57486, 25.832494]]
              }, {
                fromName: '楚雄',
                toName: '宾川',
                value: 0,
                coords: [[101.497025, 25.085038], [100.57486, 25.832494]]
              }, {
                fromName: '宾川',
                toName: '中甸',
                value: 0,
                coords: [[100.57486, 25.832494], [100.293734, 26.446236]]
              }, {
                fromName: '中甸',
                toName: '白玉',
                value: 0,
                coords: [[100.293734, 26.446236], [98.829946, 31.215315]]
              }, {
                fromName: '白玉',
                toName: '甘孜',
                value: 0,
                coords: [[98.829946, 31.215315], [99.987015, 31.613586]]
              }, {
                fromName: '中甸',
                toName: '理化',
                value: 0,
                coords: [[100.293734, 26.446236], [100.293681, 30.01093]]
              }, {
                fromName: '理化',
                toName: '甘孜',
                value: 0,
                coords: [[100.293681, 30.01093], [99.987015, 31.613586]]
              }, {
                fromName: '甘孜',
                toName: '哈达铺',
                value: 0,
                coords: [[99.987015, 31.613586], [104.241828, 34.235297]]
              }, {
                fromName: '哈达铺',
                toName: '徽县',
                value: 0,
                coords: [[104.241828, 34.235297], [106.199627, 33.722363]]
              }, {
                fromName: '哈达铺',
                toName: '凤县',
                value: 0,
                coords: [[104.241828, 34.235297], [106.527741, 33.917612]]
              }, {
                fromName: '凤县',
                toName: '徽县',
                value: 0,
                coords: [[106.527741, 33.917612], [106.199627, 33.722363]]
              }, {
                fromName: '徽县',
                toName: '将台堡',
                value: 0,
                coords: [[106.199627, 33.722363], [105.847305, 35.824291]]
              }
            ]
          }, {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.5,
              symbol: 'arrow',
              symbolSize: 5,
              color: '#ffff00' // 移动箭头拖尾颜色
            },
            lineStyle: {
              normal: {
                width: 2,
                opacity: 0.6,
                curveness: 0.4,
                color: '#EE0000'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            data: [
              {
                fromName: '巴中西南',
                toName: '中坝',
                value: 0,
                coords: [[106.529955, 31.752863], [104.73162, 31.949162]]
              }, {
                fromName: '剑阁',
                toName: '中坝',
                value: 0,
                coords: [[105.541101, 32.301434], [104.73162, 31.949162]]
              }, {
                fromName: '剑阁',
                toName: '昭化',
                value: 0,
                coords: [[105.541101, 32.301434], [105.945841, 32.3483]]
              }, {
                fromName: '昭化',
                toName: '青川',
                value: 0,
                coords: [[105.945841, 32.3483], [105.209949, 32.593943]]
              }, {
                fromName: '青川',
                toName: '中坝',
                value: 0,
                coords: [[105.209949, 32.593943], [104.73162, 31.949162]]
              }, {
                fromName: '中坝',
                toName: '茂县',
                value: 0,
                coords: [[104.73162, 31.949162], [103.862461, 31.688284]]
              }, {
                fromName: '茂县',
                toName: '懋功',
                value: 0,
                coords: [[103.862461, 31.688284], [102.370311, 31.006861]]
              }, {
                fromName: '懋功',
                toName: '道孚',
                value: 0,
                coords: [[102.370311, 31.006861], [101.13384, 30.986318]]
              }, {
                fromName: '道孚',
                toName: '炉霍',
                value: 0,
                coords: [[101.13384, 30.986318], [100.696329, 31.416276]]
              }, {
                fromName: '炉霍',
                toName: '甘孜',
                value: 0,
                coords: [[100.696329, 31.416276], [99.987015, 31.613586]]
              }, {
                fromName: '茂县',
                toName: '理番',
                value: 0,
                coords: [[103.862461, 31.688284], [103.166166, 31.455713]]
              }, {
                fromName: '理番',
                toName: '懋功',
                value: 0,
                coords: [[103.166166, 31.455713], [102.370311, 31.006861]]
              }, {
                fromName: '懋功',
                toName: '巴西',
                value: 0,
                coords: [[102.370311, 31.006861], [102.691417, 33.437112]]
              }, {
                fromName: '道孚',
                toName: '甲洼寺',
                value: 0,
                coords: [[101.13384, 30.986318], [100.260674, 30.019799]]
              }, {
                fromName: '甲洼寺',
                toName: '甘孜',
                value: 0,
                coords: [[100.260674, 30.019799], [99.987015, 31.613586]]
              }, {
                fromName: '甘孜',
                toName: '阿坝',
                value: 0,
                coords: [[99.987015, 31.613586], [101.707162, 32.926576]]
              }, {
                fromName: '阿坝',
                toName: '巴西',
                value: 0,
                coords: [[101.707162, 32.926576], [102.691417, 33.437112]]
              }, {
                fromName: '巴西',
                toName: '岷县',
                value: 0,
                coords: [[102.691417, 33.437112], [104.073514, 34.451025]]
              }, {
                fromName: '岷县',
                toName: '会宁',
                value: 0,
                coords: [[104.073514, 34.451025], [105.071568, 35.691292]]
              }, {
                fromName: '岷县',
                toName: '临潭',
                value: 0,
                coords: [[104.073514, 34.451025], [103.362919, 34.698319]]
              }, {
                fromName: '临潭',
                toName: '渭源',
                value: 0,
                coords: [[103.362919, 34.698319], [104.225292, 35.137794]]
              }, {
                fromName: '渭源',
                toName: '会宁',
                value: 0,
                coords: [[104.225292, 35.137794], [105.071568, 35.691292]]
              }, {
                fromName: '茂县',
                toName: '毛儿盖',
                value: 0,
                coords: [[103.862461, 31.688284], [103.089094, 32.600592]]
              }, {
                fromName: '毛儿盖',
                toName: '炉霍',
                value: 0,
                coords: [[103.089094, 32.600592], [100.696329, 31.416276]]
              }, {
                fromName: '阿坝',
                toName: '松岗',
                value: 0,
                coords: [[101.707162, 32.926576], [102.489859, 31.863431]]
              }, {
                fromName: '懋功',
                toName: '松岗',
                value: 0,
                coords: [[102.370311, 31.006861], [102.489859, 31.863431]]
              }, {
                fromName: '懋功',
                toName: '马塘',
                value: 0,
                coords: [[102.370311, 31.006861], [102.811811, 31.684649]]
              }, {
                fromName: '马塘',
                toName: '阿坝',
                value: 0,
                coords: [[102.811811, 31.684649], [101.707162, 32.926576]]
              }, {
                fromName: '马塘',
                toName: '巴西',
                value: 0,
                coords: [[102.811811, 31.684649], [102.691417, 33.437112]]
              }, {
                fromName: '懋功',
                toName: '芦山',
                value: 0,
                coords: [[102.370311, 31.006861], [102.929094, 30.156039]]
              }, {
                fromName: '芦山',
                toName: '懋功',
                value: 0,
                coords: [[102.929094, 30.156039], [102.370311, 31.006861]]
              }, {
                fromName: '芦山',
                toName: '荥经',
                value: 0,
                coords: [[102.929094, 30.156039], [102.852289, 29.798191]]
              }, {
                fromName: '荥经',
                toName: '芦山',
                value: 0,
                coords: [[102.852289, 29.798191], [102.929094, 30.156039]]
              }
            ]
          },
          {
            name: ' ', //收货地址
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 2
            },
            tooltip: {
              trigger: 'item'
            },
            label: {
              normal: {
                show: true,
                position: 'left',
                offset: [-5, 5],
                formatter: '{b}'
              },
              emphasis: {
                show: true
              }
            },
            hoverAnimation: true,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: [
              {
                name: '瑞金',
                value: ['116.03', '25.88', 2]
              },
              {
                name: '于都',
                value: ['115.15', '25.80', 2]
              },
              {
                name: '遵义',
                value: ['106.55', '27.42', 2]
              },
              {
                name: '吴起镇',
                value: ['108.181583', '36.936358', 2]
              },
              {
                name: '古蔺',
                value: ['105.79', '28.03', 2]
              },
              {
                name: '泸定',
                value: ['102.338593', '29.980985', 2]
              },
              {
                name: '懋功',
                value: ['102.370311', '31.006861', 2]
              },
              {
                name: '班佑',
                value: ['103.081248', '33.596239', 2]
              },
              {
                name: '会理',
                value: ['102.255463', '26.6601676', 2]
              },
              {
                name: '曲靖',
                value: ['103.803586', '25.497451', 2]
              },
              {
                name: '何家冲',
                value: ['114.018623', '32.087089', 2]
              },
              {
                name: '永坪镇',
                value: ['109.829982', '37.016223', 2]
              },
              {
                name: '遂川',
                value: ['114.521817', '26.318999', 2]
              },
              {
                name: '通道',
                value: ['109.614', '26.2812', 2]
              },
              {
                name: '永顺',
                value: ['109.77353', '28.979709', 2]
              },
              {
                name: '龙山',
                value: ['109.457314', '29.462613', 2]
              },
              {
                name: '大庸',
                value: ['110.386584', '29.232592', 2]
              },
              {
                name: '江口',
                value: ['108.86546', '27.71943', 2]
              },
              {
                name: '黔西',
                value: ['106.044318', '27.018465', 2]
              },
              {
                name: '盘县',
                value: ['104.482983', '25.715299', 2]
              },
              {
                name: '甘孜',
                value: ['99.987015', '31.613586', 2]
              },
              {
                name: '将台堡',
                value: ['105.847305', '35.824291', 2]
              },
              {
                name: '中坝',
                value: ['104.73162', '31.949162', 2]
              },
              {
                name: '茂县',
                value: ['103.862461', '31.688284', 2]
              },
              {
                name: '剑阁',
                value: ['105.541101', '32.301434', 2]
              },
              {
                name: '道孚',
                value: ['101.13384', '30.986318', 2]
              },
              {
                name: '会宁',
                value: ['105.071568', '35.691292', 2]
              },
              {
                name: '阿坝',
                value: ['101.707162', '32.926576', 2]
              },
              {
                name: '巴西',
                value: ['102.691417', '33.437112', 2]
              },
              {
                name: '甲洼寺',
                value: ['100.260674', '30.019799', 2]
              },
              {
                name: '芦山',
                value: ['102.929094', '30.156039', 2]
              },
              {
                name: '毛儿盖',
                value: ['103.089094', '32.600592', 2]
              },
              {
                name: '马塘',
                value: ['102.811811', '31.684649', 2]
              },
              {
                name: '盘县',
                value: ['104.48298', '25.715299', 2]
              },
              {
                name: '中甸',
                value: ['100.293734', '26.446236', 2]
              },
              {
                name: '白玉',
                value: ['98.829946', '31.215315', 2]
              },
              {
                name: '哈达铺',
                value: ['104.241828', '34.235297', 2]
              },
              {
                name: '徽县',
                value: ['106.199627', '33.722363', 2]
              },
              {
                name: '凤县',
                value: ['106.527741', '33.917612', 2]
              },
              {
                name: '鄜县',
                value: ['109.410745', '36.029335', 2]
              },
              {
                name: '泌县',
                value: ['113.335281', '32.727301', 2]
              }
            ]
          },
          {
            name: '开始位置',
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            tooltip: {
              trigger: 'item'
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#00ffff',
                formatter: '{b}',
                textStyle: {
                  color: '#00ffff'
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: 20,
            itemStyle: {
              normal: {
                show: true,
                color: '#99ffcc'
              }
            },
            data: [
              {
                name: '瑞金',
                value: ['116.03', '25.88', 2]
              }, {
                name: '吴起镇',
                value: ['108.181583', '36.936358', 2]
              },
              {
                name: '会宁',
                value: ['105.071568', '35.691292', 2]
              },
              {
                name: '永坪镇',
                value: ['109.829982', '37.016223', 2]
              }
            ]
          }
        ]
      })
    }
  },
  computed: {}
}
</script>

<style src='../../styles/paper.css' scoped></style>
