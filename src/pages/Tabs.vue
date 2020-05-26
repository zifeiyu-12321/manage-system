<template>
  <div class="system-tabs">
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> tab选项卡
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="`未读消息(${unread.length})`" name="first">
          <el-table :data="unread" stripe style="width: 100%" :show-header="false">
            <el-table-column prop="title" label="标题">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="date" label="操作" width="120">
              <template slot-scope="scope">
                <el-button @click="handClickBtn(scope.$index)" size="small">标为已读</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="btn-action">
            <el-button type="primary" size="small">全部标为已读</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`已读消息(${read.length})`" name="second">
          <el-table :data="read" stripe style="width: 100%" :show-header="false">
            <el-table-column prop="title" label="标题">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="date" label="操作" width="120">
              <template slot-scope="scope">
                <el-button type="danger" @click="handClickBtn(scope.$index)" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="btn-action">
            <el-button type="danger" size="small">全部删除</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="`回收站(${recycle.length})`" name="third">
          <el-table :data="recycle" stripe style="width: 100%" :show-header="false">
            <el-table-column prop="title" label="标题">
              <template slot-scope="scope">
                <span class="message-title">{{scope.row.title}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="date" label="操作" width="120">
              <template slot-scope="scope">
                <el-button @click="handClickBtn(scope.$index)" size="small">还原</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="btn-action">
            <el-button type="danger" size="small">清空回收站</el-button>
          </div>
        </el-tab-pane>
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
      activeName: "first",
      unread: [
        {
          date: "2020-04-19 20:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2020-05-20 20:00:00",
          title: "今天下午3点-5点办公区停电，请提前做好相关准备！"
        }
      ],
      read: [
        {
          date: "2020-05-21 13:00:00",
          title: "今晚12点整发大红包，先到先得!"
        }
      ],
      recycle: [
        {
          date: "2020-05-22 14:00:00",
          title: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护"
        },
        {
          date: "2020-05-23 15:00:00",
          title: "关于端午节放假通知！"
        }
      ]
    };
  },
  methods: {
    handleClick() {
      // console.log(tab, event);
    },
    handClickBtn(e) {
      if(this.activeName === 'first') {
        let tempArr = this.unread.splice(e,1)
        this.read = this.read.concat(tempArr)
      }else if (this.activeName === 'second') {
        this.read.splice(e,1)
      } else {
        let tempArr = this.recycle.splice(e,1)
        this.unread = this.unread.concat(tempArr)
      }
    }
  }
};
</script>

<style lang='less' scoped>
.system-tabs {
  .btn-action {
    margin-top: 24px;
  }
  .message-title {
    color: #409eff;
  }
}
</style>