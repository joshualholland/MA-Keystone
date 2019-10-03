var path = require("path");
var webpack = require("webpack");

// TODO
// Have to create production build that will bundle.min.css for performance
// Use MiniCssExtractPlugin to do this
// https://github.com/babel/babel/issues/7254_ Polyfill as entry point poss problem

const clientConfig = {
  mode: "development",
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "@babel/polyfill",
    "./client/index.jsx"
  ],
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /.css?$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.scss?$/,
        use: ["sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js", ".css"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/app.js",
    publicPath: "/"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = [clientConfig];
