const assignNoteForJubileeLine = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'C5';
    case 'CanonsPark':
      return 'A5';
    case 'Queensbury':
      return 'G4';
    case 'Kingsbury':
      return 'E4';
    case 'WembleyPark':
      return 'D4';
    case 'Neasden':
      return 'C4';
    case "WillesdenGreen":
      return 'A4';
    case 'Kilburn':
      return 'G3';
    case 'WestHampstead':
      return 'E3';
    case 'FinchleyRoad':
      return 'D3';
    case 'SwissCottage':
      return 'C3';
    case "StJohnsWood":
      return 'A3';
    case 'Baker Street':
      return 'G2';
    case  'BondStreet':
      return 'E2';
    case 'GreenPark':
      return 'D2';
    case 'Westminster':
      return 'C2';
    case 'Waterloo':
      return 'C2';
    case 'Southwark':
      return 'C2';
    case 'LondonBridge':
      return 'C2';
    case 'Bermondsey':
      return 'C2';
    case 'CanadaWater':
      return 'C2';
    case 'CanaryWharf':
      return 'C2';
    case 'NorthGreenwich':
      return 'C2';
    case 'CanningTown':
      return 'C2';
    case 'WestHam ':
      return 'C2';
    case 'Stratford':
      return 'C2';
    default:
      return 'C2';
  }
}

module.exports = assignNoteForJubileeLine;
