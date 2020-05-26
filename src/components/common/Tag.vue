<template>
  <div class="system-tags">
    <ul class="tags-container">
      <li
        class="tag-item"
        v-for="(item, index) in tagList"
        :key="index"
        :class="{'active': isActive(item.path)}"
      >
        <router-link :to="item.path">{{item.title}}</router-link>
        <span @click="closeTag(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
    </ul>
    <div class="tag-close-box">
      <el-dropdown @command="handleCommand">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          <el-dropdown-item command="other">关闭其它</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import bus from "../bus";
export default {
  name: "v-tags",
  components: {},
  data() {
    return {
      tagList: []
    };
  },
  created() {
    this.setTags(this.$route);
    // 监听关闭当前页面的标签页
    bus.$on("close_current_tags", () => {
      for (let i = 0, len = this.tagsList.length; i < len; i++) {
        const item = this.tagsList[i];
        if (item.path === this.$route.fullPath) {
          if (i < len - 1) {
            this.$router.push(this.tagsList[i + 1].path);
          } else if (i > 0) {
            this.$router.push(this.tagsList[i - 1].path);
          } else {
            this.$router.push("/");
          }
          this.tagsList.splice(i, 1);
          break;
        }
      }
    });
  },
  methods: {
    isActive(path) {
      return path === this.$route.fullPath;
    },
    // 关闭单个标签
    closeTag(index) {
      const deleteItem = this.tagList.splice(index, 1)[0];
      const item = this.tagList[index]
        ? this.tagList[index]
        : this.tagList[index - 1];
      if (item) {
        deleteItem.path === this.$route.fullPath &&
          this.$router.push(item.path);
      } else {
        this.$router.path("/");
      }
    },
    // 设置标签
    setTags(route) {
      const isExist = this.tagList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagList.length >= 8) {
          this.tagList.shift();
        }
        this.tagList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      bus.$emit("tags", this.tagList);
    },
    // 关闭所有标签
    closeAll() {
      this.tagList = [];
      this.$router.push("/");
    },
    // 关闭其它标签
    closeOther() {
      this.tagList = this.tagList.filter(item => {
        return item.path === this.$route.fullPath;
      });
    },
    // 关闭标签操作
    handleCommand(command) {
      command === "all" ? this.closeAll() : this.closeOther();
    }
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    }
  }
};
</script>

<style lang='less' scoped>
.system-tags {
  background-color: #ffffff;
  height: 30px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  .tags-container {
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    padding-left: 6px;
    .tag-item {
      height: 26px;
      line-height: 24px;
      margin-right: 10px;
      border: 1px solid #e9eaec;
      font-size: 12px;
      padding: 0 5px;
      cursor: pointer;
      border-radius: 4px;
      > a {
        text-decoration: none;
        color: #666;
      }
    }
    .active {
      color: #ffffff;
      background-color: #409eff;
      border-color: #409eff;
      >a {
        color: #fff;
      }
    }
  }
}
.tag-close-box {
  position: absolute;
  right: 1px;
  top: 1px;
  .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>