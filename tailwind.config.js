/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./src/components/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				primary: "#0A2463",
				secondary: "#DB2B39",
				// black: "242423",
				darkGrey: "#D9D9D9",
				background: "#F2F2F2",
				accepted: "#4682B4",
				ongoing: "#2297F1",
				delivered: "#8BC14B",
				checked: "#FFB627",
				alert: "#F04337",
				tag: {
					A: "#C6E0B3", // Light Green
					B: "#BED6A9", // Light Blue
					1: "#F8CCCC",
					2: "#F5BBBB",
					3: "#B9D6E2",
					4: "#AFE0E6",
					5: "#FFD9B3",
					6: "#FFE4B5",
					7: "#CBB6D8",
					8: "#C9AADB",
					count: "#C8C3B7",
				},
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
};
