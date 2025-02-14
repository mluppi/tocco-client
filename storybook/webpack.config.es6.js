import webpack from '@storybook/builder-webpack4/node_modules/webpack'

import runConfig from '../config'

module.exports = ({config, configType}) => {
  config.plugins.push(new webpack.DefinePlugin(runConfig.globals))

  config.module.rules = config.module.rules.map(data => {
    if (/svg\|/.test(String(data.test))) {
      data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
    }
    return data
  })

  config.plugins = config.plugins.filter(p => String(p.resourceRegExp) !== '/core-js/')

  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        `sass-loader?data=$node-env:${runConfig.env};&includePaths[]=./packages/tocco-theme/node_modules/`
      ] // eslint-disable-line
    },
    {
      test: /\.woff(\?.*)?$/,
      use: 'file-loader?name=fonts/[name].[contenthash].[ext]&mimetype=application/font-woff'
    },
    {
      test: /\.woff2(\?.*)?$/,
      use: 'file-loader?name=fonts/[name].[contenthash].[ext]&mimetype=application/font-woff2'
    },
    {
      test: /\.otf(\?.*)?$/,
      use: 'file-loader?name=fonts/[name].[contenthash].[ext]&mimetype=font/opentype'
    },
    {
      test: /\.ttf(\?.*)?$/,
      use: 'file-loader?name=fonts/[name].[contenthash].[ext]&mimetype=application/octet-stream'
    },
    {
      test: /\.eot(\?.*)?$/,
      use: 'file-loader?name=fonts/[name].[contenthash].[ext]'
    },
    {
      test: /\.svg(\?.*)?$/,
      use: 'file-loader?name=imgs/[name].[contenthash].[ext]&mimetype=image/svg+xml'
    },
    {
      test: /\.(png|jpg|ico)$/,
      use: 'file-loader?name=imgs/[name].[contenthash].[ext]&limit=8192'
    }
  )

  return config
}
