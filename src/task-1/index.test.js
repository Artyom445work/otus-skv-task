const {numSum} = require('./index')
const {strLengths} = require('./index')
const {digitsSum} = require('./index')

test('adds 1 + 2 to equal 3', () => {
	expect(numSum(1, 2)).toBe(3)
})

test('str1 and str2 must return 7', () => {
	expect(strLengths('abc', 'abcd')).toBe(7)
})

test('sum of digits for number 123 must return 6', () => {
	expect(digitsSum(123)).toBe(6)
})