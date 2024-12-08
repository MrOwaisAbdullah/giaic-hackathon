import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		screens: {
			xs: '380px'
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		},
		colors: {
		  primary: "#029FAE",
		  secondary: "#F0F2F3",
		  background: "#ffffff",
		  accent: "#272343",
		  text: "#000000",
		  highlight: "#F5813F",
		  highlight2: "#01AD5A",
		  grey: "#636270"
		},
		container: {
			center: true,
			padding: '1rem'
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		writingMode: {
			'vertical-rl': 'vertical-rl',
			'horizontal-tb': 'horizontal-tb',
		  }
	}
},
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
