describe('HomeView.vue testing', () => {

    it('check gamecells colors', () => {
        cy.visit('/')
        cy.get(".cell").each((el, index) => {
            if (parseInt(el.text(), 10) === index + 1) {
                cy.wrap(el).should('have.css', 'background-color', 'rgb(0, 128, 0)');
            } else {
                cy.wrap(el).should('have.css', 'background-color', 'rgb(255, 255, 255)');
            }
        });
    })

})