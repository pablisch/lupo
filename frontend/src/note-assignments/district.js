const assignNoteForDistrict = (stationName) => {
  const lowOctave = 11;

  switch (stationName) {
    case 'Upminster':
      return `G${lowOctave + 2}`;
    case 'UpminsterBridge':
      return `G${lowOctave + 2}`;
    case 'Hornchurch':
      return `G${lowOctave + 2}`;
    case 'ElmPark':
      return `E${lowOctave + 2}`;
    case 'DagenhamEast':
      return `E${lowOctave + 2}`;
    case 'DagenhamHeathway':
      return `E${lowOctave + 2}`;
    case 'Becontree':
      return `D${lowOctave + 2}`;
    case 'Upney':
      return `D${lowOctave + 2}`;
    case 'Barking':
      return `D${lowOctave + 2}`;
    case 'EastHam':
      return `C${lowOctave + 2}`;
    case 'UptonPark':
      return `C${lowOctave + 2}`;
    case 'Plaistow':
      return `C${lowOctave + 2}`;
    case 'WestHam':
      return `A${lowOctave + 2}`;
    case 'Bromley-by-Bow':
      return `A${lowOctave + 2}`;
    case 'BowRoad':
      return `A${lowOctave + 2}`;
    case 'MileEnd':
      return `G${lowOctave + 1}`;
    case 'StepneyGreen':
      return `G${lowOctave + 1}`;
    case 'Whitechapel':
      return `G${lowOctave + 1}`;
    case 'AldgateEast':
      return `E${lowOctave + 1}`;
    case 'TowerHill':
      return `E${lowOctave + 1}`;
    case 'Monument':
      return `E${lowOctave + 1}`;
    case 'CannonStreet':
      return `D${lowOctave + 1}`;
    case 'MansionHouse':
      return `D${lowOctave + 1}`;
    case 'Blackfriars':
      return `D${lowOctave + 1}`;
    case 'Temple':
      return `C${lowOctave + 1}`;
    case 'Embankment':
      return `C${lowOctave + 1}`;
    case 'Westminster':
      return `C${lowOctave + 1}`;
    case 'StJamessPark':
      return `A${lowOctave + 1}`;
    case 'Victoria':
      return `A${lowOctave + 1}`;
    case 'SloaneSquare':
      return `A${lowOctave + 1}`;
    case 'SouthKensington':
      return `G${lowOctave}`;
    case 'GloucesterRoad':
      return `G${lowOctave}`;
    case 'HighStreetKensington':
      return `G${lowOctave}`;
    case 'EarlsCourt':
      return `E${lowOctave}`;
    case 'WestKensington':
      return `E${lowOctave}`;
    case 'BaronsCourt':
      return `E${lowOctave}`;
    case 'Hammersmith(Dist&PiccLine)':
      return `D${lowOctave}`;
    case 'RavenscourtPark':
      return `D${lowOctave}`;
    case 'StamfordBrook':
      return `D${lowOctave}`;
    case 'TurnhamGreen':
      return `C${lowOctave}`;
    case 'Gunnersbury':
      return `C${lowOctave}`;
    case 'KewGardens':
      return `C${lowOctave}`;
    case 'Richmond':
      return `A${lowOctave}`;
    case 'WimbledonPark':
      return `A${lowOctave}`;
    case 'Wimbledon':
      return `A${lowOctave}`;
    case 'WestBrompton':
      return `A${lowOctave}`;
    default:
      return `A${lowOctave}`;
  }
};

module.exports = assignNoteForDistrict;
