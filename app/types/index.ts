export interface MovieProps {
	poster_path: string;
	title: string;
	vote_average: number;
	release_date: string;
	first_air_date: string;
	name: string;
	id: number;
}

export interface SliderProps {
	title: string;
	data: MovieProps[];
	language: string;
	isMovie: boolean;
	id: string;
}

export interface ProductionProps {
	media_type: string;
	id: number;
	name: string;
	title: string;
}
