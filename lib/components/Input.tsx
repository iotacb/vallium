import { Children, cloneElement } from "react";
import { cn } from "../main";
import { hasChildWithId } from "../misc/utils";

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
	const containsAddonLeft = hasChildWithId(
		children,
		validInputGroupChilds.addonLeft
	);
	const containsAddonRight = hasChildWithId(
		children,
		validInputGroupChilds.addonRight
	);
	const containsItemLeft = hasChildWithId(
		children,
		validInputGroupChilds.itemLeft
	);
	const containsItemRight = hasChildWithId(
		children,
		validInputGroupChilds.itemRight
	);
	const variantOfInput = Children.toArray(children)
		.filter((child: any) => child.props["variant"])
		.map((child: any) => child.props["variant"])[0];
	// const clones = Children.toArray(children).map((child: any) => {
	// 	if (
	// 		child.type.id === validInputGroupChilds.item ||
	// 		child.type.id === validInputGroupChilds.itemLeft ||
	// 		child.type.id === validInputGroupChilds.itemRight ||
	// 		child.type.id === validInputGroupChilds.addon ||
	// 		child.type.id === validInputGroupChilds.addonLeft ||
	// 		child.type.id === validInputGroupChilds.addonRight
	// 	) {
	// 		return cloneElement(child, { ...child.props });
	// 	} else if (child.type.id === validInputGroupChilds.input) {
	// 		return cloneElement(child, {
	// 			...child.props,
	// 			className: `
	// 			${containsAddonLeft ? "rounded-l-none" : ""}
	// 			${
	// 				containsAddonLeft && child.props.variant === "outlined"
	// 					? "leh border-l-0 meh"
	// 					: ""
	// 			}
	// 			${containsAddonRight ? "rounded-r-none" : ""}
	// 			${containsItemLeft ? "pl-10" : ""}
	// 			${containsItemRight ? "pr-10" : ""}
	// 			`,
	// 		});
	// 	} else {
	// 		console.error(
	// 			"'Vallium InputGroup' contains a child that is not part of 'Vallium Input'. It may not behave like you expect!"
	// 		);
	// 		return cloneElement(child, { ...child.props });
	// 	}
	// });
	const clones = Children.map(children, (child: any) => {
		if (child == null || child.type == null) return;
		if (
			child.type.id === validInputGroupChilds.item ||
			child.type.id === validInputGroupChilds.itemLeft ||
			child.type.id === validInputGroupChilds.itemRight ||
			child.type.id === validInputGroupChilds.addon
		) {
			return cloneElement(child, { ...child.props });
		} else if (child.type.id === validInputGroupChilds.addonLeft) {
			return cloneElement(child, {
				...child.props,
				className: `
				${child.props.className ? child.props.className : ""}
				${variantOfInput !== "filled" ? "border-r-0" : ""}
				`,
			});
		} else if (child.type.id === validInputGroupChilds.addonRight) {
			return cloneElement(child, {
				...child.props,
				className: `
				${child.props.className ? child.props.className : ""}
				${variantOfInput !== "filled" ? "border-l-0" : ""}
				`,
			});
		} else if (child.type.id === validInputGroupChilds.input) {
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

export const InputAddon = ({
	children,
	className,
	...props
}: ValliumInputAddonProps) => {
	return (
		<div
			{...props}
			className={cn(
				"bg-neutral-800 grid place-content-center px-3 border border-neutral-700 valliumInputAddon",
				className
			)}
		>
			{children}
		</div>
	);
};
InputAddon.id = validInputGroupChilds.addon;

export const InputAddonLeft = ({
	children,
	className,
	...props
}: ValliumInputAddonProps) => {
	return (
		<InputAddon className={cn("rounded-l-md", className)} {...props}>
			{children}
		</InputAddon>
	);
};
InputAddonLeft.id = validInputGroupChilds.addonLeft;

export const InputAddonRight = ({
	children,
	className,
	...props
}: ValliumInputAddonProps) => {
	return (
		<InputAddon className={cn("rounded-r-md", className)} {...props}>
			{children}
		</InputAddon>
	);
};
InputAddonRight.id = validInputGroupChilds.addonRight;

export const InputItem = ({
	children,
	className,
	...props
}: ValliumInputItemProps) => {
	return (
		<div
			{...props}
			className={cn(
				"absolute h-10 w-10 text-white grid place-content-center",
				className
			)}
		>
			{children}
		</div>
	);
};
InputItem.id = validInputGroupChilds.item;

export const InputItemLeft = ({
	children,
	className,
	...props
}: ValliumInputItemProps) => {
	return (
		<InputItem {...props} className={cn("left-0", className)}>
			{children}
		</InputItem>
	);
};
InputItemLeft.id = validInputGroupChilds.itemLeft;

export const InputItemRight = ({
	children,
	className,
	...props
}: ValliumInputItemProps) => {
	return (
		<InputItem {...props} className={cn("right-0", className)}>
			{children}
		</InputItem>
	);
};
InputItemRight.id = validInputGroupChilds.itemRight;

export const Input = ({ variant = "outlined", className, ...props }: Props) => {
	const variants = {
		outlined: cn("bg-transparent border-neutral-700"),
		filled: cn("bg-neutral-800 border-transparent"),
	};
	return (
		<input
			className={cn(
				"w-full rounded-md px-2 transition-colors duration-150 text-white h-10 outline-none border focus:border-vallium-500",
				variants[variant],
				className
			)}
			{...props}
		/>
	);
};
Input.id = "ValliumInput";
