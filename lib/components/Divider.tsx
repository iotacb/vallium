import React from "react";
import { cn } from "../main";

type Props = ValliumBadgeProps & React.ComponentPropsWithoutRef<"hr">;

export type ValliumBadgeProps = {
	direction?: "horizontal" | "vertical";
	variant?: "line" | "gradient";
};

export function Divider({
	className,
	direction = "horizontal",
	variant = "line",
	...props
}: Props) {
	const variants = {
		line: cn(
			"bg-neutral-700",
			direction === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]"
		),
		gradient: cn(
			`from-transparent via-neutral-700 to-transparent`,
			direction === "horizontal"
				? "w-full h-[1px] bg-gradient-to-r"
				: "h-full w-[1px] bg-gradient-to-b"
		),
	};
	return (
		<hr
			{...props}
			className={cn("border-none", variants[variant], className)}
		/>
	);
}
