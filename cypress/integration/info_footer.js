// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

describe('Control info footer', () => {
    it('Check info title', function () {
        cy.visit('/');

        cy.get('.info > :nth-child(1)')
            .contains('Double-click to edit a todo')
            .should('be.visible');
    });


    it('Check Created by title', function () {
        cy.get('.info > :nth-child(2)')
            .contains('Created by')
            .should('be.visible');
    });


    it('Check reference on web Created by petehunt ', function () {
        cy.get('.info > :nth-child(2)')
            .contains('Created by')
            .should('be.visible');

        cy.get(':nth-child(2) > a')
            .should('have.attr', 'href', 'http://github.com/petehunt/') // no page load!


        // clicking the anchor causes the browser to follow the link
        cy.get(':nth-child(2) > a')
            .click()
        cy.url()
            .should('include', '/petehunt/')
        cy.url()
            .should('eq', 'https://github.com/petehunt/')

        cy.wait(2000)
        cy.visit('/');
        cy.wait(2000)
    });

    it('Check reference on web Part of TodoMVC', function () {
        cy.get('.info > :nth-child(3)')
            .contains('Part of')
            .should('be.visible');

        cy.get(':nth-child(3) > a')
            .should('have.attr', 'href', 'http://todomvc.com') // no page load!


        // clicking the anchor causes the browser to follow the link
        cy.get(':nth-child(3) > a')
            .click()
        // cy.url()
        //     .should('include', '/todomvc.com') // => true
        cy.url()
            .should('eq', 'https://todomvc.com/') // => true

        cy.wait(2000)
        cy.visit('/');
    });
});
