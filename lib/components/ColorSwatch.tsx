import React from "react";
import { cn } from "../main";
import { getColor, ValliumColor } from "../misc/theme";

type Props = ValliumColorSwatchProps & React.ComponentPropsWithoutRef<"span">;

export type ValliumColorSwatchProps = {
	swatchColor: ValliumColor | string;
};

export function ColorSwatch({
	className,
	children,
	swatchColor,
	...props
}: Props) {
	return (
		<span
			{...props}
			style={{
				backgroundColor:
					typeof swatchColor === "string"
						? swatchColor
						: getColor(swatchColor.name, swatchColor.shade),
			}}
			className={cn(
				"group relative w-10 h-10 aspect-square rounded-full border border-vallium-gray-700",
				className
			)}
		>
			{children}
			<div className="group-hover:translate-y-0 group-hover:opacity-100 duration-150 pointer-events-none opacity-0 translate-y-2 bg-vallium-gray-900 absolute w-fit h-fit border border-vallium-gray-700 text-nowrap left-1/2 -translate-x-1/2 -bottom-10 z-10 px-2 py-1 rounded-md text-vallium-gray-200">
				{typeof swatchColor === "string"
					? swatchColor
					: `vallium-${swatchColor.name}-${swatchColor.shade}`}
			</div>
		</span>
	);
}
