import assignNoteForVictoriaLine from './note-assignments/victoria';
import assignNoteForJubileeLine from './note-assignments/jubilee';
import assignNoteForNorthernLine from './note-assignments/northern';
import assignNoteForMetropolitanLine from './note-assignments/metropolitan';


const noteAssignFunctions = {
  Bakerloo: assignNoteForNorthernLine,
  Central: assignNoteForNorthernLine,
  Circle: assignNoteForNorthernLine,
  District: assignNoteForNorthernLine,
  HammersmithCity: assignNoteForNorthernLine,
  Jubilee: assignNoteForJubileeLine,
  Metropolitan: assignNoteForMetropolitanLine,
  Northern: assignNoteForNorthernLine,
  Piccadilly: assignNoteForNorthernLine,
  Victoria: assignNoteForVictoriaLine,
  WaterlooCity: assignNoteForNorthernLine
}

const triggerAudioVisuals = (quantisedTubeData, instruments) => {
  quantisedTubeData.forEach((train) => {
    const note = noteAssignFunctions[train.lineName](train.stationName);
    setTimeout(() => {
      instruments[train.lineName].triggerAttackRelease(note, '4n');
      console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
    })
  })
}

export default triggerAudioVisuals;
