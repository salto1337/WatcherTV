"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CenteredContent } from "./CenteredContent";
import { SliderProps } from "../types";
import { Card } from "./Card";
import { SliderDot } from "./SliderDot";
import { Arrow } from "./Arrow";

export function Slider({ title, data, language, isMovie, id }: SliderProps) {
	const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRef = useRef<HTMLDivElement>(null);

	const numberOfSlides = Math.floor(data.length / 3);
	const numberOfMobileSlides = Math.floor(data.length / 2);

	const slideWidth = slideRef.current ? slideRef.current.offsetWidth : 1;
	const oneSlideWidth = slideWidth / 3;
	const maxScrollPosition = numberOfSlides * slideWidth - oneSlideWidth;

	const updateCurrentSlide = useCallback(() => {
		if (window.innerWidth < 1025) {
			if (slideRef.current) {
				const scrollPosition = slideRef.current.scrollLeft;
				const newSlide = Math.floor(
					scrollPosition / slideRef.current.offsetWidth
				);
				setCurrentSlide(newSlide);
				setCurrentScrollPosition(scrollPosition);
			}
		}
	}, []);

	const handleSlide = useCallback((direction: string) => {
		if (slideRef.current) {
			const containerWidth = slideRef.current.offsetWidth;
			const newScrollPosition =
				direction === "next"
					? slideRef.current.scrollLeft + containerWidth
					: slideRef.current.scrollLeft - containerWidth;

			slideRef.current.scrollLeft = newScrollPosition;
			setCurrentScrollPosition(newScrollPosition);
		}
	}, []);

	useEffect(() => {
		const container = slideRef.current;
		if (container) {
			container.addEventListener("scroll", updateCurrentSlide);

			return () => {
				container.removeEventListener("scroll", updateCurrentSlide);
			};
		}
	}, [updateCurrentSlide]);

	return (
		<section
			className="bg-section border-t-2 border-gray-300 py-24 relative"
			id={id}>
			<CenteredContent>
				<h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-14">
					{title}
				</h2>

				<div className="flex justify-center relative">
					{currentScrollPosition < maxScrollPosition && (
						<Arrow direction="right" onClick={() => handleSlide("next")} />
					)}

					<div
						className="flex gap-4 overflow-scroll  lg:overflow-hidden lg:max-w-[87%] scroll-smooth"
						ref={slideRef}>
						{data.map((item) => {
							return (
								<Card
									key={item.id}
									data={item}
									language={language}
									isMovie={isMovie}
								/>
							);
						})}
					</div>

					{currentScrollPosition > 0 && (
						<Arrow direction="left" onClick={() => handleSlide("previous")} />
					)}
				</div>
				<div className="lg:hidden flex justify-center mt-10 gap-2">
					{Array(numberOfMobileSlides)
						.fill(1)
						.map((_, index) => {
							return (
								<SliderDot
									key={index}
									currentSlide={currentSlide}
									index={index}
								/>
							);
						})}
				</div>
			</CenteredContent>
		</section>
	);
}
