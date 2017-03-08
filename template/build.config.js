const webpack = require.main.require('webpack')
const {name, version} = require('./package.json')

module.exports = {
  html: process.env.NODE_ENV === 'development', // generate html only for development
  webpack: {
    devtool: false, // disable source-map
    output: {
      filename: kebabCase(name) + '.js', // my-component.js
      library: camelCase(name) // MyComponent
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version) // adds MyComponent.version
      })
    ]
  }
}

// utils

// converts MyComponent to my-component
function kebabCase (s) {
  return s.replace(/([A-Z])([^A-Z\-])/g, (_, a, b) => `-${a}${b}`)
          .toLowerCase()
          .replace(/[\s_-]+/g, '-')
          .replace(/(^\W)|(\W$)/g, '')
}

// converts my-component to MyComponent
function camelCase (s) {
  return s.replace(/([\-_\s]+[a-z])|(^[a-z])/g, $1 => $1.toUpperCase())
          .replace(/[\-_\s]+/g, '')
}
