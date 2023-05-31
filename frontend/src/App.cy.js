import App from './App';

// cypress component test for App.js
describe('App', () => {
  it('renders a very temporary title', () => {
    cy.mount(<App />);
    cy.get('.App-header > :nth-child(1)').should('be.visible');
    cy.get('.App-header > :nth-child(1)').contains('London Underground');
  });

  // tests the api call to TFL
  it('fetches data from the TFL API', () => {
    cy.intercept('GET', 'https://api.tfl.gov.uk/Line/bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city/Arrivals?').as('tubeData');
    cy.mount(<App />);
    cy.wait('@tubeData').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it('fetches data from the TFL API', () => {
    const stubbedData = [
      // Define the stubbed data that matches the expected structure
      // and content of the API response
      {
        "$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
        "id": "12345",
        "stationName": "Test Station",
        "lineName": "Test Line",
        "timeToStation": 30
      },
      // Add more objects as needed
    ];
  
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.tfl.gov.uk/Line/bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city/Arrivals?',
      },
      stubbedData // Provide the stubbed data as the response
    ).as('tubeData');
  
    cy.mount(<App />);
    
    cy.wait('@tubeData').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
      cy.get('@tubeData').then(interception => {
        expect(interception.response.body).to.deep.equal(stubbedData);
      });
    });
  });
  
});

