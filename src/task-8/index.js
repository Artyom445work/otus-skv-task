const getDayOfweek = (dateString) => {
	if (typeof (dateString) !== 'string') {
		throw new TypeError('Argument is not a string')
	}
	const daysOfweek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
	const [day, month, year] = dateString.split('.')
	const date = new Date(`${year}-${month}-${day}`)
	return daysOfweek[date.getDay()]
}

const getMinutesFromDayBeginning = () => {
	const currentDate = new Date()
	return currentDate.getHours() * 60 + currentDate.getMinutes()
}

const getYoungerUser = (firstUserStringDate, secondUserStringDate) => {
	if (typeof (firstUserStringDate) !== 'string' || typeof (secondUserStringDate) !== 'string') {
		throw new TypeError('One of arguments is not a string')
	}
	const [firstUserDay, firstUserMonth, firstUserYear] = firstUserStringDate.split('.')
	const [secondUserDay, secondUserMonth, secondUserYear] = secondUserStringDate.split('.')

	const firstUserDate = new Date(`${firstUserYear}-${firstUserMonth}-${firstUserDay}`)
	const secondUserDate = new Date(`${secondUserYear}-${secondUserMonth}-${secondUserDay}`)

	return firstUserDate > secondUserDate ? firstUserStringDate : secondUserStringDate
}

export { getDayOfweek, getMinutesFromDayBeginning, getYoungerUser }