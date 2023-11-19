const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [    
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
     {
        test: /\.css$/i,
        use: ["style-loader",
        { loader: "css-modules-typescript-loader"},
        {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            }}],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css',],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
    devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html",
    hash: true,
    filename: './index.html'
  })]
};