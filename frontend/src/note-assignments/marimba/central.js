const assignNoteForCentral = (stationName) => {
  const lowOctave = 4;

  switch (stationName) {
    // case 'Upminster':
    // case 'UpminsterBridge':
    // case 'Hornchurch':
    //   return `G${lowOctave + 2}`;
    // case 'ElmPark':
    // case 'DagenhamEast':
    // case 'DagenhamHeathway':
    //   return `E${lowOctave + 2}`;
    // case 'Becontree':
    // case 'Upney':
    // case 'Barking':
    //   return `D${lowOctave + 2}`;
    // case 'EastHam':
    // case 'UptonPark':
    // case 'Plaistow':
    //   return `C${lowOctave + 2}`;
    // case 'WestHam':
    // case 'Bromley-by-Bow':
    // case 'BowRoad':
    //   return `A${lowOctave + 2}`;
    // case 'MileEnd':
    // case 'StepneyGreen':
    // case 'Whitechapel':
    //   return `G${lowOctave + 1}`;
    // case 'AldgateEast':
    // case 'TowerHill':
    // case 'Monument':
    //   return `E${lowOctave + 1}`;
    // case 'CannonStreet':
    // case 'MansionHouse':
    // case 'Blackfriars':
    //   return `D${lowOctave + 1}`;
    // case 'Temple':
    // case 'Embankment':
    // case 'Westminster':
    //   return `C${lowOctave + 1}`;
    // case 'StJamessPark':
    // case 'VictoriaSt':
    // case 'SloaneSquare':
    //   return `A${lowOctave + 1}`;
    // case 'SouthKensington':
    // case 'GloucesterRoad':
    // case 'HighStreetKensington':
    //   return `G${lowOctave}`;
    // case 'EarlsCourt':
    // case 'WestKensington':
    // case 'BaronsCourt':
    //   return `E${lowOctave}`;
    // case 'Hammersmith(Dist&PiccLine)':
    // case 'RavenscourtPark':
    // case 'StamfordBrook':
    //   return `D${lowOctave}`;
    // case 'TurnhamGreen':
    // case 'Gunnersbury':
    // case 'KewGardens':
    //   return `C${lowOctave}`;
    // case 'Richmond':
    // case 'WimbledonPark':
    // case 'Wimbledon':
    // case 'WestBrompton':
    //   return `A${lowOctave}`;
    // default:
    //   return `A${lowOctave}`;
    default:
      return `C3`;
    }
};

module.exports = assignNoteForCentral;
