const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    defaultCommandTimeout: 100000,
      pageLoadTimeout: 100000,
      responseTimeout: 45000,
      requestTimeout: 45000,
    
    "reporter": "cypress-multi-reporters",
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/report/results/mochawesome-report/result",
        "quite": true,
        "overwrite": false,
        "html": true,
        "json": false
    
  },
},
},
});
