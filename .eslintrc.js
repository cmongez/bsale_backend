module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'es5',
  },
};
