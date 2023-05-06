<template>
  <div class="wrapper">
    home
    <ul class="list">
      <li
        v-for="(item, index) in routeList"
        :key="index"
        @click="toggleRouter(item)"
      >
        <!-- <el-image :src="require(`@/assets/imgs/${item.homeMenuObject.img}`)">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image> -->
        <p>{{ 2222 }}</p>
      </li>
    </ul>
    <!-- <img class="img_left" src="@/assets/imgs/左下—装饰.png" alt="" />
    <img class="img_right" src="@/assets/imgs/右下角—装饰插画.png" alt="" /> -->
  </div>
</template>

<script>
// import { reqHomeList } from "@/api/other/index";
export default {
  name: "home",
  data() {
    return {
      routeList: [
        // {
        //   img: "用户管理—icon.png",
        //   label: "用户管理",
        // },
        // {
        //   img: "系统设置icon.png",
        //   label: "系统设置",
        // },
        // {
        //   img: "考试管理icon.png",
        //   label: "考试设置",
        // },
        // {
        //   img: "数据看板icon.png",
        //   label: "数据看板",
        // },
        // {
        //   img: "个人中心icon.png",
        //   label: "个人中心",
        // },
        // {
        //   img: "帮助中心icon.png",
        //   label: "帮助中心",
        // },
      ],
    };
  },
  methods: {
    toggleRouter(info) {
      this.$router.push(info.componentUrl);
    },
    // async getHomeList() {
    //   const result = await reqHomeList();
    //   if (result.code === 200) {
    //     this.routeList = result.data;
    //   } else {
    //     this.$message.error(result.message);
    //   }
    // },
  },
  mounted() {
    // this.getHomeList();
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  // background: url("~@/assets/imgs/右下角—装饰插画.png") no-repeat 100% 100%;
  .list {
    position: absolute;
    z-index: 99;
    display: flex;
    margin: 80px 0 0 80px;
    li {
      text-align: center;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 68px;
      }
      img {
        width: 160px;
        height: 160px;
      }
      p {
        font-size: 18px;
        color: #333;
      }
    }
  }
  .img_left {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .img_right {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
