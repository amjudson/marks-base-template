const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const GLOBALS = {
  'process.env.API_HOST': JSON.stringify('http://localhost/MartialArts/api'),
  'process.env.API_MOCK': JSON.stringify('http://localhost:3030/apidata')
};

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index.js') // primary JS entry point
  ],
  target: 'web',
  output: {
    // save the bundle here
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: 3030
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      localcss: path.resolve(__dirname, 'src/css/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // transform all .js files
        exclude: /(node_modules)/, // except for node_modules
        loader: 'babel-loader', // apply the bable-loader to compile the files
        query: {
          presets: ['@babel/react', '@babel/env'] // load the react, es2015 babel settings
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
