const { resolve } = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    demo: './demo/index.tsx',
  },
  output: {
    filename: '[name].min.js',
    path: resolve(__dirname, 'public/'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: false,
            compilerOptions: {
              declaration: false,
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin([
      { from: 'demo/index.html', to: 'index.html' },
    ]),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    '@antv/g2plot': 'G2Plot',
  },
  mode: 'production',
};
