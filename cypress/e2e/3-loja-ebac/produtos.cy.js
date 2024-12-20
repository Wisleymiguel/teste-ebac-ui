 <reference types="cypress"/>

describe('Funcionalidade: Produtos ', () => {
beforeEach(() => {
    cy.visit('produtos')
});

    it('Deve selecionar um protudo da lista ', () => {
        cy.get('.product-block') . last()
        .click()

        cy.get('#tab-title-description > a').should('exist')
    });
});