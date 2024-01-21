const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      IPHONE_PRICE: '87 970'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
