module.exports = {
  baseUrl: 'data/',
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
