module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#__next',
  theme: {
    extend: {},
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  plugins: [],
};
