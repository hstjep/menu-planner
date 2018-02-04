const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const paths = require("./config/paths");

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      paths.appIndexJs
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  node: {
		fs: 'empty',
		net: 'empty'
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules')
    ],
    extensions: ['.js', '.jsx'],
    plugins: [
      new DirectoryNamedWebpackPlugin()      
    ]
  },
  module: {
    // rules: [
    //   { 
    //     test: /\.js$/, 
    //     exclude: /node_modules/, 
    //     loader: 'babel-loader' 
    //   }
    // ],
    loaders: [
      {
        test: /\.jsx?$/,
        include: paths.appSrc,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { 
        test: /\.css$/, 
        use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  importLoaders: 1,
                  modules: true,
                  // localIdentName: "[name]__[local]",
                  // getLocalIdent: (
                  //     context,
                  //     localIdentName,
                  //     localName,
                  //     options
                  // ) =>
                  //     transformCssClassName(
                  //         context.resourcePath,
                  //         localName
                  //     )
              }
          }]
      }     
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
  })
   ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    contentBase: './',
    hot: true,
    open: true,
    proxy: { "/api/**": { target: 'http://localhost:4000', secure: false }  }
   }
}
