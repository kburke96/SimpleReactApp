const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
//
const htmlPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html"
});
//
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
        {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
        }
    ]
  }
};
