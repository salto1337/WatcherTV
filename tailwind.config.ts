import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: "#36C2CE",
			},
			screens: {
				xs: "390px",
				s: "600px",
			},
			backgroundColor: {
				nav: "#252626",
				section: "#f4f3ef",
			},
		},
	},
	plugins: [],
};
export default config;
