const assignNoteForJubilee = (stationName) => {
  switch(stationName) {
    case 'Stanmore':
      return 'C3';
    case 'CanonsPark':
      return 'D3';
    case 'Queensbury':
      return 'E3';
    case 'Kingsbury':
      return 'G3';
    case 'WembleyPark':
      return 'A3';
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
      return 'C4';
    case "StJohnsWood":
      return 'C3';
    case 'BakerStreet':
      return 'D3';
    case  'BondStreet':
      return 'E3';
    case 'GreenPark':
      return 'G3';
    case 'Westminster':
      return 'A3';
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
      return 'C3';
    case 'CanningTown':
      return 'D3';
    case 'WestHam ':
      return 'E3';
    case 'Stratford':
      return 'G3';
    default:
      return 'C4';
  }
}

module.exports = assignNoteForJubilee;