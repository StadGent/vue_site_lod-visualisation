module.exports = {
  presets: [
    ['@vue/cli-plugin-babel/preset', {
    polyfills: [
      'es.promise',
      'es.object.assign',
      'es.array.iterator'
    ]
    }]
  ]
}
