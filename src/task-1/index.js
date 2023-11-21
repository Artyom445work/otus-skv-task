const getNumSum = (a, b) => {
	if (isNaN(a) || isNaN(b)) {
		throw new Error('One of arguments is not a number')
	}
	return a + b
}

const getStrLengths = (str1, str2) => {
	if (typeof (str1) !== 'string' || typeof (str2) !== 'string') {
		throw new TypeError('One of arguments is not a string')
	}
	return str1.length + str2.length
}

const getDigitsSum = (threeDigitNum) => {
	const threeDigitNumStr = threeDigitNum.toString()
	if (threeDigitNumStr.length !== 3) {
		throw new Error('Number length is not 3')
	}
	return threeDigitNumStr.split('').reduce((acc, value) => {
		return acc + parseInt(value)
	}, 0)
}

export { getNumSum, getStrLengths, getDigitsSum }