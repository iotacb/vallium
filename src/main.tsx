import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar, ValliumNavbarItemProps } from "../lib/components/Navbar.tsx";
import { Button } from "../lib/main.ts";
import Dividers from "./pages/Dividers.tsx";
import Inputs from "./pages/Inputs.tsx";

const leftNavbarContent: ValliumNavbarItemProps[] = [
	{
		content: "Home",
		href: "/",
	},
	{
		content: "Blog",
		href: "/",
	},
	{
		content: "Pricing",
		href: "/",
	},
];

const rightNavbarContent: ValliumNavbarItemProps[] = [
	{
		content: <Button scale="small">Contact</Button>,
	},
];

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Navbar
			fixed
			contentLeft={leftNavbarContent}
			contentRight={rightNavbarContent}
		/>
		<Inputs />
		{/* <div className="w-screen h-screen grid place-content-center">
			<svg width="0" height="0">
				<defs>
					<clipPath clipPathUnits="objectBoundingBox" id="videoMask">
						<path
							d="M0.273,0 C0.233,0,0.2,0.048,0.2,0.107 C0.2,0.164,0.168,0.209,0.129,0.209 H0.074 C0.033,0.209,0,0.257,0,0.317 V0.893 C0,0.952,0.033,1,0.074,1 H0.698 C0.739,1,0.772,0.952,0.772,0.893 C0.772,0.84,0.801,0.798,0.837,0.798 H0.926 C0.967,0.798,1,0.75,1,0.691 V0.107 C1,0.048,0.967,0,0.926,0 H0.273"
							fill="#D9D9D9"
						/>
					</clipPath>
				</defs>
			</svg>
			<video
				style={{
					width: "50%",
					clipPath: "url(#videoMask)",
				}}
				muted
				playsInline
				autoPlay
				loop
			>
				<source src="vid.mp4" />
			</video>
		</div> */}
	</React.StrictMode>
);
