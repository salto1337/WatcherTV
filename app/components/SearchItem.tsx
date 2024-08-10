import { UseTranslation } from "../lib/utils/UseTranslation";
import { ProductionProps } from "../types";

interface SearchItemProps {
	item: ProductionProps;
	language: string;
}

export function SearchItem({ item, language }: SearchItemProps) {
	const translation = UseTranslation(language);

	return (
		<a
			href={`https://www.themoviedb.org/${
				item.media_type === "tv" ? "tv" : "movie"
			}/${item.id}`}
			target="_blank"
			rel="noopener noreferrer"
			className="block w-full py-2 px-3 text-black rounded-sm hover:bg-gray-200">
			<p className="flex justify-between">
				{item.name || item.title}
				<span>
					{item.media_type === "tv"
						? translation.type_series
						: translation.type_tv}
				</span>
			</p>
		</a>
	);
}
