const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

//put the cursor on the element
textarea.focus()

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value)

	if (e.key === 'enter') {
		setTimeout(() => {
			e.target.value = ''
		}, 10)
		randomSelect()
	}
})

function createTags(input) {
	// Take the item and split it at the comma, trim off any whitespace and remap it to a new array
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim())

	tagsEl.innerHTML = ''
	tags.forEach((tag) => {
		const tagEl = document.createElement('span')
		tagEl.classList.add('tag')
		tagEl.innerText = tag
		tagsEl.appendChild(tagEl)
	})
}

function randomSelect() {
	const times = 30

	const interval = setInterval(() => {
		const randomTag = pickRandomTag()

		highlightTag(randomTag)

		setTimeout(() => {
			unhighlightTag(randomTag)
		}, 100)
	}, 100)
}

function pickRandomTag() {
	const tags = document.querySelectorAll('.tag')
	return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
	tag.classList.add('highlight')
}

function unhighlightTag(tag) {
	tag.classList.remove('highlight')
}
//Take in what we type in, and split with the comma and create an array of the values
