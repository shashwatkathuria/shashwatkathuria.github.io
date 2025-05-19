const HtmlWebPackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

module.exports = {

  // Below lines only for production build
  ...(isProd && {
    output: {
      path: path.resolve(__dirname),
      filename: '[name].js',
      publicPath: path.resolve(__dirname)
    }
  }),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-class-properties"
            ]
          }
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
    new ImageMinimizerPlugin({
      exclude: /\/ShashwatKathuria.jpg/,
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminGenerate,
        options: {
          plugins: [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: [
                  {
                    name: "removeViewBox",
                    active: false
                  }
                ]
              }
            ]
          ]
        }
      }
    }),
    new HtmlWebPackPlugin({
      favicon: "./src/favicon.png",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./resume.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./blogs.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./projects.html"
    })
  ]
};
