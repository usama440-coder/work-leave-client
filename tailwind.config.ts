/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // important: '#__next',

  theme: {
    screens: {
      'sm': '640px',
      'md': '900px',
      'lg': '1200px',
      'xl': '1536px'
    },
    colors: {
      'emerald': {
        500: '#128D6C'
      },
      'gray': {
        500: '#F6F6F6'
      }
    },
    extend: {
      boxShadow: {
        'xl': '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  // corePlugins: {
  //   preflight: false
  // },
  plugins: [
  ],
}

