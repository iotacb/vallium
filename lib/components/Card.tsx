import React from "react";
import { cn } from "../main";

type Props = ValliumCardProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumCardProps = {
	variant?: "normal" | "warning" | "danger" | "info" | "success";
	accent?: "none" | "left" | "right" | "top" | "bottom" | "x" | "y";
	depth?: "flat" | "raised" | "floating" | "none";
	hover?: boolean;
};

export function Card({
	className,
	children,
	variant = "normal",
	accent = "none",
	depth = "none",
	hover = false,
	...props
}: Props) {
	const variants = {
		normal: "bg-vallium-gray-900 border-vallium-gray-700",
		warning: "bg-vallium-orange-500/20 border-vallium-orange-500",
		danger: "bg-vallium-red-500/20 border-vallium-red-500",
		info: "bg-vallium-blue-500/20 border-vallium-blue-500",
		success: "bg-vallium-green-500/20 border-vallium-green-500",
	};
	const accents = {
		none: "",
		left: "border-l-4",
		right: "border-r-4",
		top: "border-t-4",
		bottom: "border-b-4",
		x: "border-x-4",
		y: "border-y-4",
	};
	const depths = {
		none: cn("shadow-none"),
		flat: cn(
			"shadow-vallium-flat",
			hover && "shadow-none hover:shadow-vallium-flat duration-150"
		),
		raised: cn(
			"shadow-vallium-raised",
			hover && "shadow-none hover:shadow-vallium-raised duration-150"
		),
		floating: cn(
			"shadow-vallium-floating",
			hover && "shadow-none hover:shadow-vallium-floating duration-150"
		),
	};
	return (
		<div
			className={cn(
				"border rounded-md p-4 duration-150",
				variants[variant],
				accents[accent],
				depths[depth],
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}
