describe('Map Layer Toggle Tests', () => {
  it('should toggle map layers', () => {
    cy.visit('http://localhost/dist/');
    cy.get('#mapmenu').click();
    cy.get('#mapmenu-window').should('be.visible');
    cy.get('input[type="checkbox"][value="marine"]').click({ force: true });

  });
});
