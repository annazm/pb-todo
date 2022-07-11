/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to Get element with selector [data-reactid]
         * @example cy.getByReactId('.0.0.1')
         */
        getByReactId(selector, ...args);

        /**
         * Custom command to Add Todo Item with given name [todo]
         * @example cy.addTodoItem('todo1')
         */
        addTodoItem(todo);

        /**
         * Custom command to Add Todo Item with given name [todo]
         * @example cy.checkCountOfLeftItems(0)
         */
        checkCountOfLeftItems(count);

        /**
         * Custom command to Get TodoItem's label with given index [index]
         * @example cy.getNthTodoItemLabel(0)
         */
        getNthTodoItemLabel(index);

        /**
         * Custom command to Get TodoItem's input with given index [index]
         * @example cy.getNthTodoItemInput(0)
         */
        getNthTodoItemInput(index);

        /**
         * Custom command to Get all TodoItem <li> elements.
         * @example cy.getTodoItems(true)
         */
        getAllTodoItems();

        /**
         * Custom command to Get completed TodoItem <li> elements.
         * @example cy.getCompletedTodoItems(true)
         */
        getCompletedTodoItems();

        /**
         * Custom command to Get active TodoItem <li> elements.
         * @example cy.getActiveTodoItems(true)
         */
        getActiveTodoItems();

        /**
         * Custom command to Get TodoItem <li> element at index [index].
         * @example cy.getActiveTodoItems(true)
         */
        getNthTodoItem(index);

        /**
        * Custom command to Complete TodoItem <li> element at index [index].
        * @example cy.getActiveTodoItems(true)
        */
        completeNthTodoItem(index);

        /**
         * Custom command to Delete TodoItem <li> element at index [index].
         * @example cy.getActiveTodoItems(true)
         */
        deleteNthTodoItem(index);

        /**
         * Custom command to Edit input field of TodoItem element at index [index].
         * @example cy.getActiveTodoItems(true)
         */
        editNthTodoItemInput(index, text);
    }
}