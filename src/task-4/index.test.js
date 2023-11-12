const {createUser} = require('./index')
const {createAdmin} = require('./index')
const {getAdminKeys} = require('./index')

test('user object must be correct', () => {
	expect(createUser(23)).toStrictEqual({age: 23})
})

test('admin object must be correct', () => {
	expect(createAdmin({age: 23})).toStrictEqual({role: 'admin', age: 23})
})

test('average number for sequency from 1 to 50 is ', () => {
	expect(getAdminKeys({role: 'admin', age: 23})).toStrictEqual(['admin', 23])
})