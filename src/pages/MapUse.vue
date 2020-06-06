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
import location from "../utils/location";
export default {
  name: "v-map",
  data() {
    return {
      // 高德地图获取当前位置
      location: "",
      lat: 0,
      lng: 0
    };
  },
  mounted() {
    this.init();
    this.getLocation(); // 调用获取地理位置
  },
  methods: {
    init() {
      // new AMap.Map("container", {
      //   center: [116.397428, 39.90923],
      //   resizeEnable: true,
      //   zoom: 10
      // });
    },
    /** 获取高德地图定位 */
    getLocation() {
      let _that = this;
      let geolocation = location.initMap("map-container"); // 定位
      AMap.event.addListener(geolocation, "complete", result => {
        console.log(result);
        _that.lat = result.position.lat;
        _that.lng = result.position.lng;
        _that.location = result.formattedAddress;
      });
    }
  }
};
</script>