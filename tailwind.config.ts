import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        showContent:{
          to:{
            transform:'translateY(0)',
            filter:'blur(0)',
            opacity:'1'
          }
        }
      },
      animation:{
        'show-content': 'showContent 0.5 0.7 ease-in-out 1 forwards'
      }
     },
  },
  plugins: [require('tailwind-animation-delay')],
};
export default config;
