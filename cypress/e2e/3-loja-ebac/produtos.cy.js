describe("Funcionalidade:produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });
  it("Deve selecionar um produto da lista", () => {
    cy.get(" .product-block")
    //.eq(3)
    .contains('Arcadio Gym Short')
    .click()
    cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Arcadio Gym Short')
  });
});
