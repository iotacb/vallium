import React from "react";
import { cn } from "../main";
import {
	FlexDirection,
	Gaps,
	Items,
	Justify,
	twFlexDirection,
	twGaps,
	twItems,
	twJustify,
} from "../misc/tailwind-hack";

type Props = ValliumCardProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumCardProps = {
	flex?: boolean;
	hover?: boolean;
	direction?: FlexDirection;
	justify?: Justify;
	items?: Items;
	gap?: Gaps;
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
		`flex ${twFlexDirection[direction]} ${twJustify[justify]} ${twItems[items]} ${twGaps[gap]}`
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
