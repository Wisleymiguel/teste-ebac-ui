/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')
describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
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
   
   it ('deve fazer login com sucesso - usando massa de dados ', () => {
      cy.get('#username').type(perfil.usuario)
      cy.get('#password').type(perfil.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, wisley.teste (não é wisley.teste? Sair)')
  
    
   });

   it.only('deve fazer login com sucesso - usando Fixture ', () => {
    cy.fixture('perfil').then(dados=>{ 
      cy.get('#username').type(dados.usuario,{log:false})
      cy.get('#password').type(dados.senha,{log:false})
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, wisley.teste (não é wisley.teste? Sair)')
    

    })
    
   });

  });
  