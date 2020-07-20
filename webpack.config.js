const HtmlWebPackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack");
const path = require("path");

module.exports = {

  // Uncomment below lines for production build

  // output: {
  //   path: path.resolve(__dirname),
  //   filename: '[name].js',
  //   publicPath: path.resolve(__dirname)
  // },
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader'
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|pdf)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets',
        }
      }
    ]
  },
  plugins: [
    // Make sure that the plugin is after any plugins that add images, example `CopyWebpackPlugin`
    new ImageminPlugin({
      bail: false, // Ignore errors on corrupted images
      cache: true,
      exclude: /\/ShashwatKathuria.jpg/,
      imageminOptions: {
        // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          ]
        ]
      }
    }),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "./resume.html"
    }),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "./blogs.html"
    }),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "./projects.html"
    })
  ]
};
