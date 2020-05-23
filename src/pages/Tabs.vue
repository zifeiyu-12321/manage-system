<template>
  <div>
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> tab选项卡
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-tabs",
  components: {},
  data() {
    return {
      activeName: "second"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang='less' scoped>
</style>