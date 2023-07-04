describe('the landing page', () => {
  it('visits the app landing page ', () => {
    cy.visit('/') // baseUrl is set in cypress.config.js
    cy.get('.App').should('be.visible');
    cy.get('.App').should('have.css', 'text-align', 'center');
    cy.get('.app-nav').should('be.visible');
    cy.get('.app-nav').should('have.css', 'padding', '2px');
    cy.get('h2').should('be.visible');
    cy.get('h2').should('have.text', 'LONDON UNDERGROUND PHONY ORCHESTRA');
    cy.get('.App > :nth-child(2)').should('be.visible'); // blue break
    cy.get('.App > :nth-child(4)').should('be.visible'); // blue break
    cy.get('.blue-break').should('have.css', 'height', '10px');
    cy.get('.App-header').should('be.visible')
    cy.get('.App-logo').should('be.visible')
    cy.get('.blurb > .landing-page > .top-text').should('be.visible')
    cy.get('.blurb > .landing-page > .top-text').should('have.text', 'Click on the logo above to enter the London Underground music map.')
  })
})