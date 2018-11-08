module.exports = {
  baseUrl: './',
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
