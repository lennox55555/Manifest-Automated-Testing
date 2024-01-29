describe('About Page Tests', () => {
  it('should display all elements and verify links', () => {
    cy.visit('http://localhost/dist/about.html');

    cy.get('#infoborder').should('exist');
    cy.get('#minfoheader').should('exist');
    cy.get('#minfodetail').should('exist');
    cy.get('h1').contains('About Manifest').should('be.visible');
    cy.get('.splash-image').should('exist');

    cy.get('a[href="https://supplystudies.com/syllabus/#reversesourcing"]').should('be.visible').and('have.attr', 'href', 'https://supplystudies.com/syllabus/#reversesourcing');
    cy.get('a[href="https://github.com/hock/Manifest"]').should('be.visible').and('have.attr', 'href', 'https://github.com/hock/Manifest');

    cy.get('a[rel="license"]').should('be.visible').and('have.attr', 'href', 'http://creativecommons.org/licenses/by/4.0/');
  });
});
