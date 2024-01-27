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
    cy.visit('http://localhost/dist/edit.html');
    //https://manifest.supplystudies.com/
    //https://manifest.supplystudies.com/dev

    cy.get('div.form-control input[type="text"][name="root[summary][name]"]')
        .clear()
        .type('Test Supply Chain')

    cy.get('div[data-schemapath="root.summary.description"] .CodeMirror')
        .first()
        .then(editor => {
          const codeMirror = editor[0].CodeMirror;
          codeMirror.setValue(''); 

          // Apply bold formatting
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-bold').click();
          codeMirror.replaceSelection('**Bold Text**\n\n');

          // Apply italic formatting
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-italic').click();
          codeMirror.replaceSelection('*Italic Text*\n\n');

          // Apply heading
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-header').click();
          codeMirror.replaceSelection('# Heading Text\n\n');

          // Apply quote
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-quote-left').click();
          codeMirror.replaceSelection('> Quote Text\n\n');

          // Apply unordered list
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-list-ul').click();
          codeMirror.replaceSelection('* List Item 1\n* List Item 2\n\n');

          // Apply ordered list
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-list-ol').click();
          codeMirror.replaceSelection('1. First Item\n2. Second Item\n\n');

          // Apply link
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-link').click();
          codeMirror.replaceSelection('[Example Link](https://example.com)\n\n');

          // Apply image
          cy.get('div[data-schemapath="root.summary.description"] .editor-toolbar .fa-picture-o').click();
          codeMirror.replaceSelection('![Example Image](https://example.com/image.png)\n\n');
        });

    cy.get('input[name="root[location][address]"]')
        .click() 
        .type('New York, NY');

    const coordinates = "40.730610,-73.935242";

    cy.get('input.geocoderinput[name="root[location][geocode]"]')
        .click()
        .type(coordinates)

  });
});
