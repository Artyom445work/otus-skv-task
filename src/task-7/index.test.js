import {paragraphsProcess} from './index.js'

describe('paragraphsProcess tests', () => {
	let el
	beforeEach(() => {
		el = document.createElement('div')
	})

	it('is a function test', () => {
		expect(paragraphsProcess).toBeInstanceOf(Function)
	})

	it('initial markup test', () => {
		paragraphsProcess(el)

		expect(el.querySelector('input')).toBeTruthy()
		expect(el.querySelector('button').innerHTML).toBe('Add')
		expect(el.querySelector('button').hidden).toBe(true)
		expect(el.querySelectorAll('p').length).toBe(3)
	})

	it('hidden or shown button test', () => {
		paragraphsProcess(el)

		// shown button
		el.querySelector('input').value = 'test'
		el.querySelector('input').dispatchEvent(new Event('input'))
		expect(el.querySelector('button').hidden).toBe(false)

		// hidden button
		el.querySelector('input').value = ''
		el.querySelector('input').dispatchEvent(new Event('input'))
		expect(el.querySelector('button').hidden).toBe(true)
	})

	it('press on the button creates new paragraph with text from the input test', () => {
		paragraphsProcess(el)

		el.querySelector('input').value = 'test'
		el.querySelector('button').dispatchEvent(new Event('click'))

		const paragraphsValues = [...el.querySelectorAll('p')].map(paragraph => paragraph.innerHTML)
		expect(paragraphsValues[paragraphsValues.length - 1]).toBe('test')
	})

	it('if paragraphs count > 5 first paragraph removes test', () => {
		paragraphsProcess(el)

		el.querySelector('input').value = 'test1'
		el.querySelector('button').dispatchEvent(new Event('click'))
		el.querySelector('input').value = 'test2'
		el.querySelector('button').dispatchEvent(new Event('click'))
		el.querySelector('input').value = 'test3'
		el.querySelector('button').dispatchEvent(new Event('click'))

		const paragraphsValues = [...el.querySelectorAll('p')].map(paragraph => paragraph.innerHTML)
		expect(paragraphsValues[0]).toBe('Second paragraph')
	})
})