const path = require('path')
const SetReadmeWebpackPlugin = require('./plugins/set-readme-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: path.resolve(__dirname, './loader/write-stream-loader.js'),
          options: {
            name: '',
          },
        },
      },
    ],
  },
  plugins: [
    new SetReadmeWebpackPlugin({
      name: 'redme',
    }),
  ],
}
