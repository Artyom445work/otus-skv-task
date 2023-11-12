const {elementsSum} = require('./index')
const {doubleElements} = require('./index')
const {minMaxElements} = require('./index')

test('sum of array of 10 elements is', () => {
	expect(elementsSum([3, 6, 7, 8, 9, 11, 12, 13, 32, 21])).toBe(122)
})

test('doubled array for array [3, 7] is', () => {
	expect(doubleElements([3, 7])).toStrictEqual([6, 14])
})

test('min and max elements from array [3, 7, 4, 5, 6, 11] is ', () => {
	expect(minMaxElements([3, 7, 4, 5, 6, 11])).toStrictEqual([3, 11])
})