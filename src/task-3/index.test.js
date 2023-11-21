import {getIntegersSum, getNumMultiplicationTable, getAverageNum} from './index'

test('sum of integers from 50 to 100 is 3725', () => {
	expect(getIntegersSum(50, 100)).toBe(3725)
})

test('multiplication table for 7 is [7, 14, 21, 28, 35, 42, 49, 56, 63]', () => {
	expect(getNumMultiplicationTable(7)).toStrictEqual([7, 14, 21, 28, 35, 42, 49, 56, 63])
})

test('average number for sequency from 1 to 50 is 25', () => {
	expect(getAverageNum(50)).toStrictEqual(25)
})

test('average number for sequency from 1 to 15267 is 7634', () => {
	expect(getAverageNum(15267)).toStrictEqual(7634)
})