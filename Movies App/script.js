const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4997a68c032d7511f303d617cd8640b8&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w500'

const SEARCH_URL =
	'https://api.themoviedb.org/3/search/movie?api_key=4997a68c032d7511f303d617cd8640b8&page=1&query="'

const form = document.getElementById('form')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	console.log(data.results)
}
