const assignNoteForPiccadillyLine = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    case 'Cockfosters Underground Station':
      return `G${lowOctave + 2}`;
    case 'Oakwood Underground Station':
      return `G${lowOctave + 2}`;
    case 'Southgate Underground Station':
      return `E${lowOctave + 2}`;
    case 'Arnos Grove Underground Station':
      return `E${lowOctave + 2}`;
    case 'Bounds Green Underground Station':
      return `D${lowOctave + 2}`;
    case 'Wood Green Underground Station':
      return `D${lowOctave + 2}`;
    case 'Turnpike Lane Underground Station':
      return `C${lowOctave + 2}`;
    case 'Manor House Underground Station':
      return `C${lowOctave + 2}`;
    case 'Finsbury Park Underground Station':
      return `C${lowOctave + 2}`;
    case 'Arsenal Underground Station':
      return `A${lowOctave + 2}`;
    case 'Holloway Road Underground Station':
      return `A${lowOctave + 2}`;
    case 'Caleonian Road Underground Station':
      return `A${lowOctave + 2}`;
    case 'Kings Cross St. Pancras Underground Station':
      return `G${lowOctave + 1}`;
    case 'Russell Square Underground Station':
      return `G${lowOctave + 1}`;
    case 'Holborn Underground Station':
      return `G${lowOctave + 1}`;
    case 'Covent Garden Underground Station':
      return `E${lowOctave + 1}`;
    case 'Leicester Square Underground Station':
      return `E${lowOctave + 1}`;
    case 'Green Park Underground Station':
      return `E${lowOctave + 1}`;
    case 'Piccadilly Circus Underground Station':
      return `D${lowOctave + 1}`;
    case 'Hyde Park Corner Underground Station':
      return `D${lowOctave + 1}`;
    case 'Knightsbridge Underground Station':
      return `D${lowOctave + 1}`;
    case 'South Kensington Underground Station':
      return `C${lowOctave + 1}`;
    case 'Gloucester Road Underground Station':
      return `C${lowOctave + 1}`;
    case 'Earls Court Underground Station':
      return `C${lowOctave + 1}`;
    case 'Barons Court Underground Station':
      return `A${lowOctave + 1}`;
    case 'Hammersmith Underground Station':
      return `A${lowOctave + 1}`;
    case 'Turnham Green Underground Station':
      return `A${lowOctave + 1}`;
    case 'Acton Town Underground Station':
      return `G${lowOctave}`;
    case 'South Ealing Underground Station':
      return `G${lowOctave}`;
    case 'Northfields Underground Station':
      return `G${lowOctave}`;
    case 'Boston Manor Underground Station':
      return `E${lowOctave}`;
    case 'Osterley Underground Station':
      return `E${lowOctave}`;
    case 'Hounslow East Underground Station':
      return `E${lowOctave}`;
    case 'Hounslow Central Underground Station':
      return `D${lowOctave}`;
    case 'Hounslow West Underground Station':
      return `D${lowOctave}`;
    case 'Hatton Cross Underground Station':
      return `D${lowOctave}`;
    case 'Heathrow Terminal 4 Underground Station':
      return `C${lowOctave}`;
    case 'Heathrow Terminals 2 & 3 Underground Station':
      return `C${lowOctave}`;
    case 'Heathrow Terminal 5 Underground Station':
      return `C${lowOctave}`;
    default:
      return `A${lowOctave}`;
    }
  }
  
  module.exports = assignNoteForPiccadillyLine;