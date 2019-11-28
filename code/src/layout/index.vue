<template>
  <el-container>
    <el-header height="61" class="student-header">
      <div class="head-user">
        <el-dropdown trigger="click" placement="bottom">
          <el-badge :is-dot="messageCount!==0" >
            <el-avatar  class="el-dropdown-avatar" size="medium"  :src="require('@/assets/avatar.png')"></el-avatar>
          </el-badge>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push({path:'/user/index'})">个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="$router.push({path:'/user/message'})">
              <el-badge :value="messageCount" v-if="messageCount!==0">
                <span>消息中心</span>
              </el-badge>
              <span  v-if="messageCount===0">消息中心</span>
            </el-dropdown-item>
            <el-dropdown-item @click.native="logout" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-menu class="el-menu-title" mode="horizontal" :default-active="defaultUrl" :router="true">
        <el-menu-item index="/index">我的长征</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="student-main">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      defaultUrl: '/index',
      messageCount:''
    }
  },
  created () {
    // this.defaultUrl = this.routeSelect(this.$route.path)
    // this.getUserMessageInfo()
  },
  watch: {
    $route (to, from) {
      this.defaultUrl = this.routeSelect(to.path)
    }
  },
  methods: {
    routeSelect (path) {
      let topPath = ['/', '/index', '/paper/index', '/record/index', '/question/index']
      if (topPath.indexOf(path)) {
        return path
      }
      return null
    }

  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.el-header{
  box-shadow: 5px 2px 5px #cecfcf;
}
</style>
