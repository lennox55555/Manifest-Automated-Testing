function presentDefaultContent(toggleElements = {}) {
  // FIXME: A function that checks for the default content to be present. Modify if developing
  //  new default content for the page i.e removal or addition of new UI element.

  const defaultVisibility = {
    '#minfodetail': false,
    '#viz-choices': true,
    '#measure-choices': true,
    '#timeCapture': false,
    //'#mapcapture': true,
    '#timeSlider': true,
    //'#viz-slider': true,
    '#searchbar': true,
    '#fullscreen-menu': true,
    '#mapmenu': true,
  };

  const finalVisibility = { ...defaultVisibility, ...toggleElements };

  Object.keys(finalVisibility).forEach(selector => {
    if (finalVisibility[selector]) {
      cy.get(selector).should('be.visible');
    } else {
      cy.get(selector).should('not.be.visible');
    }
  });
}


describe('Visualization Option Tests', () => {
  it('An automated test to verify every end-to-end point functions correctly from the graph view.', () => {

    cy.visit('http://localhost/dist/');
    //https://manifest.supplystudies.com/
    //https://manifest.supplystudies.com/dev

    cy.get('#viz-choices').select('Chord');

    presentDefaultContent();

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

    presentDefaultContent({ '#minfodetail': true });

    cy.get('#load-samples').select('URL');

    cy.get('#load-samples-input').type('https://lennox55555.github.io/test/testTemporalData.json');

    cy.get('#load-samples-btn').click();

    cy.get('#timeCapture').click();

    cy.get('.esri-icon-play').click();

    cy.wait(10000);
    cy.get('button[aria-label="Play"]').should($btn => {
      expect($btn).to.have.attr('aria-label', 'Play');
    }).then(() => {
      cy.get('.esri-icon-reverse').click();

      cy.get('.esri-icon-reverse').click();

      cy.get('.esri-icon-forward').click();

      cy.get('.esri-icon-forward').click();

      cy.get('.esri-icon-forward').click();

      cy.get('#fullscreen-menu').click();
      //presentDefaultContent({ '#minfodetail': true });

      cy.get('#fullscreen-menu').click();

      cy.get('#closemap-687910787').click()
    });
  });
});
