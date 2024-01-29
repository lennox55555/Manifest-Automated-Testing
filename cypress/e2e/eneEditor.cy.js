describe('Supply Chain Editor Tests', () => {
    it('should create and fill out multiple nodes in the supply chain', () => {
        cy.visit('http://localhost/dist/edit.html'); 

        cy.get('div.form-control input[type="text"][name="root[summary][name]"]')
            .clear()
            .type('Test Supply Chain');

        cy.get('div[data-schemapath="root.summary.description"] .CodeMirror')
            .first()
            .then(editor => {
                const codeMirror = editor[0].CodeMirror;
                codeMirror.setValue('This is a detailed description of the supply chain.');
            });

        cy.get('input[name="root[location][address]"]')
            .clear()
            .type('New York, NY');

        cy.get('input.geocoderinput[name="root[location][geocode]"]')
            .clear()
            .type('40.730610,-73.935242');

        for (let nodeIndex = 0; nodeIndex < 3; nodeIndex++) {
            cy.get('.json-editor-btn-add[title="Add Node"]').click();

            cy.get(`input[name="root[nodes][${nodeIndex}][overview][name]"]`)
                .type(`Node ${nodeIndex + 1}`);

            cy.get('.CodeMirror').eq(nodeIndex + 1).then(editor => {
                const codeMirror = editor[0].CodeMirror;
                codeMirror.setValue(`Detailed description for Node ${nodeIndex + 1}.`);
            });

            cy.get(`#Location`).click();
            cy.wait(1000);
            cy.get(`input[name="root[nodes][${nodeIndex}][location][address]"]`).type('456 Warehouse Ave', { force: true });
            cy.get(`input[name="root[nodes][${nodeIndex}][location][geocode]"]`).type('40.730610,-73.935242', { force: true });

            cy.get(`#Attributes`).click();
            cy.wait(1000);

            cy.get(`#Measures`).click();
            cy.wait(1000);

            cy.get(`#Notes`).click();
            cy.wait(1000);
            cy.get(`div[data-schemapath="root.nodes.${nodeIndex}.notes.markdown"] .CodeMirror`).then(editor => {
                const codeMirror = editor[0].CodeMirror;
                codeMirror.setValue(`Additional notes for Node ${nodeIndex + 1}.`);
            });


        }
    });
});
