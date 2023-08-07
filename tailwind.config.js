/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 15px 35px rgba(0, 0, 0, 0.2)',
        neon: "0 15px 35px rgba(255, 255, 255, 0.2), 0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
        button:
          '-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)',
      },
      backgroundColor: {
        nav: ' #dde1e7',
      },
    },
    screens: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
  },
  plugins: [
    // to get the colors we can use the "theme" property
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');

      // loop through the colors
      for (const color in colors) {
        // Check if color is an object as some colors in
        // Tailwind are objects and some are strings
        if (typeof colors[color] === 'object') {
          // we opt in to use 2 colors
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];

          // Here we build the actual class name
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      // this adds the utility classes to Tailwind
      addUtilities(neonUtilities);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
