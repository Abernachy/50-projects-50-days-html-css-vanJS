//querySelectorAll puts all the items with the classname in a node list, basically an array.

const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		//We first want to remove any existing active classes
		removeActiveClass()

		//Adds the 'active' class to the one clicked
		panel.classList.add('active')
	})
})

const removeActiveClass = () => {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}
