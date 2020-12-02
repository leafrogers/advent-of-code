module.exports = {
	env: {
		es2021: true,
		mocha: true,
		node: true
	},
	extends: [
		'airbnb-base'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	rules: {
		'array-callback-return': 0,
		'arrow-body-style': 0,
		'comma-dangle': 0,
		'consistent-return': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'no-restricted-syntax': 0,
		'no-tabs': 0,
		indent: ['error', 'tab']
	}
};
