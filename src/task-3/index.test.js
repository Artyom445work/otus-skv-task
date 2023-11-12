const {integersSum} = require('./index')
const {multiplicationTable} = require('./index')
const {averageNum} = require('./index')

test('sum of integers from 50 to 100 is', () => {
	expect(integersSum(50, 100)).toBe(3725)
})

test('multiplication table for 7 is [7, 14, 21, 28, 35, 42, 49, 56, 63]', () => {
	expect(multiplicationTable(7)).toStrictEqual([7, 14, 21, 28, 35, 42, 49, 56, 63])
})

test('average number for sequency from 1 to 50 is ', () => {
	expect(averageNum(50)).toStrictEqual(25)
})