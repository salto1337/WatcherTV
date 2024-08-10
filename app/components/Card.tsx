"use client";

import Image from "next/image";
import { UseTranslation } from "../lib/utils/UseTranslation";
import { MovieProps } from "../types";
import star from "../../public/star.png";

export interface CardProps {
	data: MovieProps;
	language: string;
	isMovie: boolean;
}

export function Card({ data, language, isMovie }: CardProps) {
	const imgUrl = "https://image.tmdb.org/t/p/w500";
	const categoryPath = isMovie ? "movie" : "tv";
	const translation = UseTranslation(language);

	return (
		<a
			href={`https://www.themoviedb.org/${categoryPath}/${data.id}?language=${language}`}
			target="_blank">
			<div className="flex flex-col justify-between w-[45vw] s:w-[50vw] lg:w-[27vw] xl:w-[350px] bg-white border rounded-m h-full">
				<Image
					src={`${imgUrl}${data.poster_path}`}
					width={500}
					height={500}
					alt="poster"
				/>
				<div className="flex flex-col gap-2 px-3 py-2">
					<h3 className="font-semibold text-m lg:text-xl">
						{isMovie ? data.title : data.name}
					</h3>

					<p className="flex gap-2">
						<span className="font-semibold">{translation.ratings}</span>
						<Image src={star} alt="star" width={24} height={24} />
						<span>{data.vote_average.toFixed(1)}</span>
					</p>
					<p>
						<span className="font-semibold">{translation.releaseDate}</span>{" "}
						{isMovie ? data.release_date : data.first_air_date}
					</p>
				</div>
			</div>
		</a>
	);
}
