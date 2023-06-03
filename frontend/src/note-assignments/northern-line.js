const assignNoteForNorthernLine = (stationName) => {
  switch(stationName) {
    case 'Mill Hill East':
      return 'E2';
    case 'FinchleyCentral':
      return 'C2';
    case 'Highgate':
      return 'A2';
    case 'Archway':
      return 'G1';
    case 'TufnellPark':
      return 'E1';
    case 'KentishTown':
      return 'D1';
    case "CamdenTown":
      return 'C1';
    case 'Euston':
      return 'A1';
    case "KingsCrossStPancras":
      return 'G2';
    case 'Angel':
      return 'E2';
    case 'OldStreet':
      return 'D2';
    case 'Moorgate':
      return 'C2';
    case 'Bank':
      return 'A2';
    case  'LondonBridge':
      return 'G1';
    case 'Borough':
      return 'E1';
    case 'Elephant&Castle':
      return 'D1';
    case 'Kennington':
      return 'C1';
    case 'Oval':
      return 'A1';
    case 'Stockwell':
      return 'G2';
    case 'ClaphamNorth':
      return 'E2';
    case 'ClaphamCommon':
      return 'D2';
    case 'ClaphamSouth':
      return 'C2';
    case 'Balham':
      return 'A2';
    case 'TootingBec':
      return 'G1';
    case 'TootingBroadway':
      return 'E1';
    case 'ColliersWood':
      return 'D1';
    case 'SouthWimbledon':
      return 'C1';
    case 'Morden':
      return 'A1';
    default:
      return 'C2';
  }
}

module.exports = assignNoteForNorthernLine;
