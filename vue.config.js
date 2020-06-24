module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'data/' : '/',
  outputDir: process.env.VUE_APP_DIST === 'qa' ? 'qa' : 'dist',
  transpileDependencies: ['vuex-persist'],
  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          'node_modules/breakpoint-sass/stylesheets',
          'node_modules/susy/sass'
        ]
      }
    }
  }
}
