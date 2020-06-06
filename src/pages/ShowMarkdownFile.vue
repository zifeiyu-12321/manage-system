<template>
  <div class="system-show-markdown-file">
    <div class="page-title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-document"></i> markdown 文件展示
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="page-container">
      <div class="markdown-body">
        <mavon-editor
          class="md"
          v-html="handbook"
          :subfield="false"
          :toolbarsFlag="false"
          :boxShadow="false"
          :ishljs="true"
          v-highlight
        />
      </div>
    </div>
    <svg-icon icon-class="search"></svg-icon>
  </div>
</template>

<script>
import markdown from '@/assets/markdown/数组常用的方法.md'

export default {
  name: "",
  components: {},
  data () {
    return {
      markdownOption: {
        bold: true // 粗体
      },
      handbook: markdown
    }
  }
};
</script>

<style lang='less' scoped>
.system-show-markdown-file {
  // .markdown-body {
  //   //编写容器的一些css，根据需要进行调整，这里是我博客的，在github提供的.markdown-body基础上修改的
  //   box-sizing: border-box;
  //   min-width: 200px;
  //   /* max-width: 980px; */
  //   /* padding: 45px; */
  //   max-width: 98%;
  //   margin: 0 auto;
  //   box-shadow: 2px 4px 6px gray;
  //   padding-left: 20px;
  //   padding-right: 15px;
  //   padding-top: 40px;
  //   padding-bottom: 45px;
  //   margin-bottom: 100px;
  // }

  // github使用的是这个 根据自己的进行调整
  // .markdown-body {
  //   box-sizing: border-box;
  //   min-width: 200px;
  //   max-width: 980px;
  //   margin: 0 auto;
  //   padding: 45px;
  // }

  //这个要配合移动端 不是很理解
  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
}
</style>