/* eslint-disable no-undef */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const mode = process.env.PROFILE;
const nodeExternals = require("webpack-node-externals");
module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "react-infinite-scroll",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode,
  target: "node",
  externals: [nodeExternals()],
};
