import styled, { FlattenSimpleInterpolation } from "styled-components";
import { variants } from "../misc/utils";

type Props = {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "ghost" | "danger";
	disabled?: boolean;
	roundness?: "pill" | number;
	className?: string;
	id?: string;
	onClick?: () => void;
};

export default function Button({
	children,
	variant = "primary",
	disabled,
	roundness = 5,
	className,
	id,
	onClick,
}: Props) {
	const vars = variants(variant, {
		primary: {
			style: `
				background-color: rgb(15 23 42);
				color: white;

				&:hover {
					background-color: rgb(51 65 85);
					color: rgb(241 245 249);
				}
			`,
		},
		ghost: {
			style: `
				background-color: transparent;
				border: 1px solid rgb(226 232 240);
				color: rgb(15 23 42);

				&:hover {
					background-color: rgb(241 245 249);
				}
			`,
		},
		danger: {
			style: `
				background-color: rgb(255 77 79);
				color: white;

				&:hover {
					background-color: rgb(255 120 117);
				}

				&:focus {
					outline: 2px solid rgb(255 77 79);
					outline-offset: 2px;
					box-shadow: 0 0 0 2px transparent;
				}
			`,
		},
	});

	return (
		<ButtonComponent
			onClick={onClick}
			id={id}
			roundness={roundness}
			className={className}
			variant={vars}
			disabled={disabled}
		>
			{children}
		</ButtonComponent>
	);
}
type ButtonProps = {
	variant: FlattenSimpleInterpolation;
	roundness: string | number;
};

const ButtonComponent = styled.button<ButtonProps>`
	padding: 0 2rem;
	border: none;
	border-radius: ${(props) =>
		props.roundness === "pill" ? 9999 : props.roundness}px;
	font-size: 0.875rem;
	font-weight: 500;
	min-height: 2.75rem;
	transition: background-color 0.2s ease;

	&:focus {
		outline: 2px solid rgb(148 163 184);
		outline-offset: 2px;
		box-shadow: 0 0 0 2px transparent;
	}

	&:hover {
		cursor: pointer;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: rgb(0 0 0 / 0.04);
		color: rgb(0 0 0 / 0.25);
		border: 1px solid #d9d9d9;

		&:hover {
			background-color: rgb(0 0 0 / 0.04);
		}
	}

	${(props) => props.variant};
`;
