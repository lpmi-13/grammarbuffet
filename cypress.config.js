const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: false,
    e2e: {
        baseUrl: "http://localhost:8080",
        specPattern: "cypress/e2e/**/*.test.js",
        supportFile: "cypress/support/e2e.js",
        setupNodeEvents(on, config) {
            return config;
        },
    },
});
