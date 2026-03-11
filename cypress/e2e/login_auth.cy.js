describe('Login e Autenticação', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
  });

  it('deve realizar login com credenciais corretas e redirecionar para o dashboard', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Validação de redirecionamento (URL contém /inventory)
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('deve exibir mensagem de erro para credenciais incorretas', () => {
    cy.get('[data-test="username"]').type('usuario_invalido');
    cy.get('[data-test="password"]').type('senha_incorreta');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });
});
