import assignNoteForVictoriaLine from './note-assignments/victoria-line';
import assignNoteForJubileeLine from './note-assignments/jubilee-line';
import assignNoteForNorthernLine from './note-assignments/northern-line';

const noteAssignFunctions = {
  Bakerloo: assignNoteForNorthernLine,
  Central: assignNoteForNorthernLine,
  Circle: assignNoteForNorthernLine,
  District: assignNoteForNorthernLine,
  HammersmithCity: assignNoteForNorthernLine,
  Jubilee: assignNoteForJubileeLine,
  Metropolitan: assignNoteForNorthernLine,
  Northern: assignNoteForNorthernLine,
  Piccadilly: assignNoteForNorthernLine,
  Victoria: assignNoteForVictoriaLine,
  WaterlooCity: assignNoteForNorthernLine
}

const triggerAudioVisuals = (quantisedTubeData, instruments) => {
  quantisedTubeData.forEach((train) => {
    const note = noteAssignFunctions[train.lineName](train.stationName);
    setTimeout(() => {
      console.log(instruments[train.lineName])
      instruments[train.lineName].triggerAttackRelease(note, '4n');
      console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
    })
  })
}

export default triggerAudioVisuals;
