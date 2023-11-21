const getIntegersSum = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2)) {
		throw new TypeError('One of arguments is not a number')
	}
	let sum = 0
	for (let i = num1; i < num2; i++) {
		sum +=i
	}
	return sum
}

const getNumMultiplicationTable = (num) => {
	if (isNaN(num)) {
		throw new TypeError('Argument is not a number')
	}
	const result = []
	for (let i = 1; i < 10; i++) {
		result.push(num * i)
	}
	return result
}

const getAverageNum = (num) => {
	if (isNaN(num)) {
		throw new TypeError('Argument is not a number')
	}
	return Math.floor((num + 1) / 2)
}

export { getIntegersSum, getNumMultiplicationTable, getAverageNum }