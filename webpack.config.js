
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractDoc = new ExtractTextPlugin('docs/[name].txt');

module.exports = {
  entry: './example.ts',
  output: {
    path: './dist',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          'docs': extractDoc.extract('raw-loader'),
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
      // output all docs into a single file
      new ExtractTextPlugin('docs.md')
    ]
}
