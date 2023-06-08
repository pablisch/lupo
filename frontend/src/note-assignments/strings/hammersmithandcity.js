const assignNoteForHammersmithCity = (stationName) => {
  switch(stationName) {
    case 'Hammersmith':
      return 'C3';
    case 'GoldhawkRoad':
      return 'D3';
    case "ShepherdsBushMarket":
      return 'E3';
    case 'WoodLane':
      return 'G3';
    case 'LatimerRoad':
      return 'A3';
    case 'LadbrokeGrove':
      return 'C4';
    case 'WestbournePark':
      return 'D4';
    case 'RoyalOak':
      return 'E4';
    case 'Paddington':
      return 'G4';
    case 'EdgwareRoadCircleLine':
      return 'A4';
    case 'BakerStreet':
      return 'C5';
    case 'GreatPortlandStreet':
      return 'C3';
    case 'EustonSquare':
      return 'D3';
    case 'KingsCrossStPancras':
      return 'E3';
    case 'Farringdon':
      return 'G3';
    case 'Barbican':
      return 'A3';
    case 'Moorgate':
      return 'C4';
    case 'LiverpoolStreet':
      return 'D3';
    case 'AldgateEast':
      return 'E3';
    case 'Whitechapel':
      return 'G3';
    case 'StepneyGreen':
      return 'A3';
    case 'MileEnd':
      return 'C3';
    case 'BowRoad':
      return 'C5';
    case 'Bromley-by-Bow':
      return 'D2';
    case 'WestHam':
      return 'E2';
    case 'Plaistow':
      return 'G2';
    case 'UptonPark':
      return 'A2';
    case 'EastHam':
      return 'C2';
    case 'Barking':
      return 'D2';
    case 'Upney':
      return 'E2';
    case 'Becontree':
      return 'G2';
    case 'Dagenham Heathway':
      return 'A2';
    case 'Dagenham East':
      return 'C3';
    case 'Elm Park':
      return 'C3';
    case 'Hornchurch':
      return 'D3';
    case 'Upminster Bridge':
      return 'E3';
    case 'Upminster':
      return 'G3';
    default:
      return 'C2';
  }
};

module.exports = assignNoteForHammersmithCity;