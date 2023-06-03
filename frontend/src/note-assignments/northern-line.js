const assignNoteForNorthernLine = (stationName) => {
  switch(stationName) {
    case 'Mill Hill East Underground Station':
      return 'E2';
    case 'Finchley Central Underground Station':
      return 'C2';
    case 'Highgate Underground Station':
      return 'A2';
    case 'Archway Underground Station':
      return 'G1';
    case 'Tufnell Park Underground Station':
      return 'E1';
    case 'Kentish Town Underground Station':
      return 'D1';
    case "Camden Town Underground Station":
      return 'C1';
    case 'Euston Underground Station':
      return 'A1';
    case "King's Cross St Pancras Underground Station":
      return 'G2';
    case 'Angel Underground Station':
      return 'E2';
    case 'Old Street Underground Station':
      return 'D2';
    case 'Moorgate Underground Station':
      return 'C2';
    case 'Bank Underground Station':
      return 'A2';
    case  'London Bridge Underground Station':
      return 'G1';
    case 'Borough Underground Station':
      return 'E1';
    case 'Elephant & Castle Underground Station':
      return 'D1';
    case 'Kennington Underground Station':
      return 'C1';
    case 'Oval Underground Station':
      return 'A1';
    case 'Stockwell Underground Station':
      return 'G2';
    case 'Clapham North Underground Station':
      return 'E2';
    case 'Clapham Common Underground Station':
      return 'D2';
    case 'Clapham South Underground Station':
      return 'C2';
    case 'Balham Underground Station':
      return 'A2';
    case 'Tooting Bec Underground Station':
      return 'G1';
    case 'Tooting Broadway Underground Station':
      return 'E1';
    case 'Colliers Wood Underground Station':
      return 'D1';
    case 'South Wimbledon Underground Station':
      return 'C1';
    case 'Morden Underground Station':
      return 'A1';
    default:
      return 'C2';
  }
}

module.exports = assignNoteForNorthernLine;
