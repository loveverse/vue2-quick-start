module.exports = {
  transpileDependencies: true,
  productionSourceMap: process.env.NODE_ENV === "development",
  lintOnSave: process.env.NODE_ENV === "development", // 开启eslint
  publicPath: "/",
  devServer: {
    port: 9030,
  },
  css: {
    loaderOptions: {
      sass: {
        // 全局scss变量
        additionalData: `@import "@/assets/css/base.scss";`,
      },
    },
  },
};
