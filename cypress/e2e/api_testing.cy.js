describe('Testes de API e Backend', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  context('Validação de API (Back-end)', () => {
    it('deve realizar requisição cy.request() e verificar o status 200 e o JSON da resposta', () => {
      cy.request('GET', `${apiUrl}/1`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id', 1);
        expect(response.body).to.have.property('title');
        expect(response.body).to.have.property('body');
      });
    });

    it('deve realizar requisição POST para simular criação de um registro', () => {
      cy.request('POST', apiUrl, {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', 'foo');
      });
    });
  });

  context('Interceptação de Requisições (Stubbing)', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('deve interceptar cy.intercept() para simular um erro do servidor (500)', () => {
      // Simulação de erro interno do servidor ao clicar em um botão de comentário
      cy.intercept('GET', '**/comments/*', {
        statusCode: 500,
        body: { error: 'Internal Server Error' },
      }).as('getCommentError');

      cy.get('.network-btn').click();

      cy.wait('@getCommentError').then((interception) => {
        expect(interception.response.statusCode).to.equal(500);
      });
      // Validar a reação do front-end ao erro...
      // cy.get('.error-message').should('be.visible').and('contain', 'Internal Server Error');
    });

    it('deve simular latência de rede para testar indicadores de carregamento (loading spinners)', () => {
      // Simulação de atraso (delay) de 3 segundos
      cy.intercept('GET', '**/comments/*', {
        delay: 3000,
        fixture: 'example.json'
      }).as('delayedRequest');

      cy.get('.network-btn').click();
      
      // Validar se o carregamento aparece antes do resultado final
      // cy.get('.loading-spinner').should('be.visible');
      cy.wait('@delayedRequest');
      // cy.get('.loading-spinner').should('not.exist');
    });
  });
});
