import React from "react";
import { cn } from "../main";

type Props = ValliumButtonProps &
	React.ComponentPropsWithoutRef<"button"> &
	React.ComponentPropsWithoutRef<"a">;

export type ValliumButtonProps = {
	as?: "button" | "a";
	variant?: "white" | "accent" | "dark";
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
	className,
	...props
}: Props) {
	const variants = {
		white: cn(
			"bg-white hover:bg-neutral-200 disabled:bg-neutral-400 text-black disabled:text-neutral-700"
		),
		accent: cn(
			"bg-vallium-500 hover:bg-vallium-600 disabled:bg-vallium-800 text-white disabled:text-neutral-400"
		),
		dark: cn(
			"bg-neutral-900 hover:bg-neutral-800 disabled:bg-neutral-600 border border-neutral-700 text-white disabled:text-neutral-400"
		),
	};
	return types[as]({
		...props,
		className: cn(
			"bg-white px-6 py-3 rounded-md duration-150 flex items-center gap-2",
			variants[variant],
			className
		),
	});
}
