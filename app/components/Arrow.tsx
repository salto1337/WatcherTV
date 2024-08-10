import Image from "next/image";
import arrow from "../../public/arrow.png";

interface ArrowButtonProps {
	direction: "left" | "right";
	onClick: () => void;
}

export function Arrow({ direction, onClick }: ArrowButtonProps) {
	return (
		<Image
			className={`absolute hidden lg:block ${
				direction === "right" ? "right-0" : "left-0"
			} w-[60px] top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 ${
				direction === "left" ? "rotate-180" : ""
			}`}
			src={arrow}
			alt={`${direction} arrow`}
			onClick={onClick}
		/>
	);
}
