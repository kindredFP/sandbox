describe('Background Color Change', () => {
  it('changes the background color on button click', () => {
      // Visit your page
      cy.visit('index.html');

      cy.contains('Change').click()
      cy.get('button').should('have.length', 1);

      // Get the button and click it
      cy.get('button').click();

      // Check if the background color has changed
      cy.get('body').should('have.css', 'background-color').and('not.eq', 'rgba(0, 0, 0, 0)');
  });
});
