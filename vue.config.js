const webpack = require('webpack')
const pkg = require('./package.json')

const CI = process.env.CI !== 'action'

module.exports = {
  publicPath: '.',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html'
    },
    lyrice: {
      entry: 'src/electron/pages/index.ts',
      template: 'public/index.html'
    }
  },
  devServer: {
    progress: CI,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(pkg.version),
        GIT_URL: JSON.stringify(pkg.repository.url)
      })
    ]
  },
  chainWebpack: config => {
    if (process.env.ANALYZER === 'analyzer') {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

    // https://github.com/vuejs/vue-cli/issues/1729#issuecomment-402217659
    config.plugin('html-index').tap(args => {
      args[0].title = 'music'
      return args
    })

    config.module
      .rule('images')
      .test(/.png|jpg|gif$/)
      .use('url-loader')

    config.module
      .rule('fonts')
      .test(/.otf|ttf$/)
      .use('url-loader')

    config.resolve.extensions.add('less').add('css')
    config.target(
      process.env.VUE_APP_PLATFORM === 'electron' ? 'electron-renderer' : 'web'
    )
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessFile: 'src/electron/main.ts',
      outputDir: 'dist-electron',
      builderOptions: {
        publish: [
          { provider: 'github', owner: 'Linkontoask', repo: 'radishes' }
        ],
        artifactName: pkg.name + '.Setup.' + '${version}.${ext}'
      }
    }
  }
}
