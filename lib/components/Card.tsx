import React from "react";
import { cn } from "../main";
import { Stack, ValliumStackProps } from "./Stack";

type Props = ValliumCardProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumCardProps = {
	scheme?: "normal" | "warning" | "error" | "info" | "success";
	accent?: "none" | "left" | "right" | "top" | "bottom";
} & ValliumStackProps;

export function Card({
	className,
	children,
	scheme = "normal",
	accent = "none",
	gap = "2",
	...props
}: Props) {
	const schemes = {
		normal: cn("bg-neutral-900 border-neutral-700"),
		warning: "bg-amber-300 border-amber-500",
		error: "bg-red-300 border-red-500",
		info: "bg-blue-300 border-blue-500",
		success: "bg-green-300 border-green-500",
	};
	const accents = {
		none: "",
		left: "border-l-4",
		right: "border-r-4",
		top: "border-t-4",
		bottom: "border-b-4",
	};
	return (
		<Stack
			gap={gap}
			className={cn(
				"border rounded-md p-4 duration-150",
				schemes[scheme],
				accents[accent],
				className
			)}
			{...props}
		>
			{children}
		</Stack>
	);
}
