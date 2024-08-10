import { Navbar } from "../components/Navbar";
import { Slider } from "../components/Slider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UseTranslation } from "../lib/utils/UseTranslation";
import { fetchTopMovies, fetchTopTVShows } from "../lib/api";

export async function RenderPage({ language }: { language: string }) {
	const translation = UseTranslation(language);

	const moviesData = await fetchTopMovies(language);
	const tvShowsData = await fetchTopTVShows(language);

	return (
		<>
			<Navbar language={language} />
			<Header language={language} />
			<Slider
				title={translation.best_films}
				data={moviesData}
				language={language}
				isMovie={true}
				id="film"
			/>
			<Slider
				title={translation.tv_series}
				data={tvShowsData}
				language={language}
				isMovie={false}
				id="serial"
			/>
			<Footer language={language} />
		</>
	);
}
