function presentDefaultContent(toggleElements = {}) {
  // FIXME: A function that checks for the default content to be present. Modify if developing
  //  new default content for the page i.e removal or addition of new UI element.

  const defaultVisibility = {
    '#minfodetail': false,
    '#viz-choices': true,
    '#measure-choices': true,
    //'#timeCapture': false,
    '#mapcapture': true,
    '#timeSlider': true,
    //'#viz-slider': true,
    '#searchbar': true,
    '#fullscreen-menu': true,
    '#mapmenu': true,
    '#mapmenu-window': false,
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

describe('Map Layer Toggle Tests', () => {
  it('should toggle map layers', () => {
    cy.visit('http://localhost/dist/');
    //https://manifest.supplystudies.com/
    //https://manifest.supplystudies.com/dev

    cy.get('#viz-choices').select('Flow');

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


  });
});
