module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'indent': ['error', 4],
    // 'quotes': [
    //     'error',
    //     'double'
    // ],
    // 'semi': [
    //     'error',
    //     'always'
    // ],
    // 'space-before-function-paren': [
    //     'error',
    //     'never'
    // ],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
