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
				background: "#F2F2F2",
				accepted: "#4682B4",
				ongoing: "#2297F1",
				delivered: "#8BC14B",
				checked: "#FFB627",
				alert: "#F04337",
				tag: {
					1: "#7BD3EA",
					2: "#A1EEBD",
					3: "#F6F7C4",
					4: "#F6D6D6",
					5: "#B9F3FC",
					6: "#AEE2FF",
					7: "#93C6E7",
					8: "#FEDEFF",
				},
			},
		},
		width: {
			312: "312px",
			61: "61px",
			360: "360px",
		},
		height: {
			172: "172px",
			24: "24px",
			840: "840px",
		},
		fontSize: {
			8: "8px",
			10: "10px",
		},
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
};
