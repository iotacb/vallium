import React, { Children, Fragment, cloneElement, forwardRef } from "react";
import { Card, Divider, Justify, cn } from "../main";
import { Stack } from "./Stack";

type Props = ValliumTabsProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumTabsProps = {
	items: React.ReactNode[];
	accent?: boolean;
	fitted?: boolean;
	align?: Justify;
	bottom?: boolean;
	onTabChange?: (prev: number, tab: number) => void;
};

export type ValliumTabProps = {
	fitted?: boolean;
	focused?: boolean;
	bottom?: boolean;
	roundness?: "left" | "right";
} & React.ComponentPropsWithoutRef<"button">;

export const Tabs = forwardRef<HTMLDivElement, Props>(
	(
		{ items, children, bottom, align, accent, fitted, onTabChange, ...props },
		ref
	) => {
		const [currentTabIndex, setCurrentTabIndex] = React.useState<number>(0);
		const clones: any = Children.map(children, (child: any, index) => {
			return cloneElement(child, { ...child.props, id: `Tab-${index}` });
		});

		return (
			<div ref={ref} {...props}>
				{bottom && (
					<>
						<Card className="rounded-b-none">
							{clones.map((child: any, index: any) => (
								<Fragment key={index}>
									{index === currentTabIndex && <Fragment>{child}</Fragment>}
								</Fragment>
							))}
						</Card>
					</>
				)}
				<Stack justify={align} divider={<Divider direction="vertical" />} row>
					{items.map((item, index) => (
						<TabButton
							focused={currentTabIndex === index}
							fitted={fitted}
							bottom={bottom}
							roundness={
								index === 0
									? "left"
									: index === items.length - 1
									? "right"
									: undefined
							}
							key={index}
							onClick={() => {
								const prevTab = currentTabIndex;
								setCurrentTabIndex(index);

								if (onTabChange) {
									onTabChange(prevTab, index);
								}
							}}
							className={cn(
								"border-transparent",
								bottom ? "border-t-2" : "border-b-2",
								accent && index === currentTabIndex && "border-vallium-500"
							)}
						>
							{item}
						</TabButton>
					))}
				</Stack>
				{!bottom && (
					<>
						<Card className="rounded-t-none">
							{clones.map((child: any, index: any) => (
								<Fragment key={index}>
									{index === currentTabIndex && <Fragment>{child}</Fragment>}
								</Fragment>
							))}
						</Card>
					</>
				)}
			</div>
		);
	}
);

function TabButton({
	children,
	onClick,
	className,
	focused,
	roundness,
	fitted,
	bottom,
	...props
}: ValliumTabProps) {
	return (
		<button
			className={cn(
				"grid px-4 py-2 rounded-none text-white place-content-center duration-150 bg-neutral-800 hover:bg-neutral-700",
				focused && "bg-neutral-700 hover:bg-neutral-600",
				fitted && "w-full",
				roundness === "left"
					? bottom
						? "rounded-bl-md"
						: "rounded-tl-md"
					: roundness === "right"
					? bottom
						? "rounded-br-md"
						: "rounded-tr-md"
					: "",
				className
			)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
}

export const Tab = forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
	return (
		<div ref={ref} {...props}>
			{children}
		</div>
	);
});
