const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackConfig = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: (config) => {
    config.plugins.push(new MiniCssExtractPlugin({ filename: "styles.css" }));

    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules },
    };
  },
};
