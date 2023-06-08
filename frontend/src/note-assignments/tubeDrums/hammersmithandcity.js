const assignNoteForHammersmithCity = (stationName) => {
  switch(stationName) {
    case 'Hammersmith':
      return 'C4';
    case 'GoldhawkRoad':
      return 'D4';
    case "ShepherdsBushMarket":
      return 'E4';
    case 'WoodLane':
      return 'G4';
    case 'LatimerRoad':
      return 'A4';
    case 'LadbrokeGrove':
      return 'C5';
    case 'WestbournePark':
      return 'D3';
    case 'RoyalOak':
      return 'E3';
    case 'Paddington':
      return 'G3';
    case 'EdgwareRoadCircleLine':
      return 'A3';
    case 'BakerStreet':
      return 'C3';
    case 'GreatPortlandStreet':
      return 'C4';
    case 'EustonSquare':
      return 'D4';
    case 'KingsCrossStPancras':
      return 'E4';
    case 'Farringdon':
      return 'G4';
    case 'Barbican':
      return 'A4';
    case 'Moorgate':
      return 'C5';
    case 'LiverpoolStreet':
      return 'D4';
    case 'AldgateEast':
      return 'E4';
    case 'Whitechapel':
      return 'G4';
    case 'StepneyGreen':
      return 'A4';
    case 'MileEnd':
      return 'C5';
    case 'BowRoad':
      return 'C2';
    case 'Bromley-by-Bow':
      return 'D2';
    case 'WestHam':
      return 'E2';
    case 'Plaistow':
      return 'G2';
    case 'UptonPark':
      return 'A2';
    case 'EastHam':
      return 'C3';
    case 'Barking':
      return 'D3';
    case 'Upney':
      return 'E3';
    case 'Becontree':
      return 'G3';
    case 'Dagenham Heathway':
      return 'A3';
    case 'Dagenham East':
      return 'C4';
    case 'Elm Park':
      return 'C4';
    case 'Hornchurch':
      return 'D4';
    case 'Upminster Bridge':
      return 'E4';
    case 'Upminster':
      return 'G4';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForHammersmithCity;