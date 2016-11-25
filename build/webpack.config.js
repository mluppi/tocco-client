import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import config from '../config'
import _debug from 'debug'
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin'
import LodashModuleReplacementPlugin from 'lodash-webpack-plugin'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const {__DEV__, __PROD__, __STANDALONE__, __TEST__, __PACKAGE__} = config.globals

const packageDir = `packages/${__PACKAGE__}`
const absolutePackagePath = paths.client(`${packageDir}/`)

const outputDir = absolutePackagePath + '/dist'
const testPlugins = []

debug('Create configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: __PROD__ ? 'source-map' : 'eval',
  resolve: {
    modules: [
      path.resolve(paths.client(), packageDir, 'src'),
      'node_modules',
      path.resolve(paths.client(), 'node_modules')
    ],
    alias: {
      'ReactDOM': `${__dirname}/../node_modules/react-dom/index.js`,
      'React': `${__dirname}/../node_modules/react/react.js`
    },
    extensions: ['.js', '.jsx', '.json']
  },
  performance: {
    hints: __PROD__ ? 'warning' : false
  },
  module: {}
}

if (!__TEST__) {
  webpackConfig.externals = {
    'react': 'React',
    'React': 'React',
    'react-dom': 'ReactDOM',
    'ReactDOM': 'ReactDOM'
  }
}

// ------------------------------------
// Entry Points
// ------------------------------------

const APP_ENTRY_PATH = paths.client(`${packageDir}/src/main.js`)

webpackConfig.entry = {
  app: __DEV__
    ? [APP_ENTRY_PATH, `webpack-hot-middleware/client?path=/__webpack_hmr`]
    : [APP_ENTRY_PATH]
}

// ------------------------------------
// Bundle Output
// ------------------------------------

webpackConfig.output = {
  filename: 'index.js',
  path: outputDir,
  libraryTarget: 'umd',
  publicPath: ''
}

// ------------------------------------
// Plugins
// ------------------------------------

webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals)
]

if (__PROD__) {
  // extract css from js and generate a separate file
  webpackConfig.plugins.push(
    new ExtractTextPlugin('index.css')
  )

  if (__PACKAGE__ !== 'tocco-theme') {
    // copy components scss files for recompilation
    // TODO ensure that all scss files reside inside a components directory
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        {
          context: `${packageDir}/src/components/`,
          from: '**/*.scss',
          flatten: true,
          to: 'scss'
        }
      ])
    )
  }

  // copy all assets of tocco's theme to dist folder
  if (__PACKAGE__ === 'tocco-theme') {
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        {
          context: `${packageDir}/src/ToccoTheme`,
          from: '**/*.scss'
        }
      ])
    )
  }
}

if (__DEV__) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: paths.client('server/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  )
}

if (__STANDALONE__) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: paths.client('server/standalone.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  )
}

// TODO combine all environment conditionals
if (__DEV__) {
  debug('Enable plugin for case-sensitive path check')
  webpackConfig.plugins.push(new CaseSensitivePathsPlugin())

  debug('Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
} else if (__PROD__) {
  webpackConfig.plugins.push(
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new LodashModuleReplacementPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        },
        output: {
          comments: false
        }
      })
    )
}

// see: https://github.com/karma-runner/karma-sauce-launcher/issues/95
if (!process || !process.env || !process.env.DISABLE_ISTANBUL_COVERAGE) {
  debug('Enable instanbul test plugin.')
  testPlugins.push(['istanbul', {
    'exclude': [
      '**/dev/**',
      '**/*/*.spec.js',
      '**/tocco-ui/**/example.js',
      '**/tocco-ui/dist'
    ]
  }])
}

webpackConfig.module.rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      plugins: [
        ['transform-imports', {
          'tocco-ui': {
            'transform': 'tocco-ui/src/${member}', // eslint-disable-line no-template-curly-in-string
            'preventFullImport': true
          },
          'tocco-util': {
            'transform': 'tocco-util/src/${member}', // eslint-disable-line no-template-curly-in-string
            'preventFullImport': true
          }
        }],
        'transform-runtime',
        'transform-flow-strip-types'
      ],
      presets: [
        ['es2015', { 'modules': false }],
        'react',
        'stage-0'
      ],
      env: {
        production: {
          plugins: [
            'transform-react-remove-prop-types',
            'transform-react-constant-elements'
          ]
        },
        development: {
          plugins: ['flow-react-proptypes'],
          presets: [
            'react-hmre'
          ]
        },
        test: {
          plugins: testPlugins
        }
      }
    }
  }
]

if (__DEV__) {
  // Run linting but only show errors as warning
  webpackConfig.module.rules.push(
    {
      test: /\.jsx?$/,
      enforce: 'pre',
      use: ['eslint-loader']
    }
  )

  webpackConfig.plugins.push(
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          emitWarning: true
        }
      }
    })
  )
}

// find all css files and integrate into index.js
webpackConfig.module.rules.push({
  test: /\.css$/,
  use: 'style-loader!css-loader'
})

// TODO remove "&& false" to separate css from js. Currently this would result in unstyled components.
if (__PROD__ && false ) {  // eslint-disable-line
  // find all scss files and separate it from index.js
  webpackConfig.module.rules.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(`css-loader!sass-loader?includePaths[]=${paths.client()}/packages/tocco-theme/node_modules/`)  // eslint-disable-line
  })
} else {
  // find all css files and integrate into index.js
  webpackConfig.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', `sass-loader?includePaths[]=${paths.client()}/packages/tocco-theme/node_modules/`]  // eslint-disable-line
  })
}

// File loaders
/* eslint-disable */
webpackConfig.module.rules.push(
  {
    test: /\.woff(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    use: 'file-loader?prefix=fonts/&name=[path][name].[ext]'
  },
  {
    test: /\.svg(\?.*)?$/,
    use: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(png|jpg)$/,
    use: 'file-loader?limit=8192'
  }
)
/* eslint-enable */

export default webpackConfig
