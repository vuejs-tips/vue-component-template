const webpack = require.main.require('webpack')
const {name, version} = require('./package.json')

module.exports = {
  html: false,
  webpack: {
    devtool: false, // disable source-map
    output: {
      filename: kebabCase(name) + '.js',
      library: camelCase(name)
    },
    plugins: [
      new webpack.DefinePlugin({
        'proccess.env.VERSION': JSON.stringify(version)
      })
    ]
  }
}

function kebabCase (s) {
  return s.replace(/\W+/, '-').replace(/([A-Z])/g, m => '-' + m.toLowerCase())
}

function camelCase (s) {
  return s.replace(/(\-[a-z])|(^[a-z])/g, $1 => $1.toUpperCase().replace('-',''))
}
