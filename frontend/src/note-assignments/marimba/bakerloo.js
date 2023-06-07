const assignNoteForBakerloo = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    // // case 'Harrow_Wealdstone':
    // //   return `C${lowOctave + 2}`;
    // // case 'Kenton ':
    // //   return `A${lowOctave + 2}`;
    // // case 'SouthKenton':
    // //   return `A${lowOctave + 2}`;
    // // case 'NorthWembley':
    // //   return `G${lowOctave + 1}`;
    // // case 'WembleyCentral':
    // //   return `G${lowOctave + 1}`;
    // // case 'StonebridgePark':
    // //   return `E${lowOctave + 1}`;
    // // case 'Harlesden':
    // //   return `E${lowOctave + 1}`;
    // // case 'WillesdenJunction':
    // //   return `D${lowOctave + 1}`;
    // // case 'KensalGreen':
    // //   return `D${lowOctave + 1}`;
    // // case 'QueensPark':
    // //   return `C${lowOctave + 1}`;
    // // case 'KilburnPark':
    // //   return `C${lowOctave + 1}`;
    // // case 'MaidaVale':
    // //   return `A${lowOctave + 1}`;
    // // case 'WarwickAvenue':
    // //   return `A${lowOctave + 1}`;
    // // case 'Paddington':
    // //   return `G${lowOctave}`;
    // // case 'EdgwareRoad(Bakerloo)':
    // //   return `G${lowOctave}`;
    // // case 'Marylebone':
    // //   return `E${lowOctave}`;
    // // case 'BakerStreet':
    // //   return `E${lowOctave}`;
    // // case 'RegentsPark':
    // //   return `D${lowOctave}`;
    // // case 'OxfordCircus':
    // //   return `D${lowOctave}`;
    // // case 'PiccadillyCircus':
    // //   return `C${lowOctave}`;
    // // case 'CharingCross ':
    // //   return `C${lowOctave}`;
    // // case 'Embankment':
    // //   return `C${lowOctave}`;
    // // case 'Waterloo':
    // //   return `C${lowOctave}`;
    // // case 'LambethNorth':
    // //   return `A${lowOctave}`;
    // // case 'Elephant_Castle':
    // //   return `A${lowOctave}`;
    // default:
    //   return `A${lowOctave + 1}`;
    default:
      return `C3`;
    }
  }
  
  module.exports = assignNoteForBakerloo;