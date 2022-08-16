const path = require('path');

module.exports = {
    // watch: true,
    mode: 'production',
    entry: {
      main: path.join(__dirname, 'src','index.js'),
    },
    output: {
        filename: 'bundle.js',
      },
  };