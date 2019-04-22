const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  output: {
    // Note: we're not interested in caching our files for this
    // post, so we'll remove the hashing. This wiill also make
    // following the article a bit easier so we can reference
    // the dist files by their exact filename.
    // If you're serving a real world app you 100% will want to
    // keep hashing in place. I left the orginal values commented
    // out as a reference.

    //filename: 'js/[name].[chunkhash:8].js',
    filename: "js/[name].js",
    //chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
    chunkFilename: "js/[name].chunk.js"
  },
  plugins: [
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});
