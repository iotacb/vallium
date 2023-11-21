import React, { forwardRef, Children, cloneElement, useEffect } from "react";
import { Input, Stack, cn } from "../main";

type Props = ValliumPinProps & React.ComponentPropsWithoutRef<"div">;

export type ValliumPinProps = {};
export type ValliumPinInputProps = {
	onPinInput?: (e: React.KeyboardEvent) => void;
};

export const PinInput = forwardRef(
	({ className, children, ...props }: Props) => {
		const [currentPin, setCurrentPin] = React.useState<string>("");
		const [currentPinIndex, setCurrentPinIndex] = React.useState<number>(-1);
		const pinCount = Children.count(children);

		function updatePinIndex(event: React.KeyboardEvent) {
			if (event.key === "Backspace" && currentPin.length > 0) {
				setCurrentPin(currentPin.length > 1 ? currentPin.slice(0, -1) : "");
				setCurrentPinIndex(currentPinIndex - 1);
			} else if (event.key > "0" && event.key <= "9") {
				if (currentPin.length < pinCount) {
					setCurrentPin(currentPin + event.key);
					setCurrentPinIndex(currentPinIndex + 1);
				}
			}
		}

		useEffect(() => {
			focusPin(currentPinIndex);
		}, [currentPinIndex]);

		function focusPin(index: number) {
			document.getElementById("pinInput-" + index)?.focus();
		}

		useEffect(() => {
			console.log(currentPin);
		}, [currentPin]);

		const clones = Children.map(children, (child: any, index) => {
			if (child == null || child.type == null) return;
			return cloneElement(child, {
				...child.props,
				id: `pinInput-${index}`,
				onPinInput: updatePinIndex,
			});
		});
		return (
			<Stack row gap="2" {...props} className={cn(className)}>
				{clones}
			</Stack>
		);
	}
);

export const PinInputItem = forwardRef<HTMLInputElement, ValliumPinInputProps>(
	({
		className,
		children,
		placeholder = "○",
		onPinInput,
		...props
	}: ValliumPinInputProps & React.ComponentPropsWithoutRef<"div">) => {
		const [hasFocus, setHasFocus] = React.useState<boolean>(false);
		return (
			<Input
				autoComplete="off"
				placeholder={hasFocus ? "" : placeholder}
				onFocus={() => setHasFocus(true)}
				onBlur={() => setHasFocus(false)}
				onKeyDown={(event) => onPinInput && onPinInput(event)}
				type="tel"
				{...props}
				className={cn("w-10 text-center", className)}
			>
				{children}
			</Input>
		);
	}
);
PinInputItem.displayName = "ValliumPinInputItem";

function validate(value: string) {
	return /^[0-9]+$/.test(value);
}
