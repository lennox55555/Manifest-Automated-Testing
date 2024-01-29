describe('Data Page Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost/dist/data.html');
  });

  it('checks navigation links', () => {
    cy.get('#minfomenu .hb-menu-item').each($el => {
      const href = $el.prop('href');
      expect(href).not.to.be.empty;
    });
  });


  it('tests search functionality', () => {
    cy.get('#datasearch').type('search query');
  });

  it('tests pagination', () => {
    cy.get('.pagination .page').first().click();
  });

  it('tests external links', () => {
    cy.get('a[href^="http"]').each($el => {
    });
  });

});
