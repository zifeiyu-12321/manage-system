<template>
  <div class="system-qrcode">
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> Qrcode 使用
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <div class="qrcode-container">
        <canvas id="canvas" class="canvas-area"></canvas>
        <div class="tips">扫一扫</div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";
export default {
  name: "",
  components: {},
  data() {
    return {
      qrData: "https://themes.cloud.huawei.com/theme-design-2020/index_m.html"
    };
  },
  mounted() {
    this.useqrcode();
  },
  methods: {
    useqrcode() {
      let canvas = document.getElementById("canvas");
      // 参数说明： canvas ： 获取 dom 元素
      // 参数说明： this.qrData ： 需要生成二维码的字符串
      // 参数说明： 参数三 ： 设置二维码样式
      QRCode.toCanvas(canvas, this.qrData, { width: 200 });
    }
  }
};
</script>

<style lang='less' scoped>
.system-qrcode {
  .qrcode-container {
    width: 230px;
    margin: 0 auto;
    display: flex;
    border: 1px dashed;
    border-radius: 4px;
    flex-direction: column;
    align-items: center;
    .tips {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>