<template>
  <div class="system-table">
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i>
          基本表格
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        :stripe="true"
        :border="true"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" align="center" width="55"></el-table-column>
        <el-table-column label="日期" align="center" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" align="center" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" align="center" label="邮箱" show-overflow-tooltip></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-table",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          email: "666666@qq.com"
        },
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang='less' scoped>
</style>