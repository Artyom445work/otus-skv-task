import {createUser, createAdmin, getAdminKeys} from './index'

test('createUser function with param 23 must return object {age: 23}', () => {
	expect(createUser(23)).toStrictEqual({age: 23})
})

test('createAdmin function with param {age: 23} must return object {role: \'admin\', age: 23}', () => {
	expect(createAdmin({age: 23})).toStrictEqual({role: 'admin', age: 23})
})

test('getAdminKeys function for object {role: \'admin\', age: 23} must return [\'admin\', 23]', () => {
	expect(getAdminKeys({role: 'admin', age: 23})).toStrictEqual(['role', 'age'])
})