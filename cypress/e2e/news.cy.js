describe('Background Color Change', () => {
  it('changes the background color on button click', () => {
    // Visit your page
    cy.visit('index.html');

    // Trigger the action that makes the API call
    cy.contains('Top News').click();

    // Optional: Introduce an explicit wait (e.g., 2 seconds)
    cy.wait(2000); // Adjust the wait time as needed

    // Wait for the #news-container to be populated
    cy.get('#news-container').should('not.be.empty');

    // Assert the length of #news-container
    cy.get('#news-container')
      .children()
      .should('have.length.greaterThan', 1);
  });
});
