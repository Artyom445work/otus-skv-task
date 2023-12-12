const paragraphsProcess = (el) => {
	const input = document.createElement('input')
	el.append(input)

	const button = document.createElement('button')
	button.innerHTML = 'Add'
	button.hidden = true
	el.append(button)

	const p1 = document.createElement('p')
	const p2 = document.createElement('p')
	const p3 = document.createElement('p')

	el.append(p1)
	el.append(p2)
	el.append(p3)

	p1.innerHTML = 'First paragraph'
	p2.innerHTML = 'Second paragraph'
	p3.innerHTML = 'Third paragraph'

	input.addEventListener('input', () => {
		button.hidden = Boolean(!input.value.length)
	})

	button.addEventListener('click', () => {
		let newParagraph = document.createElement('p')
		el.append(newParagraph)
		newParagraph.innerHTML = input.value
		input.value = ''
		button.hidden = true
		const paragraphs = el.querySelectorAll('p')
		if (paragraphs.length > 5) {
			paragraphs[0].remove()
		}
	})
}

export { paragraphsProcess }