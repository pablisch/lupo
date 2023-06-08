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
      return 'C2';
    case 'MaidaVale':
      return 'D2';
    case 'WarwickAvenue':
      return 'E2';
    case 'Paddington':
      return 'G2';
    case 'EdgwareRoad(Bakerloo)':
      return 'A2';
    case 'Marylebone':
      return 'C3';
    case 'BakerStreet':
      return 'C3';
    case 'RegentsPark':
      return 'D3';
    case 'OxfordCircus':
      return 'E3';
    case 'PiccadillyCircus':
      return 'G3';
    case 'CharingCross ':
      return 'A3';
    case 'Embankment':
      return 'C4';
    case 'Waterloo':
      return 'C2';
    case 'LambethNorth':
      return 'D2';
    case 'Elephant_Castle':
      return 'E2';
    default:
      return 'C3';
    }
  }
  
  module.exports = assignNoteForBakerloo;