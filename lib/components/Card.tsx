import React from "react";
import { cn } from "../main";
import { Stack, ValliumStackProps } from "./Stack";

type Props = ValliumCardProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumCardProps = {} & ValliumStackProps;

export function Card({ className, children, ...props }: Props) {
	return (
		<Stack
			className={cn(
				"bg-neutral-900 border border-neutral-700 rounded-md p-4 duration-150",
				className
			)}
			{...props}
		>
			{children}
		</Stack>
	);
}
