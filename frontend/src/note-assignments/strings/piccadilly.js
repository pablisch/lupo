const assignNoteForPiccadilly = (stationName) => {
  switch(stationName) {
    case 'Cockfosters':
      return 'C3';
    case 'Oakwood':
      return 'D3';
    case 'Southgate':
      return 'E3';
    case 'ArnosGrove':
      return 'G3';
    case 'BoundsGreen':
      return 'A3';
    case 'WoodGreen':
      return 'C4';
    case 'TurnpikeLane':
      return 'D4';
    case 'ManorHouse':
      return 'E4';
    case 'FinsburyPark':
      return 'G4';
    case 'Arsenal':
      return 'A4';
    case 'HollowayRoad':
      return 'C5';
    case 'CaleonianRoad':
      return 'D3';
    case 'KingsCrossStPancras':
      return 'E3';
    case 'RussellSquare':
      return 'G3';
    case 'Holborn':
      return 'A3';
    case 'Covent Garden':
      return 'C4';
    case 'Leicester Square':
      return 'D4';
    case 'GreenPark':
      return 'E4';
    case 'PiccadillyCircus':
      return 'G4';
    case 'HydeParkCorner':
      return 'A4';
    case 'Knightsbridge':
      return 'C3';
    case 'SouthKensington':
      return 'D3';
    case 'GloucesterRoad':
      return 'E3';
    case 'EarlsCourt':
      return 'G3';
    case 'BaronsCourt':
      return 'A3';
    case 'Hammersmith':
      return 'C4';
    case 'TurnhamGreen':
      return 'D4';
    case 'Acton Town':
      return 'E4';
    case 'SouthEaling':
      return 'G4';
    case 'Northfields':
      return 'A4';
    case 'BostonManor':
      return 'C4';
    case 'Osterley':
      return 'D3';
    case 'HounslowEast':
      return 'E3';
    case 'HounslowCentral':
      return 'G3';
    case 'HounslowWest':
      return 'A3';
    case 'HattonCross':
      return 'C4';
    case 'HeathrowTerminal 4':
      return 'D4';
    case 'HeathrowTerminals23':
      return 'E4';
    case 'HeathrowTerminal5':
      return 'G4';
    default:
      return 'C4';
    }
  };
  
  module.exports = assignNoteForPiccadilly;
  