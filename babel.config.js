module.exports = {
  presets: [
    ['@vue/app', {
    polyfills: [
      'es6.promise',
      'es6.object.assign',
      'es6.array.iterator'
    ]
    }]
  ]
}
