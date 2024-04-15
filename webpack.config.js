const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  return {
    mode: env.development ? 'development' : 'production',
    devtool: env.development ? 'inline-source-map' : false,

    devServer: {
      static: './dist',
    },
    // optimization: {
    //   runtimeChunk: 'single',
    // },

    entry: {
      main: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: './assets/[name][ext][query]',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: env.development ? true : false },
            },
            env.development ? '' : 'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.html$/i,
          use: [
            {
              loader: 'html-loader',
              options: {
                sources: {
                  list: ['...'],
                  scriptingEnabled: false,
                },
                minimize: false,
              },
            },
          ],
        },
        {
          test: /\.(png|jpeg|jpg|svg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(mp3, mp4, webm, ogg, avi, flv)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Max Pirogov',
        template: 'src/page/home/index.html',
        filename: 'index.html',
      }),
      new HtmlWebpackPlugin({
        title: 'Case Study',
        template: 'src/page/second-page/case-study.html',
        filename: 'case-study.html',
      }),
      new MiniCssExtractPlugin({
        filename: './[name].css',
      }),
      // new CopyPlugin({
      //   patterns: [{ from: './src/assets', to: 'dist/assets' }],
      // }),
    ],
  };
};
