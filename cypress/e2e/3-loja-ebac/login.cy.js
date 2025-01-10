describe("Funcionalidade: Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("matheuscarmofeliciano@gmail.com");
    cy.get("#password").type("qateste123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, matheuscarmofeliciano (não é matheuscarmofeliciano? Sair)"
    );
  });
});
