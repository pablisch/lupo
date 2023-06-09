describe('template spec', () => {
  it('visits the app landing page ', () => {
    cy.clock()
    cy.visit('http://localhost:3000')

    cy.get('.App-header').should('be.visible')
    cy.get('.App-logo').should('be.visible')
    cy.get('.blurb > .landing-page > .top-text').should('be.visible')
    cy.get('.App-logo').click()
    
    cy.get('#tap-in').should('be.visible')
    cy.get('.nav-logo > h2').should('be.visible')
    cy.get('.nav-logo > h2').should('have.text', 'LONDON UNDERGROUND PHONY ORCHESTRA')
    cy.get('.nav-logo > h2').should('have.css', 'font-size', '25.6px')
    cy.get('.nav-logo > h2').should('have.css', 'color', 'rgb(255, 255, 255)')
    cy.get('.nav-logo > h2').should('have.css', 'font-weight', '700')
    cy.get('.nav-logo > h2').should('have.css', 'text-align', 'center')

    // cy.get the link to data
    cy.get('#btn-data').should('be.visible')
    
  })
})