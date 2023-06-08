const assignNoteForNorthern = (stationName) => {
  switch(stationName) {
    case 'MillHillEast':
      return 'C4';
    case 'FinchleyCentral':
      return 'D4';
    case 'Highgate':
      return 'E4';
    case 'Archway':
      return 'G4';
    case 'TufnellPark':
      return 'A4';
    case 'KentishTown':
      return 'C5';
    case "CamdenTown":
      return 'D2';
    case 'Euston':
      return 'E2';
    case "KingsCrossStPancras":
      return 'G2';
    case 'Angel':
      return 'A2';
    case 'OldStreet':
      return 'C3';
    case 'Moorgate':
      return 'C3';
    case 'Bank':
      return 'D4';
    case  'LondonBridge':
      return 'E4';
    case 'Borough':
      return 'G4';
    case 'Elephant&Castle':
      return 'A4';
    case 'Kennington':
      return 'C5';
    case 'Oval':
      return 'D3';
    case 'Stockwell':
      return 'E3';
    case 'ClaphamNorth':
      return 'G3';
    case 'ClaphamCommon':
      return 'A3';
    case 'ClaphamSouth':
      return 'C3';
    case 'Balham':
      return 'C4';
    case 'TootingBec':
      return 'D4';
    case 'TootingBroadway':
      return 'E4';
    case 'ColliersWood':
      return 'G4';
    case 'SouthWimbledon':
      return 'A4';
    case 'Morden':
      return 'C5';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForNorthern;