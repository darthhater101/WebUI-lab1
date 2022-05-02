describe('SignupView.vue testing', () => {
    it('check visit to sign up page and sign up with empty username', () => {
        cy.visit('/');
        cy.get('nav').contains('Sign Up').click();
        cy.url().should('include', '/signup');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').should('contain', '');
        cy.get('input[name="password"]').type('pass');
        cy.get('button').contains('Sign Up').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });
        cy.url().should('contain', '/signup');
    })

    it('check visit to sign up page and sign up with empty password', () => {
        cy.visit('/');
        cy.get('nav').contains('Sign Up').click();
        cy.url().should('include', '/signup');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="password"]').type('user');
        cy.get('input[name="password"]').should('contain', '');
        cy.get('button').contains('Sign Up').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });
        cy.url().should('contain', '/signup');
    })

    it('check visit to sign up page and sign up with valid credentials', () => {
        cy.visit('/');
        cy.get('nav').contains('Sign Up').click();
        cy.url().should('include', '/signup');

        cy.get('input[name="username"]').type('username');
        cy.get('input[name="password"]').type('password');
        cy.get('button').contains('Sign Up').click();
        cy.url().should('contain', '/login');
    })

})