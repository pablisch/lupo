const assignNoteForMetropolitanLine = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    case 'Amersham':
      return `E${lowOctave}`;
    case 'Chesham':
      return `D${lowOctave}`;
    case 'Chalfont&Latimer':
      return `C${lowOctave}`;
    case 'Chorleywood':
      return `A${lowOctave}`;
    case 'Watford':
      return `G${lowOctave + 2}`;
    case 'Rickmansworth':
      return `E${lowOctave + 2}`;
    case 'Croxley':
      return `D${lowOctave + 2}`;
    case 'MoorPark':
      return `C${lowOctave + 2}`;
    case 'Northwood':
      return `A${lowOctave + 2}`;
    case 'NorthwoodHills':
      return `G${lowOctave + 1}`;
    case 'Pinner':
      return `E${lowOctave + 1}`;
    case 'NorthHarrow':
      return `D${lowOctave + 1}`;
    case 'Uxbridge':
      return `C${lowOctave + 1}`;
    case 'Hillingdon':
      return `A${lowOctave + 1}`;
    case 'Ickenham':
      return `G${lowOctave}`;
    case 'Ruislip':
      return `G${lowOctave}`;
    case  'RuislipManor':
      return `E${lowOctave}`;
    case 'Eastcote':
      return `D${lowOctave}`;
    case 'RaynersLane':
      return `C${lowOctave}`;
    case 'WestHarrow':
      return `A${lowOctave}`;
    case 'Harrow-on-the-Hill':
      return `G${lowOctave + 2}`;
    case 'NorthwickPark':
      return `E${lowOctave + 2}`;
    case 'PrestonRoad':
      return `D${lowOctave + 2}`;
    case 'WembleyPark':
      return `C${lowOctave + 2}`;
    case 'FinchleyRoad':
      return `A${lowOctave + 2}`;
    case 'BakerStreet':
      return `G${lowOctave + 1}`;
    case 'GreatPortlandStreet':
      return `E${lowOctave + 1}`;
    case 'EustonSquare':
      return `D${lowOctave + 1}`;
    case 'KingsCrossStPancras':
      return `C${lowOctave + 1}`;
    case 'Farringdon':
      return `A${lowOctave + 1}`;
    case 'Barbican':
      return `G${lowOctave}`;
    case 'Moorgate':
      return `E${lowOctave}`;
    case 'LiverpoolStreet':
      return `D${lowOctave}`;
    case 'Aldgate':
      return `C${lowOctave}`;
    default:
      return `A${lowOctave}`;
    }
  }
  
  module.exports = assignNoteForMetropolitanLine;