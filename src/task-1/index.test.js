const {getNumSum} = require('./index')
const {getStrLengths} = require('./index')
const {getDigitsSum} = require('./index')

test('adds 1 + 2 to equal 3', () => {
	expect(getNumSum(1, 2)).toBe(3)
})

test('str1 and str2 must return 7', () => {
	expect(getStrLengths('abc', 'abcd')).toBe(7)
})

test('sum of digits for number 123 must return 6', () => {
	expect(getDigitsSum(123)).toBe(6)
})