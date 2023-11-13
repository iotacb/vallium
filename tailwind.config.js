/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./lib/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			height: {
				dvh: "100dvh",
			},
			width: {
				dvw: "100dvw",
			},
			colors: {
				vallium: {
					50: "#eef9ff",
					100: "#d9f2ff",
					200: "#bbe9ff",
					300: "#8cdcff",
					400: "#56c6ff",
					500: "#2eaaff",
					600: "#188cf8",
					700: "#1178ee",
					800: "#145db9",
					900: "#174f91",
					950: "#133158",
				},
			},
		},
	},
	plugins: [],
};
