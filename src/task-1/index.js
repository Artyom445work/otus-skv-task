const numSum = (a, b) => {
	if (isNaN(a) || isNaN(b)) {
		throw new TypeError('One of arguments is not a number')
	}
	return a + b
}

const strLengths = (str1, str2) => {
	if (typeof (str1) !== 'string' || typeof (str2) !== 'string') {
		throw new TypeError('One of arguments is not a string')
	}
	return str1.length + str2.length
}

const digitsSum = (threeDigitNum) => {
	if (threeDigitNum.toString().length !== 3) {
		throw new Error('Number length is not 3')
	}
	return threeDigitNum.toString().split('').reduce((acc, value) => {
		return acc + parseInt(value)
	}, 0)
}

module.exports = { numSum, strLengths, digitsSum }