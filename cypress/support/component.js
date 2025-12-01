import { mount } from 'cypress/vue'

// Add `cy.mount` command for Vue component testing
Cypress.Commands.add('mount', mount)

// Example default options can be set here if needed
// e.g., global styles or plugins


