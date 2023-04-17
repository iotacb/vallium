import { ClassValue } from "clsx";
import { Variant } from "./types";
import { FlattenSimpleInterpolation } from "styled-components";
export declare function cn(...inputs: ClassValue[]): string;
export declare function variants(variant: string, variants: Variant, style?: string): FlattenSimpleInterpolation;
