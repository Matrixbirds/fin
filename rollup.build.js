export default {
  entry: 'src/main.js',
  dest: 'index.js',
  format: 'umd',
  sourceMap: 'inline',
  output: {
      name: 'bundle.min.js',
      globals: {
          'events': 'EventEmitter',
          'socket.io': 'io'
      }
  }
};
