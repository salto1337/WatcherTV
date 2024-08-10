import Link from "next/link";
import { CenteredContent } from "./CenteredContent";
import { Logo } from "./Logo";
import { FOOTER_LINKS_PL } from "../constants/footer";
import { FOOTER_LINKS_EN } from "../constants/footer";
import { UseTranslation } from "../lib/utils/UseTranslation";

export function Footer({ language }: { language: string }) {
	const FOOTER_LINKS = language === "pl" ? FOOTER_LINKS_PL : FOOTER_LINKS_EN;
	const footerDescription = UseTranslation(language).footer_desc;

	return (
		<footer>
			<CenteredContent>
				<div className="py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<div>
						<Logo />
						<p className="mt-2">{footerDescription}</p>
					</div>
					{FOOTER_LINKS.map((column, index) => {
						return (
							<div key={index}>
								<h3 className="font-bold">{column.title}</h3>
								<ul>
									{column.links.map((link, index) => {
										return (
											<li
												key={index}
												className="my-2">
												<Link className="transition-all font-medium hover:text-blue" href="">{link.label}</Link>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</CenteredContent>
		</footer>
	);
}
