const assignNoteForJubilee = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'C4';
    case 'CanonsPark':
      return 'D4';
    case 'Queensbury':
      return 'E4';
    case 'Kingsbury':
      return 'G4';
    case 'WembleyPark':
      return 'A4';
    case 'Neasden':
      return 'C3';
    case "WillesdenGreen":
      return 'D3';
    case 'Kilburn':
      return 'E3';
    case 'WestHampstead':
      return 'G3';
    case 'FinchleyRoad':
      return 'A3';
    case 'SwissCottage':
      return 'C2';
    case "StJohnsWood":
      return 'C3';
    case 'BakerStreet':
      return 'D2';
    case  'BondStreet':
      return 'E2';
    case 'GreenPark':
      return 'G2';
    case 'Westminster':
      return 'A2';
    case 'Waterloo':
      return 'C3';
    case 'Southwark':
      return 'D3';
    case 'LondonBridge':
      return 'E3';
    case 'Bermondsey':
      return 'G3';
    case 'CanadaWater':
      return 'A3';
    case 'CanaryWharf':
      return 'C4';
    case 'NorthGreenwich':
      return 'C4';
    case 'CanningTown':
      return 'D4';
    case 'WestHam ':
      return 'E4';
    case 'Stratford':
      return 'G4';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForJubilee;