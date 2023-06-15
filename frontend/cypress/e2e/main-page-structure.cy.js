describe('the main page structure', () => {
  it('navigates to main page, starts the app functionality and checks page structure', () => {
    cy.visit('/')
    cy.get('.App-logo').click()
    
    cy.get('#tap-in').should('be.visible')
    cy.get('.nav-logo > h2').should('be.visible')
    cy.get('.nav-logo > h2').should('have.text', 'LONDON UNDERGROUND PHONY ORCHESTRA')
    cy.get('.nav-links > .data-link').should('be.visible')
    cy.get('.nav-links > .data-link').should('have.text', 'Data')
    cy.get('.nav-links > .exit-link').should('be.visible')
    cy.get('.nav-links > .exit-link').should('have.text', 'Exit')
    cy.get('.nav-logo > :nth-child(1)').should('be.visible')
    cy.get('.nav-logo > :nth-child(1)').should('have.attr', 'src', './Underground.png')
    cy.get('.nav-logo > :nth-child(3)').should('be.visible')
    cy.get('.nav-logo > :nth-child(3)').should('have.attr', 'src', './Underground.png')
    cy.get('.sidebar').should('be.visible');
    cy.get('.react-transform-component').should('be.visible');
    cy.get('#svg267248').should('be.visible');
    
    // click the #tap-in element
    cy.get('#soundon').should('contain', 'Suspended')
    cy.get('#tap-in').click()

    // in main screen active
    cy.get('#soundon').should('contain', 'Good Service')
  })
})