const assignNoteForJubilee = (stationName) => {
  const lowOctave = 3;

  switch(stationName) {
    case 'Stanmore':
      return `E${lowOctave + 2}`;
    case 'CanonsPark':
      return `E${lowOctave + 2}`;
    case 'Queensbury':
      return `D${lowOctave + 2}`;
    case 'Kingsbury':
      return `D${lowOctave + 2}`;
    case 'WembleyPark':
      return `C${lowOctave + 2}`;
    case 'Neasden':
      return `C${lowOctave + 2}`;
    case "WillesdenGreen":
      return `A${lowOctave + 2}`;
    case 'Kilburn':
      return `A${lowOctave + 2}`;
    case 'WestHampstead':
      return `E${lowOctave + 1}`;
    case 'FinchleyRoad':
      return `E${lowOctave + 1}`;
    case 'SwissCottage':
      return `D${lowOctave + 1}`;
    case "StJohnsWood":
      return `D${lowOctave + 1}`;
    case 'BakerStreet':
      return `C${lowOctave + 1}`;
    case  'BondStreet':
      return `C${lowOctave + 1}`;
    case 'GreenPark':
      return `A${lowOctave + 1}`;
    case 'Westminster':
      return `A${lowOctave + 1}`;
    case 'Waterloo':
      return `E${lowOctave}`;
    case 'Southwark':
      return `E${lowOctave}`;
    case 'LondonBridge':
      return `D${lowOctave}`;
    case 'Bermondsey':
      return `D${lowOctave}`;
    case 'CanadaWater':
      return `C${lowOctave}`;
    case 'CanaryWharf':
      return `C${lowOctave}`;
    case 'NorthGreenwich':
      return `A${lowOctave}`;
    case 'CanningTown':
      return `A${lowOctave}`;
    case 'WestHam ':
      return `C${lowOctave}`;
    case 'Stratford':
      return `C${lowOctave}`;
    default:
      return `C${lowOctave + 1}`;
  }
}

module.exports = assignNoteForJubilee;
