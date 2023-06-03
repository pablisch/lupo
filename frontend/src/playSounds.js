import assignNoteForVictoriaLine from './note-assignments/victoria-line';
import assignNoteForJubileeLine from './note-assignments/jubilee-line';
import assignNoteForNorthernLine from './note-assignments/northern-line';

const playSounds = (quantisedTubeData, instruments) => {
  quantisedTubeData.forEach((train) => {
    // can this be refactored into one expression for all lines?
    if (train.lineName === 'Victoria') {
      const note = assignNoteForVictoriaLine(train.stationName);
      setTimeout(() => {
        instruments.Victoria.triggerAttackRelease(note, '8n');
        console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      }, train.timeToStation * 1000);
    } else if (train.lineName === 'Jubilee') {
      const note = assignNoteForJubileeLine(train.stationName);
      setTimeout(() => {
        instruments.Jubilee.triggerAttackRelease(note, '4n');
        console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      }, train.timeToStation * 1000);
    } else if (train.lineName === 'Northern') {
      const note = assignNoteForNorthernLine(train.stationName);
      setTimeout(() => {
        instruments.Northern.triggerAttackRelease(note, '8n');
        console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      }, train.timeToStation * 1000);
    }
  })
}

export default playSounds;
