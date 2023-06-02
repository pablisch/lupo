const assignNoteForJubileeLine = (stationName) => {
  switch(stationName) {
    case 'Stanmore Underground Station':
      return 'C5';
    case 'Canons Park Underground Station':
      return 'A5';
    case 'Queensbury Underground Station':
      return 'G4';
    case 'Kingsbury Underground Station':
      return 'E4';
    case 'Wembley Park Underground Station':
      return 'D4';
    case 'Neasden Underground Station':
      return 'C4';
    case "Willesden Green Underground Station":
      return 'A4';
    case 'Kilburn Underground Station':
      return 'G3';
    case 'West Hampstead Underground Station':
      return 'E3';
    case 'Finchley Road Underground Station':
      return 'D3';
    case 'Swiss Cottage Underground Station':
      return 'C3';
    case "St John's Wood Underground Station":
      return 'A3';
    case 'Baker Street Underground Station':
      return 'G2';
    case  'Bond Street Underground Station':
      return 'E2';
    case 'Green Park Underground Station':
      return 'D2';
    case 'Westminster Underground Station':
      return 'C2';
    case 'Waterloo Underground Station':
      return 'C2';
    case 'Southwark Underground Station':
      return 'C2';
    case 'London Bridge Underground Station':
      return 'C2';
    case 'Bermondsey Underground Station':
      return 'C2';
    case 'Canada Water Underground Station':
      return 'C2';
    case 'Canary Wharf Underground Station':
      return 'C2';
    case 'North Greenwich Underground Station':
      return 'C2';
    case 'Canning Town Underground Station':
      return 'C2';
    case 'West Ham  Underground Station':
      return 'C2';
    case 'Stratford Underground Station':
      return 'C2';
    default:
  }
}

module.exports = assignNoteForJubileeLine;
