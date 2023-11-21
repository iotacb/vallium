import React, { Children, Fragment, cloneElement } from "react";
import { Gaps, Items, Justify, cn, twGaps, twItems, twJustify } from "../main";

type Props = ValliumStackProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumStackProps = {
	row?: boolean;
	gap?: Gaps;
	justify?: Justify;
	items?: Items;
	divider?: React.ReactNode;
};

export function Stack({
	className,
	row,
	gap = "0",
	justify = "start",
	items = "start",
	children,
	divider,
	...props
}: Props) {
	const clones = Children.map(children, (child: any, index: number) => {
		if (!divider || Children.count(children) === index + 1) return child;
		return (
			<Fragment>
				{child}
				{divider}
			</Fragment>
		);
	});
	return (
		<div
			className={cn(
				"flex flex-col",
				row && "flex-row",
				twJustify[justify],
				twItems[items],
				twGaps[gap],
				className
			)}
			{...props}
		>
			{clones}
		</div>
	);
}
