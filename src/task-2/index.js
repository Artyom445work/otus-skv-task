const getGreatestNum = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2)) {
		throw new TypeError('One of arguments is not a number')
	}
	if (Math.abs(num1) >  Number.MAX_SAFE_INTEGER || Math.abs(num2) >  Number.MAX_SAFE_INTEGER) {
		throw new Error('Max size of the type \'Number\' has been exceeded')
	}
	return Math.max(num1, num2)
}

const getMonthName = (monthNum) => {
	if (!monthNum || monthNum > 12) {
		throw new Error('monthNum is 0 or greater than 12')
	}
	const monthNames = [
		'январь', 'февраль', 'март', 'апрель',
		'май', 'июнь', 'июль', 'август',
		'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
	]
	return monthNames[monthNum - 1]
}

const isCircleInSquare = (circle, square) => {
	if (isNaN(circle) || isNaN(square)) {
		throw new TypeError('One of arguments is not a number')
	}
	const circleRadius = Math.sqrt(circle / Math.PI)
	const squareLine = Math.sqrt(square)
	return circleRadius * 2 <= squareLine
}

export { getGreatestNum, getMonthName, isCircleInSquare }