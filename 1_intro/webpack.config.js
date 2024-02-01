const path = require('path');

module.exports = {
  entry: './test.js',                // por padrao é o index.js a menos que seja declarado outro path
  output : {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  }
}