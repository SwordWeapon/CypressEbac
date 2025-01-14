describe("Funcionalidade: Login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it.only("Deve fazer login com sucesso", () => {
    cy.get("#username").type("matheuscarmofeliciano@gmail.com");
    cy.get("#password").type("qateste123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, matheuscarmofeliciano (não é matheuscarmofeliciano? Sair)"
    );
  });
  it.only("Deverá exibir uma mensagem de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("matheuscarmofeliciano@teste.com");
    cy.get("#password").type("qateste123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
    );
    cy.get(".woocommerce-error").should("exist");
  });
  it.only("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
    cy.get("#username").type("matheuscarmofeliciano@gmail.com");
    cy.get("#password").type("qateste4123");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should(
      "contain",
      "Erro: A senha fornecida para o e-mail matheuscarmofeliciano@gmail.com está incorreta. Perdeu a senha?"
    );
    cy.get(".woocommerce-error").should("exist");
  });
});
