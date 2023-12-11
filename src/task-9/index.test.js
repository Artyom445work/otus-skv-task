import {isRightTriangle, getCircumferenceAndCircleArea, getQuadraticEquationRoots} from './index.js'
test('isRightTriangle test on legs 3 and 4 and hypotenuse 5 must return true', () => {
	expect(isRightTriangle(3, 4, 5)).toBe(true)
})

test('isRightTriangle test on legs 3 and 4 and hypotenuse 6 must return true', () => {
	expect(isRightTriangle(3, 4, 6)).toBe(false)
})

test('getCircumferenceAndCircleArea test on radius = 5 must return [31.41592653589793, 78.53981633974483]', () => {
	expect(getCircumferenceAndCircleArea(5)).toStrictEqual([31.41592653589793, 78.53981633974483])
})

test('getQuadraticEquationRoots test on a = 1, b = 4, c = 3 must return [-1, -3]', () => {
	expect(getQuadraticEquationRoots(1, 4, 3)).toStrictEqual([-1, -3])
})

test('getQuadraticEquationRoots test on a = 5, b = 0, c = -125 must return [-5, 5]', () => {
	expect(getQuadraticEquationRoots(5, 0, -125)).toStrictEqual([-5, 5])
})

test('getQuadraticEquationRoots test on a = 5, b = 0, c = 125 must return [-5, 5]', () => {
	expect(getQuadraticEquationRoots(5, 0, 125)).toStrictEqual(null)
})

test('getQuadraticEquationRoots test on a = 5, b = 0, c = 0 must return [0]', () => {
	expect(getQuadraticEquationRoots(5, 0, 0)).toStrictEqual([0])
})

test('getQuadraticEquationRoots test on a = 0, b = 3, c = 0 must return [0]', () => {
	expect(() => getQuadraticEquationRoots(0, 3, 0)).toThrow(Error)
})