const {getElementsSum} = require('./index')
const {getDoubledElements} = require('./index')
const {getMinMaxElements} = require('./index')

test('sum of array of 10 elements is 122', () => {
	expect(getElementsSum([3, 6, 7, 8, 9, 11, 12, 13, 32, 21])).toBe(122)
})

test('doubled array for array [3, 7] is [6, 14]', () => {
	expect(getDoubledElements([3, 7])).toStrictEqual([6, 14])
})

test('min and max elements from array [3, 7, 4, 5, 6, 11] is [3, 11]', () => {
	expect(getMinMaxElements([3, 7, 4, 5, 6, 11])).toStrictEqual([3, 11])
})