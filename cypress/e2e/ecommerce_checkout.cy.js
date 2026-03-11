describe('Fluxo de E-commerce (Checkout)', () => {
  beforeEach(() => {
    // Login inicial para realizar o fluxo de checkout
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('deve adicionar um item ao carrinho e concluir a compra', () => {
    // 1. Adicionar item
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');

    // 2. Navegar para o carrinho
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack');

    // 3. Iniciar checkout
    cy.get('[data-test="checkout"]').click();
    cy.url().should('include', '/checkout-step-one.html');

    // 4. Preencher dados de envio
    cy.get('[data-test="firstName"]').type('Marcus');
    cy.get('[data-test="lastName"]').type('QA');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // 5. Finalizar compra (Checkout Overview)
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('[data-test="finish"]').click();

    // 6. Validar página de confirmação
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
