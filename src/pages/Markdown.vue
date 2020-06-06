<template>
  <div>
    <mavon-editor v-model="content" ref="md" style="min-height: 600px" />
  </div>
</template>

<script>
// import study from '@/assets/markdown/study.md'
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "v-markdown",
  components: { mavonEditor },
  data() {
    return {
      content: "",
      html: "",
      configs: {}
    };
  }
};
</script>

<style lang='less' scoped>
</style>