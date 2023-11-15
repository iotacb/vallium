/**
 * This class is a hack to safely provide the classes of tailwind to the vallium library.
 *
 * It forces tailwind to build the classes that may be used by the vallium library.
 */

export const twFlexDirection = {
	col: "flex-col",
	row: "flex-row",
};
export type FlexDirection = keyof typeof twFlexDirection;

export const twJustify = {
	start: "justify-start",
	center: "justify-center",
	end: "justify-end",
	between: "justify-between",
	around: "justify-around",
	evenly: "justify-evenly",
	normal: "justify-normal",
	stretch: "justify-stretch",
};
export type Justify = keyof typeof twJustify;

export const twItems = {
	start: "items-start",
	center: "items-center",
	end: "items-end",
	baseline: "items-baseline",
	stretch: "items-stretch",
};
export type Items = keyof typeof twItems;

export const twGaps = {
	"2": "gap-2",
	"4": "gap-4",
	"8": "gap-8",
	"16": "gap-16",
	"32": "gap-32",
};
export type Gaps = keyof typeof twGaps;
