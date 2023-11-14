import clsx, { ClassValue } from "clsx";
import { Children } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function hasChildWithId(children: React.ReactNode, id: string) {
	return (
		Children.toArray(children).filter((child: any) => child.type.id === id)
			.length > 0
	);
}
