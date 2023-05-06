<template>
  <div class="header">
    <div class="header-left">
      <!-- <img class="logo" src="@/assets/imgs/logo.png" alt="" /> -->
      <p>“名人星”AI理化生实验智慧考试和教学应用测评系统</p>
    </div>
    <div class="header-right">
      <!-- <el-button type="primary" size="medium" @click="toggleRouter"
        >切换教学模式</el-button
      > -->
      <div class="city_info">
        <!-- <img src="@/assets/imgs/位置icon.png" alt="" /> -->
        <p>南昌市</p>
      </div>
      <div class="line"></div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click">
        <div class="el-dropdown-link">
          <img src="" alt="" />
          <p>
            {{ 1111 }}
            <i class="el-icon-arrow-down"></i>
          </p>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <!-- <el-dropdown-item @click.native="toggleRouter">切换为教学模式</el-dropdown-item> -->
            <!-- <el-dropdown-item @click.native="handleNotice"
              >消息</el-dropdown-item
            > -->
            <el-dropdown-item @click.native="handleLoginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { reqPcLogin } from "@/api/login";
export default {
  name: "ComHeader",

  data() {
    return {
      transfer: {
        show: false,
      },
      userInfo: this.$store.getters.userInfo,
    };
  },

  methods: {
    handleNotice() {
      this.transfer.show = true;
    },
    toggleRouter() {
      if (localStorage.getItem("token")) {
        location.href = window.origin + "/pc";
      } else {
        this.loginPc();
      }
    },
    async loginPc() {
      const result = await reqPcLogin();
      if (result.code === 200) {
        this.$message.success("登录成功");
        localStorage.setItem("token", result.data);
        location.href = window.origin + "/pc";
      } else {
        this.$message.error(result.message);
      }
    },
    handleLoginOut() {
      this.$router.push({
        name: "loginOut",
      });
      // this.$store
      //   .dispatch("user/logout")
      //   .then(() => {
      //     this.$message.success("退出登录成功");
      //     this.$router.push("/login");
      //   })
      //   .catch((error) => {
      //     this.$message.error(error);
      //   });
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  margin: 0 20px;
  .header-left {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 8px;
    }
    p {
      font-size: 18px;
      font-weight: 900;
      color: #3d3d3d;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .city_info {
      display: flex;
      align-items: center;
      margin-left: 20px;
      img {
        width: 28px;
        height: 28px;
        margin-right: 2px;
      }
      p {
        color: #333;
      }
    }
    .line {
      width: 1px;
      height: 24px;
      margin: 0 20px;
      background-color: #ddd;
    }
    .el-dropdown-link {
      display: flex;
      align-items: center;
      cursor: pointer;
      p {
        font-family: SourceHanSansCN-Regular;
        color: #666;
      }
    }
  }
}
</style>
