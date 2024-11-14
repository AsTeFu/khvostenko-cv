/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html}'],
	theme: {
		fontSize: {
      h1: ['2.125rem', { lineHeight: '2.25rem', fontWeight: '800' }],
      h2: ['1.75rem', { lineHeight: '2rem', fontWeight: '700' }],
      h3: ['1.35rem', { lineHeight: '1.5rem', fontWeight: '700' }],
      h4: ['1.2rem', { lineHeight: '1.5rem', fontWeight: '500' }],
      p: ['1.125rem', { lineHeight: 1.25, fontWeight: '500' }],
      small: ['1rem', { lineHeight: '1rem', fontWeight: '500' }],
    },
		fontFamily: {
			nunito: ['Nunito Sans', 'sans-serif'],
		},
	},
	plugins: [],
}
