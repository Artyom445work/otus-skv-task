const getGreatestNum = (num1, num2) => {
	if (isNaN(num1) || isNaN(num2)) {
		throw new TypeError('One of arguments is not a number')
	}
	if (Math.abs(num1) >  Number.MAX_SAFE_INTEGER || Math.abs(num2) >  Number.MAX_SAFE_INTEGER) {
		throw new TypeError('Max size of the type \'Number\' has been exceeded')
	}
	return Math.max(num1, num2)
}

const getMonthName = (monthNum) => {
	if (!monthNum || monthNum > 12) {
		throw new Error('monthNum is 0 or greater than 12')
	}
	switch (monthNum) {
		case 1:
			return 'январь'
		case 2:
			return 'февраль'
		case 3:
			return 'март'
		case 4:
			return 'апрель'
		case 5:
			return 'май'
		case 6:
			return 'июнь'
		case 7:
			return 'июль'
		case 8:
			return 'август'
		case 9:
			return 'сентябрь'
		case 10:
			return 'октябрь'
		case 11:
			return 'ноябрь'
		case 12:
			return 'декабрь'
	}
}

const isCircleInSquare = (circle, square) => {
	if (isNaN(circle) || isNaN(square)) {
		throw new TypeError('One of arguments is not a number')
	}
	const circleRadius = Math.sqrt(circle / Math.PI)
	const squareLine = Math.sqrt(square)
	return circleRadius * 2 <= squareLine
}

module.exports = { getGreatestNum, getMonthName, isCircleInSquare }