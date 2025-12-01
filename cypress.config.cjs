const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    },
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx,vue}'
  },
  video: false,
  screenshotsFolder: 'cypress/screenshots'
})


