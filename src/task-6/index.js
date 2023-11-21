const getDiff = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2)) {
		throw new Error('One of arguments is not a number')
	}
	return Math.abs(num1 - num2)
}

const isWord = (str) => {
	if (typeof (str) !== 'string') {
		throw new TypeError('Argument is not a string')
	}
	if (str === '') {
		throw new Error('String is empty')
	}
	return str.split(' ').length === 1
}

const getPow = (a, x) => {
	if (isNaN(a) || isNaN(x)) {
		throw new Error('One of arguments is not a number')
	}
	return a ** x
}

export { getDiff, isWord, getPow }