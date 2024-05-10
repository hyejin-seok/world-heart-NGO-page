const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"), // Specify the directory containing the HTML file
    },
    hot: true, // real-time updating of modules in the browser
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
