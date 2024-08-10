const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export async function fetchTopMovies(language: string) {
	const response = await fetch(
		`${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${language}`
	);
	const data = await response.json();
	return data.results;
}

export async function fetchTopTVShows(language: string) {
	const response = await fetch(
		`${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=${language}`
	);
	const data = await response.json();
	return data.results;
}

export async function searchProductions(query: string, language: string) {
	const response = await fetch(
		`${BASE_URL}search/multi?api_key=${API_KEY}&query=${query}&language=${language}`
	);
	const data = await response.json();
	return data.results;
}
