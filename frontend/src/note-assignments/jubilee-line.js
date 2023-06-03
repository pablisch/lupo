const assignNoteForJubileeLine = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'A5';
    case 'CanonsPark':
      return 'G6';
    case 'Queensbury':
      return 'E6';
    case 'Kingsbury':
      return 'D6';
    case 'WembleyPark':
      return 'C6';
    case 'Neasden':
      return 'A6';
    case "WillesdenGreen":
      return 'G5';
    case 'Kilburn':
      return 'E5';
    case 'WestHampstead':
      return 'D5';
    case 'FinchleyRoad':
      return 'C5';
    case 'SwissCottage':
      return 'A5';
    case "StJohnsWood":
      return 'G5';
    case 'Baker Street':
      return 'E5';
    case  'BondStreet':
      return 'D5';
    case 'GreenPark':
      return 'C5';
    case 'Westminster':
      return 'A5';
    case 'Waterloo':
      return 'G4';
    case 'Southwark':
      return 'E4';
    case 'LondonBridge':
      return 'D4';
    case 'Bermondsey':
      return 'C4';
    case 'CanadaWater':
      return 'A4';
    case 'CanaryWharf':
      return 'G3';
    case 'NorthGreenwich':
      return 'E3';
    case 'CanningTown':
      return 'D3';
    case 'WestHam ':
      return 'C3';
    case 'Stratford':
      return 'A3';
    default:
      return 'F4';
  }
}

module.exports = assignNoteForJubileeLine;
