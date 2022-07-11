// type definitions for Cypress object "cy"
/// <reference types="cypress" />

//const { constant } = require("cypress/types/lodash");

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

describe('Count of todo-items', function () {
    before(() => {
        cy.visit('/');
    });

    let bulk_count = 10;
    it('Check how many todo-items exist', () => {

        for (let index = 0; index < bulk_count; index++) {
            cy.addTodoItem("todo" + index);
            cy.checkCountOfLeftItems(index + 1)
        }

        cy.getAllTodoItems()
            .should('have.length', bulk_count);

        for (let index = 0; index < bulk_count; index++) {
            cy.checkCountOfLeftItems(bulk_count - index)
            cy.deleteNthTodoItem(-1);
        }
    });
});