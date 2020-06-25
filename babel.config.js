module.exports = {
  presets: [
    ['@vue/app', {
    polyfills: [
      'es.promise',
      'es.object.assign',
      'es.array.iterator'
    ]
    }]
  ]
}
