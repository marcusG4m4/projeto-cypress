describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    // URL de exemplo para formulário de cadastro
    cy.visit('https://demo.wpeverest.com/user-registration/guest-registration-form/');
  });

  it('deve preencher formulário longo e submeter', () => {
    // Exemplo de preenchimento de campos variados
    cy.get('#first_name').type('Marcus');
    cy.get('#last_name').type('QA');
    cy.get('#user_email').type(`qa_${Date.now()}@example.com`);
    cy.get('#user_pass').type('Senha@123!');
    cy.get('#radio_1665627729_Male').check();
    
    // Simulação de preenchimento longo...
    cy.get('button[type="submit"]').click();

    // Verificação de sucesso
    cy.get('.ur-message').should('contain', 'User successfully registered.');
  });

  it('deve validar regras de campos (e-mail inválido e senha fraca)', () => {
    // E-mail inválido
    cy.get('#user_email').type('email_invalido');
    cy.get('#user_pass').focus().blur(); // Gatilho para validação se necessário
    
    cy.get('button[type="submit"]').click();
    
    // Mensagem de erro para o e-mail
    cy.get('#user_email-error').should('be.visible').and('contain', 'Please enter a valid email address.');
  });
});
