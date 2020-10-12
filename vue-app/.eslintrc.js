// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es6': true,
    },
    'extends': [
        'google',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'parser': 'babel-eslint',
    },
    'plugins': [
        'vue',
    ],
    'rules': {
        'indent': ['error', 4],
    },
};
