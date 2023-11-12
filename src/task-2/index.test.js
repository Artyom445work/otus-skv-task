const {greatestNum} = require('./index')
const {getMonthName} = require('./index')
const {isCircleInSquare} = require('./index')

test('100 greatest than 10', () => {
	expect(greatestNum(10, 100)).toBe(100)
})

test('9 month is сентябрь', () => {
	expect(getMonthName(9)).toBe('сентябрь')
})

test('circle 6 in square 16', () => {
	expect(isCircleInSquare(6, 16)).toBe(true)
})