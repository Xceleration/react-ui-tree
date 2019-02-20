const createUID = () => {
  let array = new Uint32Array(8);
  const crypto = window.crypto || window.msCrypto;
  crypto.getRandomValues(array);
  let str = '';
  for (let i = 0; i < array.length; i++) {
    str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4);
  }
  return str.toUpperCase();
};

module.exports = {
  module: 'react-ui-tree',
  children: [
    {
      id: createUID(),
      draggable: false,
      module: 'dist',
      collapsed: true,
      children: [
        {
          id: createUID(),
          module: 'node.js',
          leaf: true
        },
        {
          id: createUID(),
          module: 'react-ui-tree.css',
          leaf: true
        },
        {
          id: createUID(),
          module: 'react-ui-tree.js',
          leaf: true
        },
        {
          id: createUID(),
          module: 'tree.js',
          leaf: true
        }
      ]
    },
    {
      id: createUID(),
      module: 'example',
      children: [
        {
          id: createUID(),
          module: 'app.js',
          leaf: true
        },
        {
          id: createUID(),
          module: 'app.less',
          leaf: true
        },
        {
          id: createUID(),
          module: 'index.html',
          leaf: true
        }
      ]
    },
    {
      id: createUID(),
      module: 'lib',
      children: [
        {
          id: createUID(),
          module: 'node.js',
          leaf: true
        },
        {
          id: createUID(),
          module: 'react-ui-tree.js',
          leaf: true
        },
        {
          id: createUID(),
          module: 'react-ui-tree.less',
          leaf: true
        },
        {
          id: createUID(),
          module: 'tree.js',
          leaf: true
        }
      ]
    },
    {
      id: createUID(),
      module: '.gitiignore',
      leaf: true
    },
    {
      id: createUID(),
      module: 'index.js',
      leaf: true
    },
    {
      id: createUID(),
      module: 'LICENSE',
      leaf: true
    },
    {
      id: createUID(),
      module: 'Makefile',
      leaf: true
    },
    {
      id: createUID(),
      module: 'package.json',
      leaf: true
    },
    {
      id: createUID(),
      draggable: false,
      module: 'README.md',
      leaf: true
    },
    {
      id: createUID(),
      module: 'webpack.config.js',
      leaf: true
    }
  ]
};
