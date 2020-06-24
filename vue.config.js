const webpack = require('webpack')
module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
  productionSourceMap: false,

  //允许我们更细粒度的控制 webpack 的内部配置,例如：以下操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M
  // chainWebpack: config => {
  //   config.module.rule("images")
  //     .use("url-loader")
  //     .tap(options =>
  //       merge(options, {
  //         limit: 5120
  //       }));
  // },
  //可以在正式环境下关闭错误报告 console.log...
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, //热加载
    host: '0.0.0.0', //ip地址
    port: 1111, //端口
    https: false, //false关闭https，true为开启
    open: true, //自动打开浏览器
    // proxy: {
    //   '/loginRegist': {
    //     target: 'http://218.245.1.134:8082/loginRegist',
    //     // 登录注册
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/loginRegist': '/'
    //     },
    //   },
    //   '/institutionCenter': {
    //     target: 'http://218.245.1.134:8082/institutionCenter',
    //     // 机构资料
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/institutionCenter': '/'
    //     },
    //   },
    //   '/data_manager': {
    //     target: 'http://218.245.1.134:8082/data_manager',
    //     // 数据管理
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/data_manager': '/'
    //     },
    //   },
    //   '/wpay': {
    //     target: 'http://218.245.1.134:8082/wpay',
    //     // 订单支付
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/wpay': '/'
    //     },
    //   },
    //   '/healthy': {
    //     target: 'http://218.245.1.134:8082/healthy',
    //     // 订单支付
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/healthy': '/'
    //     },
    //   },
    //   '/work_manager': {
    //     target: 'http://218.245.1.134:8082/work_manager',
    //     // 订单支付
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/work_manager': '/'
    //     },
    //   },
    //   '/finance': {
    //     target: 'http://218.245.1.134:8082/finance',
    //     // 订单支付
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/finance': '/'
    //     },
    //   },
    //   '/question': {
    //     target: 'http://218.245.1.134:8082/question',
    //     // 订单支付
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/question': '/'
    //     },
    //   },
    // }
  },
  pluginOptions: { // 第三方插件配置
    // ...
  },
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}