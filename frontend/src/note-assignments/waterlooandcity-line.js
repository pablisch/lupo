const assignNoteForWaterlooAndCityLine = (stationName) => {
  switch(stationName) {
    case 'Waterloo Underground Station':
    return 'H1';
    case 'Bank Underground Station':
    return 'H2';
    default:
    return 'H3';
    }
  }
  
  module.exports = assignNoteForWaterlooAndCityLine;