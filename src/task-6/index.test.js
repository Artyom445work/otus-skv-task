const {getDiff} = require('./index')
const {isWord} = require('./index')
const {getPow} = require('./index')

test('getDiff between 13 and 25 is 12', () => {
	expect(getDiff(13, 25)).toBe(12)
})

test('string \'hello world\' not consists of 1 word, must return \'false\'', () => {
	expect(isWord('hello world')).toStrictEqual(false)
})

test('2 in pow 10 is 1024', () => {
	expect(getPow(2, 10)).toStrictEqual(1024)
})