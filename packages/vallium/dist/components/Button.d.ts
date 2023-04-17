/// <reference types="react" />
type Props = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "danger";
    disabled?: boolean;
    roundness?: "pill" | number;
    className?: string;
    id?: string;
    onClick?: () => void;
};
export default function Button({ children, variant, disabled, roundness, className, id, onClick, }: Props): JSX.Element;
export {};
