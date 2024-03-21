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
					A: "#C7E9C0", // Light Green
					B: "#C7E9F1", // Light Blue
					1: "#D0BFFF",
					2: "#DFCCFB",
					3: "#D8BFD8",
					4: "#D8BFD8",
					5: "#B9F3FC",
					6: "#AEE2FF",
					7: "#93C6E7",
					8: "#FEDEFF",
				},
			},
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
};
