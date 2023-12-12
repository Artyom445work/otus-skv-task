module.exports = {
	'root': true,
	'env': {
		'browser': true,
		'es2020': true,
		'node': true,
		'commonjs': true,
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
		'no-mixed-spaces-and-tabs': [
			'warn'
		],
		'no-loss-of-precision': 'off'
	},
	overrides: [
		{
			files: ['.eslintrc.js', 'babel.config.js', 'jest.config.js'],
			env: {
				node: true, // Apply Node environment specifically for ESLint config
			},
		},
	]
}