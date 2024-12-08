/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

    it('Deve fazer login com sucesso', () => { 
      cy.get('#username').type('wisley.teste@teste.com.br')
      cy.get('#password').type('teste@123')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, wisley.teste (não é wisley.teste? Sair)')
    });
  
    it('deve exibir uma mensagem de erro ao inserir usuário invalido  ', () => {
      cy.get('#username').type('wisley.@teste.com.br')
      cy.get('#password').type('teste@123')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain','Endereço de e-mail desconhecido.')
    });

    it('deve exibir uma mensagem de erro ao senha invalida   ', () => {
     cy.get('#username').type('wisley.teste@teste.com.br')
     cy.get('#password').type('teste@000')
     cy.get('.woocommerce-form > .button').click()

     cy.get('.woocommerce-error').should('exist')
   });
  });
  