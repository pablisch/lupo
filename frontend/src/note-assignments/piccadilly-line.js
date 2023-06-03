const assignNoteForPiccadillyLine = (stationName) => {
  switch(stationName) {
    case 'Cockfosters Underground Station':
    return 'G1';
    case 'Oakwood Underground Station':
    return 'G2';
    case 'Southgate Underground Station':
    return 'G3';
    case 'Arnos Grove Underground Station':
    return 'G4';
    case 'Bounds Green Underground Station':
    return 'G5';
    case 'Wood Green Underground Station':
    return 'G6';
    case 'Turnpike Lane Underground Station':
    return 'G7';
    case 'Manor House Underground Station':
    return 'G8';
    case 'Finsbury Park Underground Station':
    return 'G9';
    case 'Arsenal Underground Station':
    return 'G10';
    case 'Holloway Road Underground Station':
    return 'G11';
    case 'Caledonian Road Underground Station':
    return 'G12';
    case 'Kings Cross St. Pancras Underground Station':
    return 'G13';
    case 'Russell Square Underground Station':
    return 'G14';
    case 'Holborn Underground Station':
    return 'G15';
    case 'Covent Garden Underground Station':
    return 'G16';
    case 'Leicester Square Underground Station':
    return 'G17';
    case 'Piccadilly Circus Underground Station':
    return 'G18';
    case 'Green Park Underground Station':
    return 'G19';
    case 'Hyde Park Corner Underground Station':
    return 'G20';
    case 'Knightsbridge Underground Station':
    return 'G21';
    case 'South Kensington Underground Station':
    return 'G22';
    case 'Gloucester Road Underground Station':
    return 'G23';
    case 'Earls Court Underground Station':
    return 'G24';
    case 'Barons Court Underground Station':
    return 'G25';
    case 'Hammersmith Underground Station':
    return 'G26';
    case 'Turnham Green Underground Station':
    return 'G27';
    case 'Acton Town Underground Station':
    return 'G28';
    case 'South Ealing Underground Station':
    return 'G29';
    case 'Northfields Underground Station':
    return 'G30';
    case 'Boston Manor Underground Station':
    return 'G31';
    case 'Osterley Underground Station':
    return 'G32';
    case 'Hounslow East Underground Station':
    return 'G33';
    case 'Hounslow Central Underground Station':
    return 'G34';
    case 'Hounslow West Underground Station':
    return 'G35';
    case 'Hatton Cross Underground Station':
    return 'G36';
    case 'Heathrow Terminal 4 Underground Station':
    return 'G37';
    case 'Heathrow Terminals 2 & 3 Underground Station':
    return 'G38';
    case 'Heathrow Terminal 5 Underground Station':
    return 'G39';
    default:
    return 'G40';
    }
  }
  
  module.exports = assignNoteForPiccadillyLine;