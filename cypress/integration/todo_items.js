// type definitions for Cypress object "cy"
/// <reference types="cypress" />

//const { constant } = require("cypress/types/lodash");

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check
describe('Todo items', function () {
    before(() => {
        cy.visit('/');
    });

    it('Check if todo-item can be added', () => {
        cy.addTodoItem("todo");

        cy.getNthTodoItemLabel(-1)
            .contains('todo');

        cy.deleteNthTodoItem(-1);
    });

    it('Check if todo-item can be removed', () => {
        cy.addTodoItem("todo_removed");

        cy.deleteNthTodoItem(-1);

        cy.get('.todo-list > li')
            .should('not.exist');
    });

    it('Check if todo-item can be completed', () => {
        cy.addTodoItem("todo_completed");

        cy.completeNthTodoItem(-1);

        cy.getNthTodoItem(-1)
            .should('have.class', 'completed');

        cy.deleteNthTodoItem(-1);
    });

    it('Check if added todo-item is not completed', () => {
        cy.addTodoItem("todo_not_completed");

        cy.getNthTodoItem(-1)
            .should('not.have.class', 'completed');

        cy.deleteNthTodoItem(-1);
    });

    it('Check if todo-item can be edited', () => {
        cy.addTodoItem("todo_before_edit");

        cy.editNthTodoItemInput(-1, "todo_after_edit");

        cy.getNthTodoItemLabel(-1)
            .contains('todo_after_edit');
        cy.deleteNthTodoItem(-1);
    });

    it('Check todo items bulk add', () => {
        let bulk_count = 10;
        for (let index = 0; index < bulk_count; index++) {
            cy.addTodoItem("todo" + index);
        }

        cy.getAllTodoItems()
            .should('have.length', bulk_count);

        for (let index = 0; index < bulk_count; index++) {
            cy.deleteNthTodoItem(-1);
        }
    });

    it('Check clear completed button clears completed items', function () {
        let bulk_count = 5;
        for (let index = 0; index < bulk_count; index++) {
            cy.addTodoItem("todo" + index);
            cy.completeNthTodoItem(-1);
        }

        cy.getByReactId('.0.2.2')
            .should('have.class', 'clear-completed')
            .contains('Clear completed')
            .click()

        cy.get('.todo-list > .completed')
            .should('not.exist');
    });

    describe('Todo item filters', () => {
        it('Check completed filter', function () {
            let bulk_count = 5;
            for (let index = 0; index < bulk_count; index++) {
                cy.addTodoItem("todo" + index);
                cy.completeNthTodoItem(-1);
            }

            cy.getByReactId('.0.2.1.4.0')
                .contains('Completed')
                .click()

            cy.getAllTodoItems()
                .should('have.class', 'completed')
                .and('have.length', bulk_count)

            for (let index = 0; index < bulk_count; index++) {
                cy.deleteNthTodoItem(-1);
            }
        });

        it('Check active filter', function () {
            let bulk_count = 5;
            for (let index = 0; index < bulk_count; index++) {
                cy.addTodoItem("todo" + index);
            }

            cy.getByReactId('.0.2.1.2.0')
                .contains('Active')
                .click()

            cy.getAllTodoItems()
                .should('not.have.class', 'completed')
                .and('have.length', bulk_count)

            for (let index = 0; index < bulk_count; index++) {
                cy.deleteNthTodoItem(-1);
            }
        });

        it('Check all filter', function () {
            let bulk_count = 5;
            for (let index = 0; index < bulk_count; index++) {
                cy.addTodoItem("todo" + index);
            }

            //complete some of todo-items
            cy.completeNthTodoItem(-1);
            cy.completeNthTodoItem(-2);

            cy.getByReactId('.0.2.1.0.0')
                .contains('All')
                .click()

            cy.getAllTodoItems()
                .and('have.length', bulk_count)

            for (let index = 0; index < bulk_count; index++) {
                cy.deleteNthTodoItem(-1);
            }
        });
    });
});