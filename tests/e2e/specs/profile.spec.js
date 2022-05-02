describe('ProfileView.vue testing', () => {

    it('check visit to profile page and update with empty username', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/profile');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="password"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });

    })

    it('check visit to profile page and update with empty password', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/profile');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').clear();
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });

    })

    it('check visit to profile page and update with valid credentials', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/profile');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').clear();
        cy.get('input[name="password"]').clear();
        cy.get('input[name="username"]').type('default2');
        cy.get('input[name="password"]').type('2222');
        cy.contains('button', 'Update').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Credentials were updated')
        });
    })

    it('check visit to profile page and logout', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/profile');

        cy.contains('button', 'Logout').click();
        cy.url().should('contain', '/login');
    })
})