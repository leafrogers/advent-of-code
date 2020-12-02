module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
	'arrow-body-style': 0,
	'comma-dangle': 0,
	'indent': ['error', 'tab'],
	'max-len': 0,
	'no-console': 0,
	'no-param-reassign': 0,
	'no-restricted-syntax': 0,
	'no-tabs': 0,
	'no-use-before-define': 0
  }
};
