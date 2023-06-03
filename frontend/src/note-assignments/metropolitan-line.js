const assignNoteForMetropolitanLine = (stationName) => {
  switch(stationName) {
    case 'Amersham Underground Station':
    return 'F1';
    case 'Chesham Underground Station':
    return 'F2';
    case 'Chalfont & Latimer Underground Station':
    return 'F3';
    case 'Chorleywood Underground Station':
    return 'F4';
    case 'Rickmansworth Underground Station':
    return 'F5';
    case 'Moor Park Underground Station':
    return 'F6';
    case 'Northwood Underground Station':
    return 'F7';
    case 'Northwood Hills Underground Station':
    return 'F8';
    case 'Pinner Underground Station':
    return 'F9';
    case 'North Harrow Underground Station':
    return 'F10';
    case 'Harrow-on-the-Hill Underground Station':
    return 'F11';
    case 'Northwick Park Underground Station':
    return 'F12';
    case 'Preston Road Underground Station':
    return 'F13';
    case 'Wembley Park Underground Station':
    return 'F14';
    case 'Finchley Road Underground Station':
    return 'F15';
    case 'Baker Street Underground Station':
    return 'F16';
    case 'Great Portland Street Underground Station':
    return 'F17';
    case 'Euston Square Underground Station':
    return 'F18';
    case 'Kings Cross St. Pancras Underground Station':
    return 'F19';
    case 'Farringdon Underground Station':
    return 'F20';
    case 'Barbican Underground Station':
    return 'F21';
    case 'Moorgate Underground Station':
    return 'F22';
    case 'Liverpool Street Underground Station':
    return 'F23';
    case 'Aldgate Underground Station':
    return 'F24';
    case 'Tower Hill Underground Station':
    return 'F25';
    case 'Monument Underground Station':
    return 'F26';
    case 'Cannon Street Underground Station':
    return 'F27';
    case 'Mansion House Underground Station':
    return 'F28';
    case 'Blackfriars Underground Station':
    return 'F29';
    case 'Temple Underground Station':
    return 'F30';
    case 'Embankment Underground Station':
    return 'F31';
    case 'Westminster Underground Station':
    return 'F32';
    case 'St. Jamess Park Underground Station':
    return 'F33';
    case 'Victoria Underground Station':
    return 'F34';
    case 'Sloane Square Underground Station':
    return 'F35';
    case 'South Kensington Underground Station':
    return 'F36';
    case 'Gloucester Road Underground Station':
    return 'F37';
    case 'High Street Kensington Underground Station':
    return 'F38';
    case 'Notting Hill Gate Underground Station':
    return 'F39';
    case 'Bayswater Underground Station':
    return 'F40';
    case 'Paddington Underground Station':
    return 'F41';
    default:
    return 'F42';
    }
  }
  
  module.exports = assignNoteForMetropolitanLine;