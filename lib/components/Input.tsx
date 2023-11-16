import {
	Children,
	cloneElement,
	useRef,
	forwardRef,
	useState,
	useEffect,
} from "react";
import { Button, cn } from "../main";
import { hasChildWithDisplayName, wt } from "../misc/utils";

type Props = ValliumInputProps & React.InputHTMLAttributes<HTMLInputElement>;

const validInputGroupChilds = {
	addon: "ValliumInputAddon",
	addonLeft: "ValliumInputAddonLeft",
	addonRight: "ValliumInputAddonRight",
	item: "ValliumInputItem",
	itemLeft: "ValliumInputItemLeft",
	itemRight: "ValliumInputItemRight",
	input: "ValliumInput",
};

export type ValliumInputProps = {
	variant?: "outlined" | "filled";
};

export type ValliumInputGroupProps = {} & React.ComponentPropsWithoutRef<"div">;

export type ValliumInputAddonProps = {
	button?: boolean;
	disabled?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export type ValliumInputItemProps = {} & React.ComponentPropsWithoutRef<"div">;

export function InputGroup({
	children,
	className,
	...props
}: ValliumInputGroupProps) {
	const containsAddonLeft = hasChildWithDisplayName(
		children,
		validInputGroupChilds.addonLeft
	);
	const leftAddonRef = useRef<HTMLElement>(null);
	const [leftAddonWidth, setLeftAddonWidth] = useState<number>(0);

	const containsAddonRight = hasChildWithDisplayName(
		children,
		validInputGroupChilds.addonRight
	);
	const rightAddonRef = useRef<HTMLElement>(null);
	const [rightAddonWidth, setRightAddonWidth] = useState<number>(0);

	const containsItemLeft = hasChildWithDisplayName(
		children,
		validInputGroupChilds.itemLeft
	);
	const containsItemRight = hasChildWithDisplayName(
		children,
		validInputGroupChilds.itemRight
	);
	const variantOfInput = Children.toArray(children)
		.filter((child: any) => child.props["variant"])
		.map((child: any) => child.props["variant"])[0];

	useEffect(() => {
		if (!leftAddonRef.current) return;
		setLeftAddonWidth(leftAddonRef.current.getBoundingClientRect().width);
	}, [leftAddonRef]);

	useEffect(() => {
		if (!rightAddonRef.current) return;
		setRightAddonWidth(rightAddonRef.current.getBoundingClientRect().width);
	}, [rightAddonRef]);

	const clones = Children.map(children, (child: any) => {
		if (child == null || child.type == null) return;
		if (
			child.type.displayName === validInputGroupChilds.item ||
			child.type.displayName === validInputGroupChilds.addon
		) {
			return cloneElement(child, { ...child.props });
		} else if (child.type.displayName === validInputGroupChilds.addonLeft) {
			return cloneElement(child, {
				...child.props,
				ref: containsItemLeft ? leftAddonRef : null,
				className: `
				${wt(child.props.className)}
				${wt(variantOfInput !== "filled" && "border-r-0")}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.addonRight) {
			return cloneElement(child, {
				...child.props,
				ref: containsAddonRight ? rightAddonRef : null,
				className: `
				${wt(child.props.className)}
				${wt(variantOfInput !== "filled" && "border-l-0")}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.itemLeft) {
			return cloneElement(child, {
				...child.props,
				style: {
					left: leftAddonWidth + "px",
				},
				className: `
				
				${wt(child.props.className)}
				${wt(!containsAddonLeft && "left-0")}
				${
					containsAddonLeft && containsItemLeft && leftAddonWidth === 0
						? "opacity-0"
						: "opacity-100"
				}
				duration-150 transition-opacity
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.itemRight) {
			return cloneElement(child, {
				...child.props,
				style: {
					right: rightAddonWidth + "px",
				},
				className: `
				${wt(child.props.className)}
				${wt(!containsAddonRight && "right-0")}
				${
					containsAddonRight && containsItemRight && rightAddonWidth === 0
						? "opacity-0"
						: "opacity-100"
				}
				duration-150 transition-opacity
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.input) {
			return cloneElement(child, {
				...child.props,
				className: `
				${wt(child.props.className)}
				${wt(containsAddonLeft && "rounded-l-none")}
				${wt(containsAddonRight && "rounded-r-none")}
				${wt(containsItemLeft && "pl-10")}
				${wt(containsItemRight && "pr-10")}
				`,
			});
		} else {
			console.error(
				"'Vallium InputGroup' contains a child that is not part of 'Vallium Input'. It may not behave like you expect!"
			);
			return cloneElement(child, { ...child.props });
		}
	});

	return (
		<div
			{...props}
			className={cn(
				"relative group w-full flex overflow-hidden rounded-md valliumInputGroup",
				className
			)}
		>
			{clones}
		</div>
	);
}

export const InputAddon = forwardRef<HTMLDivElement, ValliumInputAddonProps>(
	(
		{
			children,
			className,
			button = false,
			disabled = false,
			onClick = (event: React.MouseEvent<HTMLDivElement>) => {},
			...props
		},
		ref
	) => {
		return (
			<div
				{...props}
				ref={ref}
				role={button ? "button" : "none"}
				onClick={(event) => {
					if (disabled) return;
					onClick(event);
				}}
				className={cn(
					"bg-neutral-800 duration-150 grid place-content-center px-3 border border-neutral-700 valliumInputAddon",
					button &&
						(disabled
							? "cursor-not-allowed bg-neutral-600 text-neutral-400 select-none"
							: "hover:bg-neutral-700 active:bg-neutral-800 cursor-pointer select-none"),
					className
				)}
			>
				{children}
			</div>
		);
	}
);
InputAddon.displayName = validInputGroupChilds.addon;

export const InputAddonLeft = forwardRef<
	HTMLDivElement,
	ValliumInputAddonProps
>(({ children, className, ...props }, ref) => {
	return (
		<InputAddon ref={ref} className={cn("rounded-l-md", className)} {...props}>
			{children}
		</InputAddon>
	);
});
InputAddonLeft.displayName = validInputGroupChilds.addonLeft;

export const InputAddonRight = forwardRef<
	HTMLDivElement,
	ValliumInputAddonProps
>(({ children, className, ...props }, ref) => {
	return (
		<InputAddon ref={ref} className={cn("rounded-r-md", className)} {...props}>
			{children}
		</InputAddon>
	);
});
InputAddonRight.displayName = validInputGroupChilds.addonRight;

export const InputItem = forwardRef<HTMLDivElement, ValliumInputItemProps>(
	({ children, className, ...props }, ref) => {
		return (
			<div
				{...props}
				ref={ref}
				className={cn(
					"absolute h-10 w-10 text-white grid place-content-center",
					className
				)}
			>
				{children}
			</div>
		);
	}
);
InputItem.displayName = validInputGroupChilds.item;

export const InputItemLeft = forwardRef<HTMLDivElement, ValliumInputItemProps>(
	({ children, ...props }, ref) => {
		return (
			<InputItem ref={ref} {...props}>
				{children}
			</InputItem>
		);
	}
);
InputItemLeft.displayName = validInputGroupChilds.itemLeft;

export const InputItemRight = forwardRef<HTMLDivElement, ValliumInputItemProps>(
	({ children, ...props }, ref) => {
		return (
			<InputItem ref={ref} {...props}>
				{children}
			</InputItem>
		);
	}
);
InputItemRight.displayName = validInputGroupChilds.itemRight;

export const Input = forwardRef<HTMLInputElement, Props>(
	({ variant = "outlined", className, type, ...props }, ref) => {
		const variants = {
			outlined: cn("bg-transparent border-neutral-700"),
			filled: cn("bg-neutral-800 border-transparent"),
		};
		return (
			<input
				type={type}
				ref={ref}
				className={cn(
					"w-full rounded-md px-2 transition-colors duration-150 text-white h-10 outline-none border focus:border-vallium-500",
					variants[variant],
					type === "file" && "pt-1",
					className
				)}
				{...props}
			/>
		);
	}
);
Input.displayName = "ValliumInput";
