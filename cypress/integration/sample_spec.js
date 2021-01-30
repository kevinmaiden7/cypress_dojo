describe("Cypress Test", () =>{

    it('first assert', () => {
        expect(true).to.equal(true);
    });

    it('first cypress test on a webpage', () => {
        //AAA Pattern
        cy.visit('https://example.cypress.io'); // Arrange
        cy.contains('type').click(); // Act
        cy.url().should('include', '/commands/actions'); // Assert

        cy.get('.action-email')
        .type('email@domain.com')
        .should('have.value', 'email@domain.com');
    });
});
