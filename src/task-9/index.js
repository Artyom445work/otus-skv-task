const isRightTriangle = (firstLeg, secondLeg, hypotenuse) => {
	if (isNaN(firstLeg) || isNaN(secondLeg) || isNaN(hypotenuse)) {
		throw new Error('One of arguments is not a number')
	}
	return firstLeg ** 2 + secondLeg ** 2 === hypotenuse ** 2
}

const getCircumferenceAndCircleArea = (radius) => {
	return [2 * Math.PI * radius, Math.PI * radius ** 2]
}

const getQuadraticEquationRoots = (a, b, c) => {
	if (a === 0) {
		throw new Error('Is not a quadratic equation')
	}
	if (b === 0 && c > 0) {
		return null
	}
	if (b === 0 && c < 0) {
		const squareRoot = Math.sqrt(-c / a)
		return [
			-squareRoot,
			squareRoot
		]
	}
	const descriminant = b ** 2 - 4 * a * c
	if (descriminant < 0) {
		return null
	} else if (descriminant === 0) {
		return [(-b + Math.sqrt(descriminant)) / (2 * a)]
	} else {
		return [
			(-b + Math.sqrt(descriminant)) / (2 * a),
			(-b - Math.sqrt(descriminant)) / (2 * a)
		]
	}
}

export { isRightTriangle, getCircumferenceAndCircleArea, getQuadraticEquationRoots }