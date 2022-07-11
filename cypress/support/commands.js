// ***********************************************
// This example commands.js shows you how to
// create the custom commands: 'createDefaultTodos'
// and 'createTodo'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************

// Get element with selector [data-reactid]
Cypress.Commands.add('getByReactId', (selector, ...args) => {
    return cy.get(`[data-reactid="${selector}"]`, ...args)
});

// Get element with class selector 
Cypress.Commands.add('getByClass', (selector, ...args) => {
    return cy.get(`"${selector}"`, ...args)
});

Cypress.Commands.add('addTodoItem', todo => {
    cy.getByReactId('.0.0.1')
        .type(todo)
        .type('{enter}');
});

Cypress.Commands.add('getAllTodoItems', () => {
    return cy.get('.todo-list > li');
});

Cypress.Commands.add('getActiveTodoItems', () => {
    return cy.get('.todo-list > li')
        .not(".completed");
});

Cypress.Commands.add('getCompletedTodoItems', () => {
    return cy.get('.todo-list > li')
        .filter(".completed");
});

Cypress.Commands.add('getNthTodoItem', (index = 0) => {
    return cy.get('.todo-list > li')
        .eq(index);
});


Cypress.Commands.add('getNthTodoItemLabel', (index = 0) => {
    return cy.get('.todo-list > li > .view > label')
        .eq(index);
});

Cypress.Commands.add('getNthTodoItemInput', (index = 0) => {
    return cy.get('.todo-list > li > input')
        .should('have.class', 'edit')
        .eq(index);
});

Cypress.Commands.add('completeNthTodoItem', (index = 0) => {
    cy.get('.todo-list > li > .view > .toggle')
        .eq(index)
        .check();
});

Cypress.Commands.add('editNthTodoItemInput', (index = 0, text) => {
    cy.get('.todo-list > li')
        .eq(index)
        .dblclick();
    cy.get('.todo-list > li > .edit')
        .eq(index)
        .clear()
        .type(text)
        .type('{enter}');
});

Cypress.Commands.add('deleteNthTodoItem', (index = 0) => {
    cy.get('.todo-list > li > .view > .destroy')
        .eq(index)
        .invoke('show')
        .click();

});

Cypress.Commands.add('checkCountOfLeftItems', count => {
    cy.getByReactId('.0.2.0')
        .should('have.class', 'todo-count')
        .children()
        .getByReactId('.0.2.0.0')
        .contains(count)
        .should('be.visible');

    cy.getByReactId('.0.2.0.2')
        .contains('item')
        .should('be.visible')
        .getByReactId('.0.2.0.3')
        .contains('left')
        .should('be.visible');
});

// we can use it for perfomace test with 1 000 000 000 todos
const perfomaceToDoCount = () => {
    return (Math.pow(10, 9))
}