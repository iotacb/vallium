import {
	Children,
	cloneElement,
	useRef,
	forwardRef,
	useLayoutEffect,
	useState,
} from "react";
import { cn } from "../main";
import { hasChildWithDisplayName } from "../misc/utils";

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

export type ValliumInputAddonProps = {} & React.ComponentPropsWithoutRef<"div">;

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

	useLayoutEffect(() => {
		if (!leftAddonRef.current) return;
		setLeftAddonWidth(leftAddonRef.current.getBoundingClientRect().width);
	}, [leftAddonRef]);

	useLayoutEffect(() => {
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
				ref: leftAddonRef,
				className: `
				${child.props.className ? child.props.className : ""}
				${variantOfInput !== "filled" ? "border-r-0" : ""}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.addonRight) {
			return cloneElement(child, {
				...child.props,
				ref: rightAddonRef,
				className: `
				${child.props.className ? child.props.className : ""}
				${variantOfInput !== "filled" ? "border-l-0" : ""}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.itemLeft) {
			return cloneElement(child, {
				...child.props,
				style: {
					left: leftAddonWidth + "px",
				},
				className: `
				${child.props.className ? child.props.className : ""}
				${containsAddonLeft ? "" : "left-0"}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.itemRight) {
			return cloneElement(child, {
				...child.props,
				style: {
					right: rightAddonWidth + "px",
				},
				className: `
				${child.props.className ? child.props.className : ""}
				${containsAddonRight ? "" : "right-0"}
				`,
			});
		} else if (child.type.displayName === validInputGroupChilds.input) {
			return cloneElement(child, {
				...child.props,
				className: `
				${child.props.className ? child.props.className : ""}
				${containsAddonLeft ? "rounded-l-none" : ""}
				${containsAddonRight ? "rounded-r-none" : ""}
				${containsItemLeft ? "pl-10" : ""}
				${containsItemRight ? "pr-10" : ""}
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
	({ children, className, ...props }, ref) => {
		return (
			<div
				{...props}
				ref={ref}
				className={cn(
					"bg-neutral-800 grid place-content-center px-3 border border-neutral-700 valliumInputAddon",
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
					type === "file" ? "pt-1" : "",
					className
				)}
				{...props}
			/>
		);
	}
);
Input.displayName = "ValliumInput";
