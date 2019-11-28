<template>
  <el-container>
    <el-container>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import Pagination from "@/components/Pagination";
import Vue from "vue";
import { Container, Header, Aside, Main, Timeline } from "element-ui";
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Timeline);
export default {
  components: { Pagination },
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {}
}
</script>

<style src="../../styles/h2.css" scoped></style>
