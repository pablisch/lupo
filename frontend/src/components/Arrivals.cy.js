import Arrivals from "./Arrivals"

describe('Arrivals', () => {
  it('displays the next train arrival', () => {
    // Mock tubeData
    const tubeData = [
      { lineName: 'Northern Line', stationName: 'Station A', timeToStation: 120 },
    ]
    const durationPassed = 0;

    // Mount the component with props
    cy.mount(<Arrivals tubeData={tubeData} durationPassed={durationPassed} />).as('arrivals')

    // Ensure the correct arrival info is displayed
    cy.get('[cy-data="arrival-info"]').should('have.text', 'Station A')
  })
})
