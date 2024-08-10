import { Metadata } from "next";
import { RenderPage } from "../components/RenderPage";

export const metadata: Metadata = {
	title: "Watcher - Watch movies and TV showsale",
	description:
		"Watcher is your go-to source for the best movies and TV shows. Find hits, new releases, and recommendations you must watch. Discover your next favorite title today!",
	icons: {
		icon: "favicon.png",
	},
};

export default async function page() {
	return <RenderPage language="en" />;
}
