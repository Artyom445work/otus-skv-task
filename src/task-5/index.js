const getElementsSum = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('Argument is not an array')
	}
	if (arr.length !== 10) {
		throw new Error('Array length must be 10')
	}
	return arr.reduce((acc, value) => {
		return acc + value
	}, 0)
}

const getDoubledElements = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('Argument is not an array')
	}
	return arr.map(value => value * 2)
}

const getMinMaxElements = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('Argument is not an array')
	}
	return [Math.min(...arr), Math.max(...arr)]
}

export { getElementsSum, getDoubledElements, getMinMaxElements }