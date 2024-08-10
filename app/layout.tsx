import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
	style: ["normal"],
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={figtree.className}>{children}</body>
		</html>
	);
}
