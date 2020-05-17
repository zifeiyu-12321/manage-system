<template>
  <div>
    <v-header></v-header>
    <v-aside></v-aside>
  </div>
</template>

<script>
import vHeader from "./Header";
import vAside from './Aside'
export default {
  name: "",
  components: { vHeader,vAside },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
</style>