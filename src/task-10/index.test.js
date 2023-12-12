import {isDate, isEmail, isPhoneNumber} from './index.js'
test('isDate test on string 25.10.2022 return true', () => {
	expect(isDate('25.10.2022')).toBe(true)
})
test('isEmail test on string test@gmail.com return true', () => {
	expect(isEmail('test@gmail.com')).toBe(true)
})

test('isPhoneNumber test on string 8-800-555-35-35 return true', () => {
	expect(isPhoneNumber('8-800-555-35-35')).toBe(true)
})

test('isPhoneNumber test on string +7-800-555-35-35 return true', () => {
	expect(isPhoneNumber('+7-800-555-35-35')).toBe(true)
})