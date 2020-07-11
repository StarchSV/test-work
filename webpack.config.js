const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 5000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      favicon: path.resolve(__dirname, './content/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './content/imgs'), to: path.resolve(__dirname, './dist/content/imgs') },
      ],
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, "node_modules/pure-react-carousel/dist/react-carousel.es.css"),
          path.resolve(__dirname, "styles.css")
        ],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
    ],
  },
}