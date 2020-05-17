<template>
  <div class="system-aside-menu">
    <el-menu
      class="aside-menu"
      :default-active="onRoutes"
      background-color="#242f42"
    >

    </el-menu>
  </div>
</template>

<script>
import { routes } from '@/router/index.js'
export default {
  name: '',
  components: {},
  data() {
    return {
      routes,
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  computed:{
    onRoutes() {
      return this.$route.path
    }
  }
}
</script>

<style lang='less' scoped>
.system-aside-menu {

}
</style>