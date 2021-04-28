module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [require('@tailwindcss/forms')],
}
