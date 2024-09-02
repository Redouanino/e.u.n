/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#fac400',
          'primary-focus': '#f8ad0d',
          'primary-content': '#2b2b2b',

          'secondary': '#0080f0',
          'secondary-focus': '#004bbd',
          'secondary-content': '#ffffff',

          'accent': '#37cdbe',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          'neutral': '#3b424e',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-150': '#fcfcfd',
          'base-200': '#f9fafb',
          'base-250': '#e8ecf0',
          'base-300': '#ced3d9',
          'base-content': '#1e2734',

          'info': '#1c92f2',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
      {
        dark: {
          'primary': '#f9d13e',
          'primary-focus': '#f8ad0d',
          'primary-content': '#2b2b2b',

          'secondary': '#0080f0',
          'secondary-focus': '#004bbd',
          'secondary-content': '#ffffff',

          'accent': '#36ecda',
          'accent-focus': '#2ba69a',
          'accent-content': '#ffffff',

          'neutral': '#2a2e37',
          'neutral-focus': '#16181d',
          'neutral-content': '#ffffff',

          'base-100': '#3b424e',
          'base-150': '#333a47',
          'base-200': '#2a2e37',
          'base-250': '#20232a',
          'base-300': '#16181d',
          'base-content': '#ebecf0',

          'info': '#66c7ff',
          'success': '#87cf3a',
          'warning': '#e1d460',
          'error': '#ff6b6b',

          '--rounded-box': '1rem',
          '--rounded-btn': '.5rem',
          '--rounded-badge': '1.9rem',

          '--animation-btn': '.25s',
          '--animation-input': '.2s',

          '--btn-text-case': 'uppercase',
          '--navbar-padding': '.5rem',
          '--border-btn': '1px',
        },
      },
    ],
  },
};