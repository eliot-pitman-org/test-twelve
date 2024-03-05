const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  constorgName = "va-bip";
  const defaultConfig = singleSpaDefaults({
  orgName,
    projectName: "test-test-mfe-root",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    devServer: {
      static: {
        directory: __dirname + "/static"
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
        orgName,
        },
      }),
    ],
    externals: ['env-config']
  });
};