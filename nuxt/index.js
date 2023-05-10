import path from 'path';

module.exports = function vueTypedReactive () {
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    fileName: 'vue-typed-reactive.js'
  });
}

module.exports.meta = require('../package.json');
