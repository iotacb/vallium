/** @type {import('tailwindcss').Config} */
import { colors, shadows } from "./lib/misc/theme";
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				vallium: {
					...colors,
				},
			},
			boxShadow: {
				// vallium: {
				...shadows,
				// },
			},
		},
	},
	plugins: [],
};
