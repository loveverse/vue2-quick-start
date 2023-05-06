<template>
  <el-container class="container_out">
    <el-header height="58px">
      <ComHeader ref="ComHeader" />
    </el-header>
    <el-container class="main_wrapper">
      <el-aside width="200px" class="aside">
        <ComAside />
      </el-aside>
      <el-container class="main_box">
        <el-header
          class="header_title"
          height="56px"
          v-show="$route.meta.title"
        >
          <div class="title">{{ $route.meta.title }}</div>
          <!-- <div class="goto" @click="$router.go(-1)">
            <i class="el-icon-back"></i>
            <span>返回</span>
          </div> -->
        </el-header>
        <el-main class="com_main" :class="!$route.meta.isInter && 'inter'">
          <ComLayout />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "",

  mounted() {
    // this.$root.ComHeader = this.$refs.ComHeader
  },
};
</script>

<style lang="scss" scoped>
.container_out {
  width: 100%;
  height: 100%;
  .main_wrapper {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #efefef;
    overflow: hidden;
    .aside {
      border-radius: 4px;
      background-color: #fff;
    }
    .main_box {
      margin-left: 20px;
      background-color: #fff;
      border-radius: 4px;
      .header_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 55px;
        padding-left: 25px;
        padding-right: 30px;
        box-sizing: border-box;
        line-height: 55px;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid #d8d8d8;
        .title {
          position: relative;
          padding: 0 5px;
          display: inline-block;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 3px;
            background-color: $tc;
            z-index: 1;
          }
        }
        .goto {
          display: flex;
          align-items: center;
          cursor: pointer;
          i {
            font-size: 20px;
          }
          span {
            font-weight: 100;
            font-size: 14px;
            margin-left: 4px;
          }
        }
      }
      .inter {
        padding: 20px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
