const path = require('path')

module.exports = {
  entry: './pkg/ai.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ai.js',
    library: 'ai',
    libraryTarget: 'umd',
    publicPath: '/ai/dist/',
  },
  mode: 'development',
}
