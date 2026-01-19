import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3f5ac8',
        'dark-blue': '#17214b',
        'light-gray': '#d1d2d3',
      },
    },
  },
  plugins: [],
}
export default config