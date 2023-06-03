const assignNoteForCircleLine = (stationName) => {
  switch(stationName) {
    case 'Hammersmith Underground Station':
    return 'C1';
    case 'Goldhawk Road Underground Station':
    return 'C2';
    case 'Shepherds Bush Market Underground Station':
    return 'C3';
    case 'Wood Lane Underground Station':
    return 'C4';
    case 'Latimer Road Underground Station':
    return 'C5';
    case 'Ladbroke Grove Underground Station':
    return 'C6';
    case 'Westbourne Park Underground Station':
    return 'C7';
    case 'Royal Oak Underground Station':
    return 'C8';
    case 'Paddington Underground Station':
    return 'C9';
    case 'Edgware Road (Circle Line) Underground Station':
    return 'C10';
    case 'Baker Street Underground Station':
    return 'C11';
    case 'Great Portland Street Underground Station':
    return 'C12';
    case 'Euston Square Underground Station':
    return 'C13';
    case 'Kings Cross St. Pancras Underground Station':
    return 'C14';
    case 'Farringdon Underground Station':
    return 'C15';
    case 'Barbican Underground Station':
    return 'C16';
    case 'Moorgate Underground Station':
    return 'C17';
    case 'Liverpool Street Underground Station':
    return 'C18';
    case 'Aldgate Underground Station':
    return 'C19';
    case 'Tower Hill Underground Station':
    return 'C20';
    case 'Monument Underground Station':
    return 'C21';
    case 'Cannon Street Underground Station':
    return 'C22';
    case 'Mansion House Underground Station':
    return 'C23';
    case 'Blackfriars Underground Station':
    return 'C24';
    case 'Temple Underground Station':
    return 'C25';
    case 'Embankment Underground Station':
    return 'C26';
    case 'Westminster Underground Station':
    return 'C27';
    case 'St. Jamess Park Underground Station':
    return 'C28';
    case 'Victoria Underground Station':
    return 'C29';
    case 'Sloane Square Underground Station':
    return 'C30';
    case 'South Kensington Underground Station':
    return 'C31';
    case 'Gloucester Road Underground Station':
    return 'C32';
    case 'High Street Kensington Underground Station':
    return 'C33';
    case 'Notting Hill Gate Underground Station':
    return 'C34';
    case 'Bayswater Underground Station':
    return 'C35';
    default:
    return 'C37';
    }
  }
  
  module.exports = assignNoteForCircleLine;