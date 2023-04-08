module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 extends: ['airbnb-base', 'plugin:prettier/recommended'],
 parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 rules: {
  'prettier/prettier': 'error',
  'import/no-extraneous-dependencies': 'off',
  indent: ['error', 2],
 },
};
