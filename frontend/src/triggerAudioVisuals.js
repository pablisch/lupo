import assignNoteForBakerlooLine from './note-assignments/bakerloo';
import assignNoteForCentralLine from './note-assignments/central';
import assignNoteForCircleLine from './note-assignments/circle'
import assignNoteForDistrictLine from './note-assignments/district';
import assignNoteForHammersmithCityLine from  './note-assignments/hammersmithandcity'
import assignNoteForJubileeLine from './note-assignments/jubilee';
import assignNoteForMetropolitanLine from './note-assignments/metropolitan';
import assignNoteForNorthernLine from './note-assignments/northern';
import assigneNoteForPicadillyLine from './note-assignments/piccadilly'
import assignNoteForVictoriaLine from './note-assignments/victoria';
import assignNoteForWaterlooAndCityLine from './note-assignments/waterlooandcity';

const noteAssignFunctions = {
  Bakerloo: assignNoteForBakerlooLine,
  Central: assignNoteForCentralLine,
  Circle: assignNoteForCircleLine,
  District: assignNoteForDistrictLine,
  Hammersmith_City: assignNoteForHammersmithCityLine,
  Jubilee: assignNoteForJubileeLine,
  Metropolitan: assignNoteForMetropolitanLine,
  Northern: assignNoteForNorthernLine,
  Piccadilly: assigneNoteForPicadillyLine,
  Victoria: assignNoteForVictoriaLine,
  Waterloo_City: assignNoteForWaterlooAndCityLine
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
