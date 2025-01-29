import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
		extend: {
			fontFamily: {
				noto: ['Noto Sans', 'sans-serif'],
				rubikScribble: ['Rubik Scribble', 'sans-serif'],
				rubikDoodleShadow: ['Rubik Doodle Shadow', 'sans-serif'],
			},
      screens: {
        'xs': '375px',
      },
			backgroundImage: {
				circle: "url('assets/images/bg-circle.png')",
				wave: "url('assets/images/bg-wave.png')",
			},
			colors: {
				beige: {
					50: '#FEF8F3',
				},
				pink: {
					100: '#FFF6F6',
					200: '#FFE4E9',
					300: '#FFD1DA',
					400: '#FFB8C9',
					500: '#FF9CB6',
					600: '#FF7EA1',
					700: '#FF3D74',
				},
			},
		},
	},
	plugins: [daisyui],
}