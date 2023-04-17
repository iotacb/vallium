import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Variant } from "./types";
import { FlattenSimpleInterpolation, css } from "styled-components";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function variants(
	variant: string,
	variants: Variant,
	style?: string
): FlattenSimpleInterpolation {
	const varObj = variants[variant];
	if (varObj) {
		varObj.style += style ? style : "";
		return css`
			${varObj.style}
		`;
	}
	return css``;
}
