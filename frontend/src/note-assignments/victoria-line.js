const assignNoteForVictoriaLine = (stationName) => {
  switch(stationName) {
    case 'Walthamstow Central Underground Station':
      return 'C5';
    case 'Blackhorse Road Underground Station':
      return 'A5';
    case 'Tottenham Hale Underground Station':
      return 'G4';
    case 'Seven Sisters Underground Station':
      return 'E4';
    case 'Finsbury Park Underground Station':
      return 'D4';
    case 'Highbury & Islington Underground Station':
      return 'C4';
    case "King's Cross St. Pancras Underground Station":
      return 'A4';
    case 'Euston Underground Station':
      return 'G3';
    case 'Warren Street Underground Station':
      return 'E3';
    case 'Oxford Circus Underground Station':
      return 'D3';
    case 'Green Park Underground Station':
      return 'C3';
    case 'Victoria Underground Station':
      return 'A3';
    case 'Pimlico Underground Station':
      return 'G2';
    case  'Vauxhall Underground Station':
      return 'E2';
    case 'Stockwell Underground Station':
      return 'D2';
    case 'Brixton Underground Station':
      return 'C2';
    default:
  }
}

module.exports = assignNoteForVictoriaLine;
