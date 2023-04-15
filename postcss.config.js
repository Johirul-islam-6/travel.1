module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  theme: {
    fill: ({ theme }) => ({
      gray: theme('colors.gray')
    })
  }
}
