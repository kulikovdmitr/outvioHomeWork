const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    video: false
  },

  component: {
    //baseUrl: 'http://localhost:3001',
    "devServer": {
      "framework": "create-react-app",
      "bundler": "webpack"
    },
  },
})