import { Metadata } from "next";
import { RenderPage } from "./components/RenderPage";

export const metadata: Metadata = {
	title: "Watcher - oglądaj filmy i seriale",
	description:
		"Watcher to wiodąca platforma streamingowa, oferująca szeroki wybór filmów i seriali dla każdego gustu. Oglądaj najnowsze hity kinowe, klasyki oraz ekskluzywne produkcje tylko u nas. Ciesz się rozrywką na najwyższym poziomie, bez reklam i w doskonałej jakości. Dołącz do Watcher i zanurz się w świecie filmowych emocji!",
	icons: {
		icon: "favicon.png",
	},
};

export default function page() {
	return <RenderPage language="pl" />;
}
