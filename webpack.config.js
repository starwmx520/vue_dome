var webpack = require('webpack');

//引用单独打包模块
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    'app': './app.js',
  },
  output: {
    path: 'public/build',
    publicPath: 'build/',
    filename: '[name].js'
  },
  resolve: {
    // 配置第三方插件别名
    alias: {
      /*'ajax': __dirname + '/ajax-config.js',
      'webcontext': __dirname + '/webcontext.js',
      'jquery': __dirname + '/plugins/jquery.js',
      'underscore': __dirname + '/plugins/underscore.js'*/
    }
  },
  plugins: [
    // 配置全局依赖，无需再次require
    /*new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      _: 'underscore',
      Ajax: 'ajax',
      Context: 'webcontext'
    })*/
    new ExtractTextPlugin("style/[name].css")  //配置css style引用
    //new ExtractTextPlugin("style/style.css", {allChunks: true})// 配置css 单独打包
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  }
};