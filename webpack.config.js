const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: {
      main: path.join(__dirname, 'src','index.js'),
    },
    output: {
      path: path.join(__dirname, 'test'),
        filename: 'bundle.js',
      },
  };