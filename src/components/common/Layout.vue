<template>
  <div>
    <v-header></v-header>
    <v-aside></v-aside>
    <div class="content-box" :class="{'content-collapse': collapse}">
      <v-tags></v-tags>
      <div class="main-containt">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./Header";
import vAside from "./Aside";
import vTags from "./Tag"
import bus from "../bus";
export default {
  name: "",
  components: { vHeader, vAside, vTags },
  data() {
    return {
      collapse: false
    };
  },
  created() {
    bus.$on("collapse-content", msg => {
      this.collapse = msg;
    });
  }
};
</script>

<style lang='less' scoped>
.content-box {
  position: absolute;
  left: 200px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}

.content-collapse {
  left: 65px;
}
</style>