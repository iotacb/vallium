import React from "react";
import { cn } from "../main";

type Props = ValliumNavbarProps;

export type ValliumNavbarProps = {
	contentLeft?: ValliumNavbarItemProps[];
	contentRight?: ValliumNavbarItemProps[];
	fixed?: boolean;
	className?: string;
};

export type ValliumNavbarItemProps = {
	content: React.ReactNode | string;
	href?: string;
};

export type ValliumNavbarListProps = {
	items: ValliumNavbarItemProps[];
};

export function NavbarList({ items }: ValliumNavbarListProps) {
	return (
		<ul className="flex flex-col md:flex-row items-center gap-8">
			{items &&
				items.map((item, index) => (
					<NavbarItem key={index} content={item.content} href={item.href} />
				))}
		</ul>
	);
}

export function NavbarItem({ content, href }: ValliumNavbarItemProps) {
	return (
		<li>
			<a
				className="text-neutral-400 hover:text-neutral-200 duration-150"
				href={href}
			>
				{content}
			</a>
		</li>
	);
}

export function Navbar({ contentLeft, contentRight, fixed, className }: Props) {
	const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

	return (
		<nav
			className={cn(
				fixed ? "fixed" : "absolute",
				"top-0 left-0 w-full h-16 md:px-10 z-50 bg-black backdrop-blur-none md:bg-black/80 md:backdrop-blur-md",
				className
			)}
		>
			{/* DesktopNav */}
			<div className="hidden md:flex h-full justify-between items-center mx-auto max-w-7xl">
				{contentLeft && <NavbarList items={contentLeft} />}
				{contentRight && <NavbarList items={contentRight} />}
			</div>
			<button
				onClick={() => setNavbarOpen(!navbarOpen)}
				className="grid place-content-center md:hidden w-8 h-8 absolute right-4 top-4 text-white"
			>
				{navbarOpen ? <ValliumNavbarIconClose /> : <ValliumNavbarIconOpen />}
			</button>

			{/* MobileNav */}
			<div
				className={cn(
					navbarOpen ? "translate-x-0" : "-translate-x-full",
					"duration-150 absolute h-[calc(100dvh-64px)] mt-16 w-dvw bg-black flex flex-col justify-center gap-12 md:hidden"
				)}
			>
				{contentLeft && <NavbarList items={contentLeft} />}
				{contentRight && <NavbarList items={contentRight} />}
			</div>
		</nav>
	);
}

export function ValliumNavbarIconOpen() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 5C2 4.44772 2.44772 4 3 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H3C2.44772 6 2 5.55228 2 5Z"
				fill="currentColor"
			></path>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 19C2 18.4477 2.44772 18 3 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19Z"
				fill="currentColor"
			></path>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
				fill="currentColor"
			></path>
		</svg>
	);
}

export function ValliumNavbarIconClose() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4L12 12M20 20L12 12M12 12L20 4M12 12L4 20"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	);
}
