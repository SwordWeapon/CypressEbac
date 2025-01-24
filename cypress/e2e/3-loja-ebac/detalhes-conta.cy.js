describe('Funcionalidade: Detalhes da conta', () =>{
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/edit-account/')
        cy.fixture('perfil').then(login =>{
            cy.login1(login.usuario, login.senha)

        })
       
    });
    it('deve completar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Matheus', 'Feliciano', 'matheuscarmofeliciano')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})
