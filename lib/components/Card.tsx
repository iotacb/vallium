import React from "react";
import { cn } from "../main";

type Props = ValliumCardProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumCardProps = {
	flex?: boolean;
	hover?: boolean;
	direction?: "col" | "row";
	justify?:
		| "start"
		| "center"
		| "end"
		| "between"
		| "around"
		| "evenly"
		| "normal"
		| "stretch";
	items?: "start" | "center" | "end" | "baseline" | "stretch";
	gap?: "2" | "4" | "8" | "16" | "32";
};

export function Card({
	className,
	children,
	flex,
	hover,
	direction = "row",
	justify = "start",
	items = "start",
	gap = "2",
	...props
}: Props) {
	const flexStyles = cn(
		`flex flex-${direction} justify-${justify} items-${items} gap-${gap}`
	);
	return (
		<div
			className={cn(
				flex && flexStyles,
				`bg-neutral-900 ${
					hover && "hover:bg-neutral-800"
				} border border-neutral-700 rounded-md p-4 duration-150`,
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
}
