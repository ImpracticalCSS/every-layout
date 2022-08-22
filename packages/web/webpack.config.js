const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

const isDevelopment = process.env.NODE_ENV !== "production";
const isProduction = process.env.NODE_ENV === "production";
const cssRegex = /\.css$/;
const javascriptOrTypescriptRegex = /\.(js|jsx|ts|tsx)$/;
const nodeModulesRegex = /node_modules/;

function cssLoader() {
  return {
    test: cssRegex,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: "css-loader",
        options: {
          sourceMap: isDevelopment,
        },
      },
    ],
  };
}

function srcLoader() {
  return {
    test: javascriptOrTypescriptRegex,
    exclude: nodeModulesRegex,
    use: [
      { loader: require.resolve("babel-loader") },
      {
        loader: "@linaria/webpack-loader",
        options: {
          sourceMap: isDevelopment,
        },
      },
    ],
  };
}

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: "source-map",
  entry: "./src/index",
  output: isDevelopment
    ? {
        path: path.resolve(__dirname, "lib"),
        filename: "[name].bundle.js",
      }
    : {
        path: path.resolve(__dirname, "lib"),
        filename: "index.js",
        libraryTarget: "commonjs",
      },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({ filename: "styles.css" }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  externals: isDevelopment
    ? {}
    : {
        react: "react",
        "react-dom": "react-dom",
      },
  module: {
    rules: [srcLoader(), cssLoader()],
  },
  optimization: {
    minimize: isProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          keep_fnames: true,
          sourceMap: true,
        },
      }),
    ],
  },
};
