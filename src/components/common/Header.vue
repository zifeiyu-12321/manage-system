<template>
  <div class="system-header">
    <!-- 折叠按钮 -->
    <div class="header-left">
      <div class="collapse-btn mr-20 ml-20 curp" @click="colladseChange">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
      <div class="system-name">后台管理系统</div>
    </div>
    <div class="system-control mr-50">
      <!-- 全屏展示 -->
      <div class="btn-fullscreen mr-20 curp" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank f24"></i>
        </el-tooltip>
      </div>
      <!-- 消息中心 -->
      <div class="btn-bell mr-20 curp">
        <el-tooltip
          effect="dark"
          :content="message ? `有${message}条未读消息` : '消息中心'"
          placement="bottom"
        >
          <router-link to="/tabs">
            <i class="el-icon-bell fff"></i>
          </router-link>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="message"></span>
      </div>
      <!-- 用户头像 -->
      <div class="head-portrait mr-20" :style="{'background-image': `url('${headProtrait}')`}"></div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name curp" trigger="hover" @command="handleCommand">
        <span class="el-dropdown-link fff">
          下拉菜单
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="toRepository">项目仓库</el-dropdown-item>
          <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import headProtrait from '@/assets/image/headPortrait.png'
import bus from '../bus'
export default {
  name: "",
  components: {},
  data() {
    return {
      headProtrait,
      collapse: true,
      fullscreen: false,
      message: 2
    };
  },
  methods: {
    // 折叠按钮
    colladseChange() {
      this.collapse = !this.collapse
      bus.$emit('collapse',this.collapse)
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    handleCommand(commond) {
      if(commond === 'toRepository') {
        console.log('项目仓库')
      }else {
        console.log('退出登录')
      }
    }
  }
};
</script>

<style lang='less' scoped>
.system-header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #ffffff;
  background-color: #242f42;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left {
  display: flex;
  align-items: center;
}
.system-control {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .btn-fullscreen {
    transform: rotate(45deg);
  }
  .btn-bell {
    position: relative;
    .btn-bell-badge {
      position: absolute;
      top: -2px;
      right: -2px;
      width: 6px;
      height: 6px;
      background-color: #f56c6c;
      border-radius: 50%;
    }
  }
  .head-portrait {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-size: cover;
    background-position: center;
  }
}
</style>