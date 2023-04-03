/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,md,ts}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"]
			}
		}
	},
	plugins: []
};
