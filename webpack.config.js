const webpack = require('webpack');
const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
const buildPath = path.join(__dirname, '/build');


module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'site'),
    filename: 'bundle.js'
  },
  mode: NODE_ENV,
  devtool: isDev && 'eval-source-map',
  devServer: {
    contentBase: buildPath,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties"
            ],
          },
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(svg)$/,
        use: [
          'babel-loader',
          'svg-react-loader'
        ]
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'static'),
        to: path.resolve(__dirname, 'site'),
      }
    ]),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(isDev),
    }),
  ]
};