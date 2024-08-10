"use client";

import { useState } from "react";
import Image from "next/image";
import { CenteredContent } from "./CenteredContent";
import { SearchItem } from "./SearchItem";
import { UseTranslation } from "../lib/utils/UseTranslation";
import { searchProductions } from "../lib/api";
import { ProductionProps } from "../types";
import { debounce } from "lodash";

import banner_pl from "../../public/header-img-pl.jpg";
import banner_en from "../../public/header-img-en.png";

export function Header({ language }: { language: string }) {
	const [searchItems, setSearchItems] = useState([]);
	const currentBanner = language === "pl" ? banner_pl : banner_en;
	const translation = UseTranslation(language);

	const debouncedRequest = debounce(async (searchTerm: string) => {
		if (searchTerm.length > 2) {
			const data = await searchProductions(searchTerm, language);
			setSearchItems(data);
		} else {
			setSearchItems([]);
		}
	}, 300);

	return (
		<header className="relative">
			<Image
				src={currentBanner}
				alt="Header banner"
				className="absolute w-full h-full object-cover z-[-1]"
				placeholder="blur"
			/>
			<CenteredContent>
				<div className="flex flex-col items-center gap-[30px] py-[80px] xs:py-[100px] lg:py-[150px]">
					<h1 className="text-white text-2xl lg:text-3xl xl:text-4xl text-center font-bold">
						{translation.header_title}
					</h1>
					<p className="text-white text-center xl:max-w-[65%] leading-[30px]">
						{translation.header_desc}
					</p>
					<input
						className="w-[90%] sm:w-[70%] md:w-[45%] py-2 px-3 rounded-sm"
						type="text"
						onChange={(e) => {
							debouncedRequest(e.target.value);
						}}
						placeholder={translation.placeholder}
					/>
					<div className="relative w-[90%] sm:w-[70%] md:w-[45%]">
						{searchItems.length > 0 && (
							<div className="absolute w-full bg-gray-100 border z-[5] py-2 px-3 rounded-sm">
								{searchItems.map((item: ProductionProps) => {
									return (
										<SearchItem key={item.id} item={item} language={language} />
									);
								})}
							</div>
						)}
					</div>
				</div>
			</CenteredContent>
		</header>
	);
}
