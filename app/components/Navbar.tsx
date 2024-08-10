"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CenteredContent } from "./CenteredContent";
import { Logo } from "./Logo";
import { UseTranslation } from "../lib/utils/UseTranslation";
import burger from "../../public/burger.png";

export function Navbar({ language }: { language: string }) {
	const [isMobileNavShown, setIsMobileNavShown] = useState(false);
	const translation = UseTranslation(language);
	const router = useRouter();

	function toggleMenu() {
		setIsMobileNavShown((prevState) => !prevState);
	}

	return (
		<nav id="nav">
			<CenteredContent>
				<div className="flex justify-between items-center py-4">
					<Logo />

					<div
						className={`${
							isMobileNavShown
								? "fixed w-full h-[100vh] bg-white left-0 top-0 z-10 lg:h-auto lg:static lg:w-auto"
								: "hidden"
						}  lg:flex gap-8`}>
						<ul
							className={`${
								isMobileNavShown
									? "flex flex-col items-center gap-8 py-[100px] lg:py-0 lg:flex-row"
									: "flex gap-8"
							}`}>
							<li
								className="transition-all font-medium hover:text-blue"
								onClick={toggleMenu}>
								<a href="#film">{translation.first_link}</a>
							</li>
							<li
								className="transition-all font-medium hover:text-blue"
								onClick={toggleMenu}>
								<a href="#serial">{translation.second_link}</a>
							</li>
						</ul>
					</div>
					<div className="flex gap-5">
						<select
							value={language}
							className="cursor-pointer"
							onChange={(e) => router.push(e.target.value)}>
							<option value="/">PL</option>
							<option value="en">EN</option>
						</select>
						<Image
							className={`${
								isMobileNavShown ? "fixed right-[12px] top-[19px] z-10" : ""
							} lg:hidden cursor-pointer`}
							src={burger}
							alt="burger"
							onClick={toggleMenu}
						/>
					</div>
				</div>
			</CenteredContent>
		</nav>
	);
}
