const assignNoteForDistrictLine = (stationName) => {
  switch(stationName) {
    case 'Upminster Underground Station':
    return 'D1';
    case 'Upminster Bridge Underground Station':
    return 'D2';
    case 'Hornchurch Underground Station':
    return 'D3';
    case 'Elm Park Underground Station':
    return 'D4';
    case 'Dagenham East Underground Station':
    return 'D5';
    case 'Dagenham Heathway Underground Station':
    return 'D6';
    case 'Becontree Underground Station':
    return 'D7';
    case 'Upney Underground Station':
    return 'D8';
    case 'Barking Underground Station':
    return 'D9';
    case 'East Ham Underground Station':
    return 'D10';
    case 'Upton Park Underground Station':
    return 'D11';
    case 'Plaistow Underground Station':
    return 'D12';
    case 'West Ham Underground Station':
    return 'D13';
    case 'Bromley-by-Bow Underground Station':
    return 'D14';
    case 'Bow Road Underground Station':
    return 'D15';
    case 'Mile End Underground Station':
    return 'D16';
    case 'Stepney Green Underground Station':
    return 'D17';
    case 'Whitechapel Underground Station':
    return 'D18';
    case 'Aldgate East Underground Station':
    return 'D19';
    case 'Tower Hill Underground Station':
    return 'D20';
    case 'Monument Underground Station':
    return 'D21';
    case 'Cannon Street Underground Station':
    return 'D22';
    case 'Mansion House Underground Station':
    return 'D23';
    case 'Blackfriars Underground Station':
    return 'D24';
    case 'Temple Underground Station':
    return 'D25';
    case 'Embankment Underground Station':
    return 'D26';
    case 'Westminster Underground Station':
    return 'D27';
    case 'St. Jamess Park Underground Station':
    return 'D28';
    case 'Victoria Underground Station':
    return 'D29';
    case 'Sloane Square Underground Station':
    return 'D30';
    case 'South Kensington Underground Station':
    return 'D31';
    case 'Gloucester Road Underground Station':
    return 'D32';
    case 'Earls Court Underground Station':
    return 'D33';
    case 'West Brompton Underground Station':
    return 'D34';
    case 'Fulham Broadway Underground Station':
    return 'D35';
    case 'Parsons Green Underground Station':
    return 'D36';
    case 'Putney Bridge Underground Station':
    return 'D37';
    case 'East Putney Underground Station':
    return 'D38';
    case 'Southfields Underground Station':
    return 'D39';
    case 'Wimbledon Park Underground Station':
    return 'D40';
    case 'Wimbledon Underground Station':
    return 'D41';
    case 'Wimbledon Chase Underground Station':
    return 'D42';
    case 'Morden Road Tramlink Stop':
    return 'D43';
    case 'South Wimbledon Underground Station':
    return 'D44';
    default:
    return 'D45';
    }
  }
  
  module.exports = assignNoteForDistrictLine;