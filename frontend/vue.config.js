module.exports = {
  configureWebpack: config => {
    config.devtool = 'source-map';
  },

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/variables/_core.scss";`,
      }
    }
  },
};
