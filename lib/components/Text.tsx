import React from "react";
import { cn } from "../main";

type Props = ValliumTextProps &
	React.HTMLAttributes<HTMLHeadingElement> &
	React.ComponentPropsWithoutRef<"p">;
export type ValliumTextType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
export type ValliumTextWeight =
	| "bold"
	| "normal"
	| "light"
	| "medium"
	| "semibold";
export type ValliumTextProps = {
	type?: ValliumTextType;
	color?: string;
	underline?: boolean;
	weight?: ValliumTextWeight;
};

export function Text({
	type = "p",
	color = cn("text-white"),
	className,
	children,
	underline,
	weight = "normal",
	...props
}: Props) {
	const TextElement = type;

	const variants = {
		h1: cn("text-3xl"),
		h2: cn("text-2xl"),
		h3: cn("text-xl"),
		h4: cn("text-lg"),
		h5: cn("text-base"),
		h6: cn("text-sm"),
		p: cn("text-base"),
	};

	const weights = {
		bold: cn("font-bold"),
		normal: cn("font-normal"),
		light: cn("font-light"),
		medium: cn("font-medium"),
		semibold: cn("font-semibold"),
	};

	return (
		<TextElement
			className={cn(
				underline && "underline",
				weights[weight],
				color,
				variants[type],
				className
			)}
			{...props}
		>
			{children}
		</TextElement>
	);
}
