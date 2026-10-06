/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./hoc/**/*.{js,ts,jsx,tsx,mdx}",
		"./constants/**/*.{js,ts,jsx,tsx,mdx}",
		"./utils/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#6366f1",
				secondary: "#06b6d4",
				tertiary: "#4f46e5",
				quaternary: "#38bdf8",
				five: "#a5b4fc",

				ctnPrimaryLight: "#0f172a",
				ctnSecondaryLight: "#475569",

				bgPrimaryDark: "#0a0e1a",
				bgSecondaryDark: "#111827",
				bgPrimaryLight: "#f8fafc",
				bgSecondaryLight: "#ffffff",

				ctnPrimaryDark: "#f8fafc",
				ctnSecondaryDark: "#94a3b8"
			},
			boxShadow: {
				card: "0px 20px 40px -15px rgba(0, 0, 0, 0.45)",
				glow: "0px 0px 30px rgba(99, 102, 241, 0.25)",
				cyanGlow: "0px 0px 30px rgba(6, 182, 212, 0.25)"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(180deg, #070b16 0%, #0a0e1a 50%, #070b16 100%)",
				bgSecondaryDark:
					"linear-gradient(180deg, #0f172a 0%, #111827 100%)",
				bgPrimaryLight:
					"linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
				bgSecondaryLight:
					"linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)"
			},
			screens: {
				xs: "360px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px"
			}
		}
	},
	plugins: []
};
