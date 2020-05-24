<template>
  <div class="system-map">
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> 使用高德地图
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <div id="container" style="width:500px; height:300px"></div>
    </div>
  </div>
</template>
 
<script>
import AMap from "AMap"; // 引入高德地图
export default {
  name: "v-map",
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new AMap.Map("container", {
        center: [116.397428, 39.90923],
        resizeEnable: true,
        zoom: 10
      });
    }
  }
};
</script>