import Image from "next/image";
import logo from "../../public/logo.png";

export function Logo() {
	return (
		<a href="#nav">
			<Image className="w-[120px]" src={logo} alt="logo"  />
		</a>
	);
}
