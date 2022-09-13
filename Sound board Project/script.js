// Create an Array of the sounds
let audioSounds = document.querySelectorAll('audio')

audioSounds.forEach((item, index) => {
	let soundName = item.id
	const btn = document.createElement('button')
	btn.classList.add('btn')
	btn.innerText = soundName
	btn.addEventListener('click', () => {
		stopSongs()
		document.getElementById(soundName).play()
	})
	document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
	audioSounds.forEach((sound) => {
		const song = document.getElementById(sound.id)

		song.pause()
		song.currentTime = 0
	})
}
