const {diff} = require('./index')
const {isWord} = require('./index')
const {pow} = require('./index')

test('diff between 13 and 25 is', () => {
	expect(diff(13, 25)).toBe(12)
})

test('string \'hello world\' consists of 1 word?', () => {
	expect(isWord('hello world')).toStrictEqual(false)
})

test('2 in pow 10 is', () => {
	expect(pow(2, 10)).toStrictEqual(1024)
})