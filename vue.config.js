module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'data/' : '/',
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
