// type definitions for Cypress object "cy"
/// <reference types="cypress" />

//const { constant } = require("cypress/types/lodash");

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check
describe('Input field', function () {
    before(() => {
        cy.visit('/');
    });

    it('Check if todo input field exists and placeholder is displayed', () => {
        cy.getByReactId('.0.0.1')
            .should('have.class', 'new-todo')
            .should('have.attr', "placeholder", "What needs to be done?")
            .should('be.visible');
    });

    it('Check if todo input field allows to enter text', () => {
        cy.getByReactId('.0.0.1')
            .type("test");
        cy.getByReactId('.0.0.1')
            .should('have.value', 'test');
    });

    it('Check if todo input field is clickable', () => {
        cy.getByReactId('.0.0.1')
            .blur()
            .click();
        cy.getByReactId('.0.0.1')
            .should('be.focused');
    });

    //It is good to check maximum number of characters, 
    //but this application doesn't have it.
    it('Check maximum number of characters', () => {
        let long_input = "x".repeat(100)
        cy.getByReactId('.0.0.1')
            .clear()
            .type(long_input);
        cy.getByReactId('.0.0.1')
            .should('have.value', long_input);
    });

    it('Check if it clears input after enter key', () => {
        cy.getByReactId('.0.0.1')
            .clear()
            .type('Check if it clears input after enter key')
            .type('{enter}');

        cy.getByReactId('.0.0.1')
            .should('have.value', "");
    });

    it('Check if input field allows removing characters', () => {
        cy.getByReactId('.0.0.1')
            .clear()
            .type('Check if input field allows removing characters')
            .type('{backspace}');

        cy.getByReactId('.0.0.1')
            .should('have.value', "Check if input field allows removing character");
    });

})