describe('Visualization Option Tests', () => {
  it('should change visualization options', () => {
    cy.visit('http://localhost/dist/');
    cy.get('#viz-choices').select('Flow');
  });
});