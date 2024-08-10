import React from "react";

export function SliderDot({
	currentSlide,
	index,
}: {
	currentSlide: number;
	index: number;
}) {
	return (
		<button
			className={`w-3 h-3 rounded-full ${
				currentSlide === index ? "bg-black" : "bg-gray-400"
			}`}
			aria-label={`slide ${index + 1}`}
		/>
	);
}
