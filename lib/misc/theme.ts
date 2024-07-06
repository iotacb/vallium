export const colors = {
	gray: {
		DEFAULT: "#7D7F97",
		"50": "#E3E3E8",
		"100": "#D7D8DF",
		"200": "#C1C2CD",
		"300": "#AAACBB",
		"400": "#9396A9",
		"500": "#7D7F97",
		"600": "#62647A",
		"700": "#494A5B",
		"800": "#30313B",
		"900": "#17171C",
		"950": "#0A0A0D",
	},
	blue: {
		DEFAULT: "#2549DA",
		50: "#C2CCF5",
		100: "#B1BEF2",
		200: "#8EA0EC",
		300: "#6B83E6",
		400: "#4866E0",
		500: "#2549DA",
		600: "#1D39AA",
		700: "#15297A",
		800: "#0D194A",
		900: "#04091A",
		950: "#000102",
	},
	green: {
		DEFAULT: "#237637",
		50: "#56CC5F",
		100: "#4AC957",
		200: "#38BC4A",
		300: "#31A545",
		400: "#2A8D3E",
		500: "#237637",
		600: "#1C5E2E",
		700: "#154724",
		800: "#0E2F19",
		900: "#07180D",
		950: "#040C07",
	},
	red: {
		DEFAULT: "#D03B44",
		50: "#F4CFD1",
		100: "#F0BFC2",
		200: "#E89EA2",
		300: "#E07D83",
		400: "#D85C63",
		500: "#D03B44",
		600: "#AA2931",
		700: "#7D1E24",
		800: "#501317",
		900: "#22080A",
		950: "#0C0303",
	},
	orange: {
		DEFAULT: "#CE4D30",
		50: "#F1CDC4",
		100: "#EDBEB4",
		200: "#E6A293",
		300: "#DE8572",
		400: "#D66950",
		500: "#CE4D30",
		600: "#A13C25",
		700: "#732B1B",
		800: "#461A10",
		900: "#180906",
		950: "#010000",
	},
	brand: {
		DEFAULT: "#6C45E2",
		50: "#EAE4FB",
		100: "#DCD2F8",
		200: "#C0AFF3",
		300: "#A48CED",
		400: "#8868E8",
		500: "#6C45E2",
		600: "#4C20CF",
		700: "#3A199E",
		800: "#28116E",
		900: "#160A3D",
		950: "#0D0625",
	},
};

export const shadows = {
	"vallium-none": "",
	"vallium-flat": "1px 2px 2px rgba(0, 0, 0, 0.2)",
	"vallium-raised":
		"1px 2px 2px rgba(0, 0, 0, 0.1), 2px 4px 4px rgba(0, 0, 0, 0.1), 3px 6px 6px rgba(0, 0, 0, 0.1)",
	"vallium-floating":
		"1px 2px 2px rgba(0, 0, 0, 0.1), 2px 4px 4px rgba(0, 0, 0, 0.1), 4px 8px 8px rgba(0, 0, 0, 0.1), 8px 16px 16px rgba(0, 0, 0, 0.1), 16px 32px 32px rgba(0, 0, 0, 0.1)",
};

export const colorNames = Object.keys(colors) as Array<keyof typeof colors>;
export const colorShades = Object.keys(colors.gray) as Array<
	keyof typeof colors.gray
>;

export const getColor = (
	color: keyof typeof colors,
	shade: keyof typeof colors.gray
) => colors[color][shade];

export type ValliumColorName = keyof typeof colors;
export type ValliumColorShade = keyof typeof colors.gray;

export type ValliumColor = {
	name: ValliumColorName;
	shade: ValliumColorShade;
};
