describe('LoginView.vue testing', () => {
    it('check visit to login page and login with empty username', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').should('contain', '');
        cy.get('input[name="password"]').type('pass');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });
        cy.url().should('contain', '/login');
    })

    it('check visit to login page and login with empty password', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="password"]').type('user');
        cy.get('input[name="password"]').should('contain', '');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Please enter username and password')
        });
        cy.url().should('contain', '/login');
    })

    it('check visit to login page and login with wrong username', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').type('user');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('No user with such username')
        });
    })

    it('check visit to login page and login with wrong password', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        const alert = cy.stub();
        cy.on('window:alert', alert);

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('2121');
        cy.get('button').contains('Login').click().then(() => {
            expect(alert.getCall(0)).to.be.calledWith('Wrong password')
        });
    })

    it('check visit to login page and login valid credentials', () => {
        cy.visit('/');
        cy.get('nav').contains('Log In').click();
        cy.url().should('include', '/login');

        cy.get('input[name="username"]').type('default');
        cy.get('input[name="password"]').type('1111');
        cy.get('button').contains('Login').click();
        cy.url().should('contain', '/profile');
    })
})