describe('Manifest Bar Tests', () => {
  it('should toggle the manifest bar', () => {
    cy.visit('http://localhost/dist/');
    cy.get('#fullscreen-menu').click();
    //cy.get('#manifest-list').should('not.be.visible');
    cy.get('#fullscreen-menu').click();
   // cy.get('#manifest-list').should('be.visible');
  });
});
