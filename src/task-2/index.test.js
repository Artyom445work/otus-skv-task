const {getGreatestNum} = require('./index')
const {getMonthName} = require('./index')
const {isCircleInSquare} = require('./index')

test('100 greatest than 10 must return 100', () => {
	expect(getGreatestNum(10, 100)).toBe(100)
})

test('9999999999999999 greatest than 9999999999999998 must return TypeError', () => {
	expect(() => getGreatestNum(9999999999999999, 9999999999999998)).toThrow(TypeError)
})

test('9 month is сентябрь', () => {
	expect(getMonthName(9)).toBe('сентябрь')
})

test('circle 6 in square 16', () => {
	expect(isCircleInSquare(6, 16)).toBe(true)
})