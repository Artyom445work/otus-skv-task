const isDate = (str) => {
	if (typeof (str) !== 'string') {
		throw new TypeError('Argument is not a string')
	}
	const regex = /^(0?[1-9]|[12][0-9]|3[01])[.-](0?[1-9]|1[012])[.-]\d{4}$/
	return regex.test(str)
}

const isEmail = (str) => {
	if (typeof (str) !== 'string') {
		throw new TypeError('Argument is not a string')
	}
	const regex = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/
	return regex.test(str)
}

const isPhoneNumber = (str) => {
	if (typeof (str) !== 'string') {
		throw new TypeError('Argument is not a string')
	}
	const regex = /(8|\+7)-[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/
	return regex.test(str)
}

export { isDate, isEmail, isPhoneNumber }