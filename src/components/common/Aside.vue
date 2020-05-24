<template>
  <div class="system-aside-menu">
    <el-menu
      default-active="2"
      class="aside-menu"
      :collapse="collapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in asideVaveData">
        <template v-if="item.children">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i class="el-icon-house"></i>
              <span>{{item.title}}</span>
            </template>
            <template v-for="ite in item.children">
              <template v-if="ite.children">
                <el-submenu :index="ite.index" :key="ite.index">
                  <template slot="title">
                    <i :class="`el-icon-${ite.icon}`"></i>
                    <span slot="title">{{ite.title}}</span>
                  </template>
                  <template v-for="ites in ite.children">
                    <el-menu-item :index="ites.index" :key="ites.index">
                      <i :class="`el-icon-${ites.icon}`"></i>
                      <span slot="title">{{ites.title}}</span>
                    </el-menu-item>
                  </template>
                </el-submenu>
              </template>

              <template v-else>
                <el-menu-item :index="ite.index" :key="ite.index">
                  <i :class="`el-icon-${ite.icon}`"></i>
                  <span slot="title">{{ite.title}}</span>
                </el-menu-item>
              </template>
            </template>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  name: "",
  components: {},
  data() {
    return {
      collapse: true,
      asideVaveData: [
        {
          icon: "setting",
          index: "home",
          title: "系统首页"
        },
        {
          icon: "ship",
          index: "1",
          title: "表单组件",
          children: [
            {
              icon: "tickets",
              index: "form",
              title: "基本表单"
            },
            {
              icon: "tickets",
              index: "table",
              title: "常用表格"
            },
            {
              icon: "reading",
              index: "1-2",
              title: "编辑器",
              children: [
                {
                  icon: "tickets",
                  index: "editor",
                  title: "富文本编辑器"
                },
                {
                  icon: "tickets",
                  index: "markdown",
                  title: "markdown"
                }
              ]
            }
          ]
        },
        {
          icon: "connection",
          index: "tabs",
          title: "tab选项卡"
        },
        {
          icon: "s-promotion",
          index: "map",
          title: "高德地图"
        }
      ]
    };
  },
  created() {
    bus.$on('collapse', (msg) => {
      this.collapse = msg
      bus.$emit('collapse-content',msg)
    })
  },
  methods: {
    // 展开指定的 sub-menu
    handleOpen() {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    onRoutes() {
      return this.$route.path;
    }
  }
};
</script>

<style lang='less' scoped>
.system-aside-menu {
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  background-color: rgb(50, 65, 87);
}
.system-aside-menu::-webkit-scrollbar {
  width: 0;
}

.aside-menu:not(.el-menu--collapse) {
  width: 200px;
}
.aside-menu {
  border-right: none;
}
.sidebar > ul {
    height: 100%;
}
</style>