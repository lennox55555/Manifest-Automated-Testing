const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o4nfoc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1480,
    viewportHeight: 720,
  },
});
