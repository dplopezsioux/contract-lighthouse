require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: [
    isDevelopment && "@gatsbyjs/webpack-hot-middleware/client",
    "./src/interface/Index.jsx",
  ].filter(Boolean), // Entry point of your application
  output: {
    path: path.resolve(__dirname, "public"), // Folder where the compiled files will be placed
    filename: "js/[name].[contenthash].js", // Name of the compiled JS file
    clean: true, // Clean the output folder before compile
    publicPath: "/", // Adjust the publicPath
  },
  mode: isDevelopment ? "development" : "production", // Development mode
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new TerserPlugin(), // Minify JavaScript
      new CssMinimizerPlugin(), // Minify CSS
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                mozjpeg: true,
              },
              webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
              },
              avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
              },
              // png by default sets the quality to 100%, which is same as lossless
              // https://sharp.pixelplumbing.com/api-output#png
              png: { palette: true },
              // gif does not support lossless compression at all
              // https://sharp.pixelplumbing.com/api-output#gif
              gif: {},
            },
          },
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                "preset-default",
              ],
            },
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // For .js and .jsx files
        exclude: /node_modules/,
        include: path.join(__dirname, "src", "interface"),
        use: "babel-loader",
      },
      {
        test: /\.css$/, // For CSS files
        type: "asset",
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./public", // Adjust the publicPath
            },
          },
          "css-loader",
        ], // Extract CSS into separate files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/, // For images
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./img", // Folder where the images will be placed
              name: "[name].[ext]", // Name of the images
            },
          },
        ], // Image file handling
      },
    ],
  },
  devtool: "inline-source-map", // Source maps for debugging
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment &&
      new ReactRefreshPlugin({
        overlay: {
          sockIntegration: "whm",
        },
      }),
    new HtmlWebpackPlugin({
      template: "./src/interface/index.html", // HTML template for your React application
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", // Output the CSS to a specific folder
    }), // Plugin to extract CSS
  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    host: "0.0.0.0",
    allowedHosts: "auto",
    bonjour: true,
    hot: "only",
    compress: true,
    port: 4000,
    client: {
      logging: "info",
      overlay: true,
      progress: true,
      reconnect: true,
    },
    open: true,
    proxy: {
      "/api": "http://localhost:3000",
      changeOrigin: true,
    },
  },
  resolve: {
    extensions: [".js", ".jsx"], // File extensions to resolve
  },
};
