describe('app navigation', () => {
  it('navigates through all naviagtion methods correctly', () => {
    // starts off in landing page
    cy.visit('/')
    cy.get('.App-logo').click()
    cy.get('#tap-in').should('be.visible')
    
    // click the #tap-in element in main screen to start app
    cy.get('#soundon').should('contain', 'Suspended')
    cy.get('#tap-in').click()
    cy.get('#soundon').should('contain', 'Good Service')
    cy.url().should('include', '/sounds-of-the-underground')

    // click the data link
    cy.get('.data-link').click()
    cy.url().should('include', '/data')
    
    // click the browser back button
    cy.go('back')
    cy.url().should('include', '/sounds-of-the-underground')
    
    // click the browser forward button
    cy.go('forward')
    cy.url().should('include', '/data')
    
    // click the map link
    cy.get('.map-link').click()
    cy.url().should('include', '/sounds-of-the-underground')
    
    // click the browser reload button
    cy.reload()
    cy.url().should('include', '/sounds-of-the-underground')
    cy.get('#tap-in').should('be.visible')

    // click the exit link
    cy.get('.exit-link').click()
    cy.url().should('not.include', '/sounds-of-the-underground')
    cy.url().should('not.include', '/data')
    cy.get('.App-logo').should('be.visible')

    // click the browser back button
    cy.go('back')
    cy.url().should('include', '/sounds-of-the-underground')
  })
})