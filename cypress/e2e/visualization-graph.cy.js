describe('Visualization Option Tests', () => {
  it('should change visualization options', () => {

    cy.visit('http://localhost/dist/');
    //https://manifest.supplystudies.com/
    //https://manifest.supplystudies.com/dev

    cy.get('#viz-choices').select('Graph');

    cy.get('#measure-choices').select('impact');

    cy.get('#viz-slider')
        .invoke('val', 50)
        .trigger('input');

    cy.get('#viz-slider')
        .invoke('val', 100)
        .trigger('input');

    cy.get('#searchbar').type('New York');

    cy.get('#searchclear').click();

    cy.get('#closemap-1029261216').click();

    cy.get('#minfo-hamburger').click();

    cy.get('#minfodetail').should('be.visible');

    cy.get('#load-samples').select('file');

    cy.get('#load-samples-btn').click()
        .selectFile('Documents/Manifest/cypress/fixtures/testTemporalData.json');

    cy.get('#file-input-label')
        .selectFile('Documents/Manifest/cypress/fixtures/testTemporalData.json');

  });
});
