<template>
  <div class="content">
    <div class="welcome">
      <img src="../../assets/zcjjkq.png" class="trans_fade_image">
    </div>

    <div class="choose">
      <div class="topCho">
      <img src="../../assets/book1.png" class="cho">
      </div>

      <el-row type="flex"  justify="center" class="cho choContent">
        <el-col :span="3">
          <div>&nbsp;</div>
        </el-col>
        <el-col :span="9">
          <div class="colLeft">
            <!--<el-link v-on:click="activeName=1">毛泽东</el-link><br/>-->
            <el-link v-on:click="activeName=2" >红一方面军</el-link><br/><!-- @click="game_start1()" -->
            <el-link v-on:click="activeName=4">红四方面军</el-link><br/>
            <el-link v-on:click="activeName=3">红二方面军</el-link><br/>
            <el-link v-on:click="activeName=5" >红二十五军</el-link><br/><!-- @click="game_start2()" -->
            <!--<el-link v-on:click="activeName=6">红六军团</el-link><br/>
            <el-link v-on:click="activeName=7">国民党</el-link><br/>-->
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colRight">
            <img :src="require('../../assets/rw' + activeName+'.png')" class="leftImg" >
          </div>
        </el-col>
        <el-col :span="4">
          <div class="rightR">
            <el-button type="primary" plain size="large" @click="determine()">&nbsp;确定&nbsp;</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// import { mapState, mapGetters } from 'vuex'
// import Pagination from '@/components/Pagination
export default {
  // components: { Pagination },
  name: 'start',
  data () {
    return {
      activeName: '2'
    }
  },
  created () {

  },
  methods: {
    determine () {
      if (this.activeName === 2) { this.$router.push('/game/lx1') }
      if (this.activeName === 3) { this.$router.push('/game/red2') }
      if (this.activeName === 4) { this.$router.push('/game/red1') }
      if (this.activeName === 5) { this.$router.push('/game/lx1') }
    }
  },
  computed: {
  }
}
</script>
<style src="../../styles/start.css" scoped></style>
