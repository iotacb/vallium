# ValliumUI
Small UI library for react projects.
Build with the vallium design system.

# Be aware that this library is still experimental and in development!

# Documentation
For better documentation and examples, please see the docs [here](https://ui.vallium.dev/)

# Installation

## Style compilation
Add the node module package to the content in the tailwind.config.js file to enable the compilation of the tailwind styles used by vallium.
```js
	content: [
		"./node_modules/valliumui/**/*.{js,ts,jsx,tsx}",
	],
```

## Colors
Add the follwing colors to the tailwind.config.js file in your project.

This is also where you can configure the colors used by vallium.
```js
theme: {
    extend: {
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
            }
        }
    }
}
```

## Example
Your final config should look something like this:

```js
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/valliumui/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
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
export default config;
```