import React from "react";
import { cn } from "../main";

type Props = ValliumButtonProps &
	React.ComponentPropsWithoutRef<"button"> &
	React.ComponentPropsWithoutRef<"a">;

export type ValliumButtonProps = {
	as?: "button" | "a";
	variant?: "white" | "accent" | "dark";
	scale?: "normal" | "small" | "thin" | "big";
};

function ButtonAsButton({
	children,
	...props
}: React.ComponentPropsWithoutRef<"button">) {
	return <button {...props}>{children}</button>;
}

function ButtonAsAnchor({
	children,
	...props
}: React.ComponentPropsWithoutRef<"a">) {
	return (
		<a role="button" {...props}>
			{children}
		</a>
	);
}

const types = {
	button: ButtonAsButton,
	a: ButtonAsAnchor,
};

export function Button({
	as = "button",
	variant = "white",
	scale = "normal",
	className,
	...props
}: Props) {
	const variants = {
		white: cn(
			"bg-white hover:bg-neutral-100 active:bg-neutral-200 disabled:bg-neutral-400 border-transparent text-black disabled:text-neutral-700"
		),
		accent: cn(
			"bg-vallium-600 hover:bg-vallium-700 active:bg-vallium-800 disabled:bg-vallium-800 border-transparent text-white disabled:text-neutral-400"
		),
		dark: cn(
			"bg-neutral-800 hover:bg-neutral-900 active:bg-neutral-950 disabled:bg-neutral-600 border-neutral-700 text-white disabled:text-neutral-400"
		),
	};
	const scales = {
		thin: "px-1 h-8",
		small: "px-2 h-10",
		normal: "px-3 h-12",
		big: "px-4 h-14",
	};
	return types[as]({
		...props,
		className: cn(
			"border whitespace-nowrap select-none min-w-[3rem] rounded-md duration-150 gap-2 disabled:cursor-not-allowed",
			scales[scale],
			variants[variant],
			className
		),
	});
}
