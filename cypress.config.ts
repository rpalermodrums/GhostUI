import { defineConfig } from 'cypress'
import setupPlugin from './cypress/plugins';

export default defineConfig({
  projectId: 'ipjs5c',
  retries: 2,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return setupPlugin(on, config)
    },
    baseUrl: 'http://localhost:1234',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
