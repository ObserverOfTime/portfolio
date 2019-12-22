const path = require('path');
const webpack = require('webpack');

const {readFileSync} = require('fs');

const sapper = require('sapper/config/webpack');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV || 'production';
const dev = mode === 'development';

const alias = {svelte: path.resolve('node_modules', 'svelte')};
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

module.exports = {
  client: {
    entry: sapper.client.entry(),
    output: sapper.client.output(),
    resolve: {alias, extensions, mainFields},
    module: {
      rules: [{
        test: /\.(svelte|html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev,
            hydratable: true,
            hotReload: false
          }
        }
      }, {
        test: /\.toml$/,
        loader: 'toml-loader'
      }]
    },
    mode,
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      })
    ],
    devtool: dev && 'inline-source-map'
  },

  server: {
    entry: sapper.server.entry(),
    output: sapper.server.output(),
    target: 'node',
    resolve: {alias, extensions, mainFields},
    externals: ['encoding'],
    module: {
      rules: [{
        test: /\.(svelte|html)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            dev,
            css: false,
            generate: 'ssr'
          }
        }
      }, {
        test: /\.toml$/,
        loader: 'toml-loader'
      }]
    },
    mode,
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      })
    ],
    performance: {
      hints: false
    }
  },

  serviceworker: {
    mode,
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      })
    ],
    entry: sapper.serviceworker.entry(),
    output: sapper.serviceworker.output()
  }
};
