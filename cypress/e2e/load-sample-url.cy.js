describe('Load URL Sample Test', () => {
  it('should load a sample from a provided URL', () => {
    cy.visit('http://localhost/dist/');

    cy.get('#minfo-hamburger').click();

    cy.get('#minfodetail').should('be.visible');

    cy.get('#load-samples').select('URL');

    cy.get('#load-samples-input').type('http://lennoxanderson.com/unitTesting/lennox.json');

    cy.get('#load-samples-btn').click();

  });
});
