const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       {
  //         test: /\.svg$/,
  //         use: ["babel-loader", "vue-svg-loader"],
  //       },
  //     ],
  //   },
  // },
});
