const assignNoteForBakerloo = (stationName) => {
  switch(stationName) {
    case 'Harrow_Wealdstone':
      return 'C2';
    case 'Kenton ':
      return 'D2';
    case 'SouthKenton':
      return 'E2';
    case 'NorthWembley':
      return 'G2';
    case 'WembleyCentral':
      return 'A2';
    case 'StonebridgePark':
      return 'C3';
    case 'Harlesden':
      return 'D3';
    case 'WillesdenJunction':
      return 'E3';
    case 'KensalGreen':
      return 'G3';
    case 'QueensPark':
      return 'A3';
    case 'KilburnPark':
      return 'C4';
    case 'MaidaVale':
      return 'D4';
    case 'WarwickAvenue':
      return 'E4';
    case 'Paddington':
      return 'G4';
    case 'EdgwareRoad(Bakerloo)':
      return 'A4';
    case 'Marylebone':
      return 'C5';
    case 'BakerStreet':
      return 'C4';
    case 'RegentsPark':
      return 'D4';
    case 'OxfordCircus':
      return 'E4';
    case 'PiccadillyCircus':
      return 'G4';
    case 'CharingCross ':
      return 'A4';
    case 'Embankment':
      return 'C5';
    case 'Waterloo':
      return 'C3';
    case 'LambethNorth':
      return 'D3';
    case 'Elephant_Castle':
      return 'E3';
    default:
      return 'C4';
    }
  }
  
  module.exports = assignNoteForBakerloo;