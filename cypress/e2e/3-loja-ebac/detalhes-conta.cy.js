<reference types="cypress" />

describe('Funcionalidade: Detalhes da Conta', () => {
  
    let dadosPerfil; // Variável para armazenar os dados do fixture
  
    before(() => {    
      // Carrega o fixture apenas uma vez
      cy.fixture('perfil').then((perfil) => {
        dadosPerfil = perfil;
      });
    });
  
    beforeEach(() => {    
      cy.visit('minha-conta/edit-account'); 
      cy.login(dadosPerfil.usuario, dadosPerfil.senha);
    });
    
    it('Deve completar os detalhes da conta com sucesso', () => {
      cy.detalhesConta('Wisley', 'Pereira', 'wisley.qa'); 
      cy.get('.woocommerce-MyAccount-content').should('exist'); 
    });
  });
  