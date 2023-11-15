import React from "react";
import { cn } from "../main";

type Props = ValliumBadgeProps & React.ComponentPropsWithoutRef<"span">;

export type ValliumBadgeProps = {
	variant?: "outlined" | "filled" | "combed";
};

export function Badge({
	className,
	variant = "filled",
	children,
	...props
}: Props) {
	const variants = {
		outlined: cn("border-vallium-500"),
		filled: cn("border-transparent bg-vallium-500/40"),
		combed: cn("border-vallium-500 bg-vallium-500/40"),
	};

	return (
		<span
			{...props}
			className={cn("px-1 rounded-sm border", variants[variant], className)}
		>
			{children}
		</span>
	);
}
