const assignNoteForWaterlooAndCityLine = (stationName) => {
  const lowOctave = 4;

  switch(stationName) {
    case 'Waterloo Underground Station':
    return `D${lowOctave}`;
    case 'Bank Underground Station':
    return `C${lowOctave}`;
    default:
    return `A${lowOctave}`;
    }
  }
  
  module.exports = assignNoteForWaterlooAndCityLine;