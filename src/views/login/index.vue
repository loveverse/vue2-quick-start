<template>
  <div class="login-wrapper">
    <div class="login-header">
      <!-- <img src="../../assets/imgs/logo.png" alt="" /> -->
      <span>AI理化生实验智慧考试和教学应用测评系统</span>
    </div>
    <div class="login-main">
      <div class="login-form" v-loading="loading">
        <div class="login-form-header">
          <div></div>
          <div>欢迎登录</div>
          <div></div>
        </div>
        <div class="login-form-title">账号登录</div>
        <div class="login-form-account">
          <div class="input">
            <el-input
              class="account"
              placeholder="请输入账号"
              v-model="loginForm.username"
              prefix-icon="el-icon-user"
            />
          </div>
          <div class="input">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              show-password
              prefix-icon="el-icon-lock"
            />
          </div>
        </div>
        <div class="login-forgot">
          <div @click="handleForget">忘记密码</div>
        </div>
        <el-button style="width: 100%" type="primary" @click="login"
          >登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { username, password } from "@/config";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: username,
        password: password,
      },
      loading: false,
    };
  },
  methods: {
    handleForget() {
      this.$message.warning("忘记密码，请联系管理员！");
    },
    async login() {
      localStorage.setItem("token", 1);
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  min-width: 1200px;
  overflow: hidden;
  background-size: cover;
  .login-header {
    width: 100%;
    height: 48px;
    background: #fff;
    display: flex;
    align-items: center;

    font-size: 16px;
    font-weight: 900;
    line-height: 16px;
    letter-spacing: 0em;
    color: #333333;
    img {
      width: 80px;
      height: 33px;
      margin-left: 30px;
    }
    span {
      margin-left: 5px;
    }
  }
  .login-main {
    width: 100%;
    display: flex;
    // background: url("~@/assets/imgs/bg.png") no-repeat;
    background-size: cover;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .login-form {
      width: 640px;
      height: 480px;
      padding: 0 100px;
      box-sizing: border-box;
      background: #fff;
      z-index: 100;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .login-form-header {
        width: 440px;
        display: flex;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: SourceHanSansCN-Bold;
        font-size: 28px;
        font-weight: bold;
        line-height: 28px;
        letter-spacing: 0em;
        color: #333333;
        margin-top: 30px;
        div:nth-child(1) {
          width: 160px;
          height: 2px;
          border-radius: 121px;
          opacity: 1;
          background: linear-gradient(
            270deg,
            #d8d8d8 0%,
            rgba(216, 216, 216, 0) 100%
          );
        }
        div:nth-child(3) {
          width: 160px;
          height: 2px;
          border-radius: 121px;
          background: linear-gradient(
            270deg,
            rgba(216, 216, 216, 0) 0%,
            #d8d8d8 100%
          );
        }
      }
      .login-form-title {
        width: 440px;
        display: flex;
        height: 50px;
        display: flex;
        justify-content: left;
        font-family: SourceHanSansCN-Medium;
        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
        letter-spacing: 0em;
        color: #666666;
        margin-top: 30px;
      }
      .login-form-account {
        width: 440px;
        display: flex;
        flex-direction: column;
        .input {
          position: relative;
          margin-top: 25px;
        }
        ::v-deep .el-input__inner {
          height: 52px;
          font-size: 16px;
          padding-left: 45px;
        }
        ::v-deep .el-input .el-input__inner {
          border-color: #dcdfe6 !important;
        }
        ::v-deep .el-input__prefix {
          top: 3px;
          left: 16px;
          font-size: 24px;
          color: #c0c4cc;
        }
      }
      .login-forgot {
        width: 440px;
        display: flex;
        justify-content: end;
        font-size: 16px;
        font-weight: normal;
        line-height: 16px;
        letter-spacing: 0em;
        color: #185fff;
        margin: 20px 20px 20px 0px;
        cursor: pointer;
      }
      .login-btn {
        width: 440px;
        height: 56px;
        border-radius: 143px;
        background: #dc271e;
        box-sizing: border-box;
        border: 1px solid #cccccc;
        color: #fff;
      }
    }
  }
  .login-main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
// .el-icon-map {
//   background: url("~@/assets/imgs/account.png") center no-repeat;
// }
.el-icon-map::before {
  content: "切换";
  font-size: 0;
  visibility: hidden;
}
</style>
