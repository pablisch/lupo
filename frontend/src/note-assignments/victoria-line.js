const assignNoteForVictoriaLine = (stationName) => {
  switch(stationName) {
    case 'WalthamstowCentral':
      return 'C5';
    case 'BlackhorseRoad':
      return 'A5';
    case 'TottenhamHale':
      return 'G4';
    case 'SevenSisters':
      return 'E4';
    case 'FinsburyPark':
      return 'D4';
    case 'Highbury&Islington':
      return 'C4';
    case "KingsCrossStPancras":
      return 'A4';
    case 'Euston':
      return 'G3';
    case 'WarrenStreet':
      return 'E3';
    case 'OxfordCircus':
      return 'D3';
    case 'GreenPark':
      return 'C3';
    case 'Victoria':
      return 'A3';
    case 'Pimlico':
      return 'G2';
    case  'Vauxhall':
      return 'E2';
    case 'Stockwell':
      return 'D2';
    case 'Brixton':
      return 'C2';
    default:
      return 'C2';
  }
}

module.exports = assignNoteForVictoriaLine;
