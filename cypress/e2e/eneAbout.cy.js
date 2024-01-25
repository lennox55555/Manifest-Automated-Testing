describe('Manifest Bar Tests', () => {
  it('should toggle the manifest bar', () => {
    cy.visit('http://localhost/dist/');
    cy.get('#minfo-hamburger').click();
    cy.get('#minfodetail').should('be.visible');
    cy.get('#minfo-hamburger').click();
    cy.get('#minfodetail').should('not.be.visible');
  });
});
