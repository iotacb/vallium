import React from "react";
import { cn } from "../main";

type Props = ValliumBadgeProps & React.ComponentPropsWithoutRef<"span">;

export type ValliumBadgeProps = {
	variant?:
		| "outlined"
		| "filled"
		| "combed"
		| "info"
		| "success"
		| "warning"
		| "danger";
};

export function Badge({
	className,
	variant = "filled",
	children,
	...props
}: Props) {
	const variants = {
		outlined: cn("border-vallium-brand-500"),
		filled: cn("border-transparent bg-vallium-brand-500/40"),
		combed: cn("border-vallium-500 bg-vallium-brand-500/40"),
		info: cn("bg-vallium-blue-500/20 text-vallium-blue-300 border-none"),
		success: cn("bg-vallium-green-500/20 text-vallium-green-300 border-none"),
		warning: cn("bg-vallium-orange-500/20 text-vallium-orange-300 border-none"),
		danger: cn("bg-vallium-red-500/20 text-vallium-red-300 border-none"),
	};

	return (
		<span
			{...props}
			className={cn(
				"px-2 py-1 rounded-md border",
				variants[variant],
				className
			)}
		>
			{children}
		</span>
	);
}
