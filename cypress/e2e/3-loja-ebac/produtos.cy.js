import produtosPage from "../../support/page-objects/produtos.page";

describe("Funcionalidade:produtos", () => {
  beforeEach(() => {
    //cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
    produtosPage.visitarUrl()
  });
  it("Deve selecionar um produto da lista", () => {
    cy.get(" .product-block")
    //.eq(3)
    .contains('Arcadio Gym Short')
    .click()
    
  });

  it.only('Deve buscar um produto com sucesso', () => {
    let produto = 'Ajax Full-Zip Sweatshirt'
    produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
    cy.get('.product_title').should('contain', produto)
  });

  it('Deve visitar a página do produto', () => {
    produtosPage.buscarProduto('')
    
  });

  it('Deve adicionar o produto ao carrinho', () => {
    
  });
});
