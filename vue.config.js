module.exports = {
    chainWebpack: config => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        config.module
          .rule('images')
          .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
          .use('url-loader')
          .loader('url-loader')
          .tap(options => options);
    }
  }