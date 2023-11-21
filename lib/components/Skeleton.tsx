import React, { Children } from "react";
import { Stack, cn } from "../main";

type Props = ValliumSkeletonProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumSkeletonProps = {
	loaded?: boolean;
} & ValliumSkeletonTextProps;

export type ValliumSkeletonTextProps = {
	lineCount?: number;
};

export type ValliumSkeletonCircleProps = {
	size?: number;
};

export function Skeleton({
	className,
	children,
	loaded,
	lineCount = 0,
	...props
}: Props) {
	return (
		<div
			className={cn(
				loaded || lineCount > 0 ? "bg-inherit" : "bg-neutral-700 animate-pulse",
				Children.count(children) === 0 && lineCount === 0 && "h-6",
				"w-full duration-500",
				className
			)}
			{...props}
		>
			<div
				className={cn(
					loaded || lineCount > 0 ? "opacity-100" : "opacity-0 invisible",
					"duration-500"
				)}
			>
				{lineCount > 0 ? (
					<SkeletonText lineCount={lineCount} />
				) : (
					<>{children}</>
				)}
			</div>
		</div>
	);
}

export function SkeletonText({ lineCount }: ValliumSkeletonTextProps) {
	const lineElements = Array(lineCount)
		.fill(1)
		.map((_, i) => i + 1);
	return (
		<>
			{lineElements && lineElements.length > 0 && (
				<Stack gap="2">
					{lineElements.map((_, index) => (
						<Skeleton className="h-2" key={index} />
					))}
				</Stack>
			)}
		</>
	);
}

export function SkeletonCircle({ size = 40 }: ValliumSkeletonCircleProps) {
	return (
		<>
			<Skeleton
				style={{
					width: size,
					height: size,
					borderRadius: "50%",
				}}
			/>
		</>
	);
}
