module.exports = {
    env: {
        browser: true,
        es6    : true,
        node   : true,
        mocha  : true,
    },
    globals: {
        Atomics          : 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType : 'module',
    },
    plugins: [
        'import',
        'promise',
    ],
    'extends': [
        './src/base.js',
        './src/es6.js',
        './src/node.js',
        './src/promise.js',
        './src/import.js',
    ].map(require.resolve),
    rules: {},
};
