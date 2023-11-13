module.exports = {
	'root': true,
	'env': {
		'es2020': true,
		'node': true,
		'commonjs': true,
		'es6': true,
		'jest': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': '2018'
	},
	'rules': {
		'indent': [
			'warn',
			'tab',
			{ 'SwitchCase': 1 }
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'error',
			'never'
		],
		'no-var': [
			'error'
		],
		'no-unused-vars': [
			'warn'
		],
		'no-mixed-spaces-and-tabs': [
			'warn'
		],
		'no-loss-of-precision': 'off'
	}
}