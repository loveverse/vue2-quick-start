<template>
  <el-menu :default-active="defaultActive" router class="com_menu">
    <template v-for="item in menuList">
      <template v-if="item.children">
        <el-submenu :index="item.componentUrl" :key="item.componentUrl">
          <template #title>
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <template v-for="subItem in item.children">
            <el-submenu
              v-if="subItem.children"
              :index="subItem.componentUrl"
              :key="subItem.componentUrl"
            >
              <template #title>{{ subItem.title }}</template>
              <el-menu-item
                v-for="(threeItem, i) in subItem.children"
                :key="i"
                :index="threeItem.componentUrl"
              >
                {{ threeItem.title }}
              </el-menu-item>
            </el-submenu>
            <el-menu-item
              v-else
              :index="subItem.componentUrl"
              :key="subItem.componentUrl"
            >
              {{ subItem.title }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.componentUrl" :key="item.componentUrl">
          <i :class="item.icon"></i>
          <template #title>{{ item.title }}</template>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "ComAside",
  data() {
    return {
      menuList: [
        {
          icon: "iconfont icon-sy-icon",
          componentUrl: "/home",
          title: "首页",
          permiss: "1",
        },
        {
          icon: "iconfont icon-sy-icon",
          componentUrl: "/menu",
          title: "菜单管理",
          permiss: "1",
        },
        {
          icon: "",
          componentUrl: "1",
          title: "基础设置",
          permiss: "1",
          subs: [
            {
              icon: "",
              componentUrl: "/student",
              title: "学生管理",
              permiss: "1",
            },
            {
              icon: "",
              componentUrl: "/teacher",
              title: "教师管理",
              permiss: "1",
            },
            {
              icon: "",
              componentUrl: "/class",
              title: "班级管理",
              permiss: "1",
            },
            {
              icon: "",
              componentUrl: "/unit",
              title: "单位管理",
              permiss: "1",
            },
          ],
        },
      ],
    };
  },
  computed: {
    // ...mapState("menu", ["menuList"]),
    // 解决二级路由或者子路由选中消失，需在meta中配置
    defaultActive() {
      let list = this.menuList.reduce((pre, cur) => {
        cur = cur.children ? [...pre, ...cur.children] : [...pre, cur];
        return cur;
      }, []);
      let cur = list.filter((k) => this.$route.path.includes(k.componentUrl));

      return cur[0] && cur[0].componentUrl;
    },
  },
  mounted() {
    // this.$store.dispatch("menu/getMenuList");
  },
};
</script>

<style lang="scss" scoped>
.com_menu {
  width: 100%;
  height: 100%;
  border-right: none;
  overflow-y: auto;
  overflow-x: hidden;
  // .scroll-default();
  @include scroll-default;
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #f3f3f3;
  }
  ::v-deep .el-submenu {
    .el-submenu__title:focus,
    .el-submenu__title:hover {
      background-color: #f3f3f3;
    }
  }
}
</style>
