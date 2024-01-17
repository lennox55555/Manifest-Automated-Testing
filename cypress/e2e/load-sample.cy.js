describe('Load Sample Tests', () => {
  it('should load a sample from dropdown', () => {
    cy.visit('http://localhost/dist/');
    cy.get('#minfo-hamburger').click();
    cy.get('#minfodetail').should('be.visible');
    cy.get('#load-samples').select('Western Electric Telephone (1927)');
    cy.get('#load-samples-btn').click();

  });
});
