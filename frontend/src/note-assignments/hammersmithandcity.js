const assignNoteForHammersmithCity = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    case 'Hammersmith':
      return `G${lowOctave + 2}`;
    case 'GoldhawkRoad':
      return `G${lowOctave + 2}`;
    case "ShepherdsBushMarket":
      return `E${lowOctave + 2}`;
    case 'WoodLane':
      return `E${lowOctave + 2}`;
    case 'LatimerRoad':
      return `D${lowOctave + 2}`;
    case 'LadbrokeGrove':
      return `D${lowOctave + 2}`;
    case 'WestbournePark':
      return `C${lowOctave + 2}`;
    case 'RoyalOak':
      return `C${lowOctave + 2}`;
    case 'Paddington':
      return `A${lowOctave + 2}`;
    case 'EdgwareRoadCircleLine':
      return `A${lowOctave + 2}`;
    case 'BakerStreet':
      return `G${lowOctave + 1}`;
    case 'GreatPortlandStreet':
      return `G${lowOctave + 1}`;
    case 'EustonSquare':
      return `G${lowOctave + 1}`;
    case 'KingsCrossStPancras':
      return `E${lowOctave + 1}`;
    case 'Farringdon':
      return `E${lowOctave + 1}`;
    case 'Barbican':
      return `E${lowOctave + 1}`;
    case 'Moorgate':
      return `D${lowOctave + 1}`;
    case 'LiverpoolStreet':
      return `D${lowOctave + 1}`;
    case 'AldgateEast':
      return `D${lowOctave + 1}`;
    case 'Whitechapel':
      return `C${lowOctave + 1}`;
    case 'StepneyGreen':
      return `C${lowOctave + 1}`;
    case 'MileEnd':
      return `C${lowOctave + 1}`;
    case 'BowRoad':
      return `A${lowOctave + 1}`;
    case 'Bromley-by-Bow':
      return `A${lowOctave + 1}`;
    case 'WestHam':
      return `A${lowOctave + 1}`;
    case 'Plaistow':
      return `G${lowOctave}`;
    case 'UptonPark':
      return `G${lowOctave}`;
    case 'EastHam':
      return `G${lowOctave}`;
    case 'Barking':
      return `E${lowOctave}`;
    case 'Upney Underground Station':
      return `E${lowOctave}`;
    case 'Becontree Underground Station':
      return `E${lowOctave}`;
    case 'Dagenham Heathway Underground Station':
      return `D${lowOctave}`;
    case 'Dagenham East Underground Station':
      return `D${lowOctave}`;
    case 'Elm Park Underground Station':
      return `D${lowOctave}`;
    case 'Hornchurch Underground Station':
      return `C${lowOctave}`;
    case 'Upminster Bridge Underground Station':
      return `C${lowOctave}`;
    case 'Upminster Underground Station':
      return `C${lowOctave}`;
    default:
      return `A${lowOctave}`;
  }
}

module.exports = assignNoteForHammersmithCity;
