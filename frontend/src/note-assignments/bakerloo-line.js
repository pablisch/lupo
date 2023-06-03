const assignNoteForBakerlooLine = (stationName) => {
  switch(stationName) {
    case 'Harrow & Wealdstone Underground Station':
    return 'B1';
    case 'Kenton Underground Station':
    return 'B2';
    case 'South Kenton Underground Station':
    return 'B3';
    case 'North Wembley Underground Station':
    return 'B4';
    case 'Wembley Central Underground Station':
    return 'B5';
    case 'Stonebridge Park Underground Station':
    return 'B6';
    case 'Harlesden Underground Station':
    return 'B7';
    case 'Willesden Junction Underground Station':
    return 'B8';
    case 'Kensal Green Underground Station':
    return 'B9';
    case 'Queens Park Underground Station':
    return 'B10';
    case 'Kilburn Park Underground Station':
    return 'B11';
    case 'Maida Vale Underground Station':
    return 'B12';
    case 'Warwick Avenue Underground Station':
    return 'B13';
    case 'Paddington Underground Station':
    return 'B14';
    case 'Edgware Road (Bakerloo) Underground Station':
    return 'B15';
    case 'Marylebone Underground Station':
    return 'B16';
    case 'Baker Street Underground Station':
    return 'B17';
    case 'Regents Park Underground Station':
    return 'B18';
    case 'Oxford Circus Underground Station':
    return 'B19';
    case 'Piccadilly Circus Underground Station':
    return 'B20';
    case 'Charing Cross Underground Station':
    return 'B21';
    case 'Embankment Underground Station':
    return 'B22';
    case 'Waterloo Underground Station':
    return 'B23';
    case 'Lambeth North Underground Station':
    return 'B24';
    case 'Elephant & Castle Underground Station':
    return 'B25';
    default:
    return 'B26';
    }
  }
  
  module.exports = assignNoteForBakerlooLine;