// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

describe('Home header', () => {
  before(() => {
    cy.visit('/');
  });
  it('Check if todos header exists and display', () => {
    cy.getByReactId('.0.0.1')
      .should('have.class', 'new-todo')
      .should('have.attr', "placeholder", "What needs to be done?");
    cy.getByReactId('.0.0')
      .get('h1')
      .contains("todos")
      .should('be.visible');
  });
});