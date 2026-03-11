describe('Testes de Interface e Componentes (UI)', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io');
  });

  context('Validação de Componentes', () => {
    it('deve verificar se elementos específicos (menus e modais) aparecem e desaparecem', () => {
      // Exemplo: menu suspenso (dropdown)
      cy.get('.dropdown-toggle').first().click();
      cy.get('.dropdown-menu').should('be.visible');

      // Clicar fora ou em outro elemento para fechar
      cy.get('h1').click();
      cy.get('.dropdown-menu').should('not.be.visible');
    });
  });

  context('Teste de Responsividade', () => {
    const viewports = ['iphone-6', 'ipad-2', [1280, 720]];

    viewports.forEach((viewport) => {
      it(`deve adaptar a interface para o tamanho: ${viewport}`, () => {
        if (Cypress._.isArray(viewport)) {
          cy.viewport(viewport[0], viewport[1]);
        } else {
          cy.viewport(viewport);
        }

        // Validar se o menu de navegação é visível ou se recolhe para um menu hambúrguer
        if (viewport === 'iphone-6') {
          cy.get('.navbar-toggle').should('be.visible');
        } else {
          cy.get('.navbar-toggle').should('not.be.visible');
        }
      });
    });
  });
});
