describe('AboutView.vue testing', () => {
    it('check visit to about page and header on it', () => {
        cy.visit('/');
        cy.get('nav').contains('About').click();
        cy.url().should('include', '/about');
        cy.contains('h1', 'About Puzzle 15');
    })

    it('check visit to about page and image size', () => {
        cy.visit('/');
        cy.get('nav').contains('About').click();
        cy.url().should('include', '/about');
        cy.get('.about').find('img').should('have.css', 'width', '500px');
        cy.get('.about').find('img').should('have.css', 'height', '500px');
    })
})