const path = require('path')
module.exports = {
  configureWebpack: (config) => {
    // if (process.env.NODE_ENV === 'production') {
    //     // 为生产环境修改配置...
    //     config.mode = 'production'
    // } else {
    //     // 为开发环境修改配置...
    //     config.mode = 'development'
    // }
    Object.assign(config, {
        // 开发生产共同配置
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@ui': path.resolve(__dirname, './src/components/ui'),
                '@views': path.resolve(__dirname, './src/views')
            } // 别名配置
        }
    })
  },
  devServer: {
    open: process.platform === 'darwin', // 开发环境检测darwin系统打开默认浏览器
    host: '0.0.0.0', // 允许外部ip访问
    port: 8282,
    https: false, // 是否启用https
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://api.rozwel.club',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // css: {
  //   // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //   // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
  //   extract: true,

  //   // 是否开启 CSS source map？
  //   sourceMap: false,

  //   // 为预处理器的 loader 传递自定义选项。比如传递给
  //   // sass-loader 时，使用 `{ sass: { ... } }`。
  //   loaderOptions: {
  //       sass: {
  //       // data: fs.readFileSync('src/assets/theme/index.scss', 'utf-8')
  //           // data:`@import "@/assets/scss/const.scss";` // 配置公共样式scss
  //       },
  //   },
  // }
}
