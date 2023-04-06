const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // configureWebpack: {
  //   resolve: {
  //     extensions: [".js", ".vue", ".json"],
  //     alias: {
  //       "@": path.resolve(__dirname, "./src"),
  //     },
  //   },
  // },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/base.scss";`,
      },
    },
  },
});
