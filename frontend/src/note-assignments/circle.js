const assignNoteForPiccadillyLine = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    case 'Hammersmith(H&CLine)':
      return `G${lowOctave + 2}`;
    case 'GoldhawkRoad':
      return `G${lowOctave + 2}`;
    case 'ShepherdsBushMarket':
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
    case 'Paddington(H&CLine)-Underground':
      return `A${lowOctave + 2}`;
    case 'Paddington':
      return `A${lowOctave + 2}`;
    case 'EdgwareRoad(CircleLine)':
      return `G${lowOctave + 1}`;
    case 'BakerStreet':
      return `G${lowOctave + 1}`;
    case 'GreatPortlandStreet':
      return `E${lowOctave + 1}`;
    case 'EustonSquare':
      return `E${lowOctave + 1}`;
    case 'KingsCrossStPancras':
      return `E${lowOctave + 1}`;
    case 'Farringdon':
      return `D${lowOctave + 1}`;
    case 'Barbican':
      return `D${lowOctave + 1}`;
    case 'Moorgate':
      return `D${lowOctave + 1}`;
    case 'LiverpoolStreet':
      return `C${lowOctave + 1}`;
    case 'Aldgate':
      return `C${lowOctave + 1}`;
    case 'TowerHill':
      return `C${lowOctave + 1}`;
    case 'Monument':
      return `A${lowOctave + 1}`;
    case 'CannonStreet':
      return `A${lowOctave + 1}`;
    case 'MansionHouse':
      return `A${lowOctave + 1}`;
    case 'Blackfriars':
      return `G${lowOctave}`;
    case 'Temple':
      return `G${lowOctave}`;
    case 'Embankment':
      return `G${lowOctave}`;
    case 'Westminster':
      return `E${lowOctave}`;
    case 'StJamessPark':
      return `E${lowOctave}`;
    case 'Victoria':
      return `E${lowOctave}`;
    case 'SloaneSquare':
      return `D${lowOctave}`;
    case 'SouthKensington':
      return `D${lowOctave}`;
    case 'GloucesterRoad':
      return `D${lowOctave}`;
    case 'HighStreetKensington':
      return `C${lowOctave}`;
    case 'NottingHillGate':
      return `C${lowOctave}`;
    case 'Bayswater':
      return `C${lowOctave}`;
    default:
      return `A${lowOctave}`;
  }
}

module.exports = assignNoteForPiccadillyLine;
