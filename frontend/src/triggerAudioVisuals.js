import assignNoteForBakerloo from './note-assignments/bakerloo';
import assignNoteForCentral from './note-assignments/central';
import assignNoteForCircle from './note-assignments/circle'
import assignNoteForDistrict from './note-assignments/district';
import assignNoteForHammersmithCity from  './note-assignments/hammersmithandcity'
import assignNoteForJubilee from './note-assignments/jubilee';
import assignNoteForMetropolitan from './note-assignments/metropolitan';
import assignNoteForNorthern from './note-assignments/northern';
import assigneNoteForPicadilly from './note-assignments/piccadilly'
import assignNoteForVictoria from './note-assignments/victoria';
import assignNoteForWaterlooAndCity from './note-assignments/waterlooandcity';

const noteAssignFunctions = {
  Bakerloo: assignNoteForBakerloo,
  Central: assignNoteForCentral,
  Circle: assignNoteForCircle,
  District: assignNoteForDistrict,
  Hammersmith_City: assignNoteForHammersmithCity,
  Jubilee: assignNoteForJubilee,
  Metropolitan: assignNoteForMetropolitan,
  Northern: assignNoteForNorthern,
  Piccadilly: assigneNoteForPicadilly,
  Victoria: assignNoteForVictoria,
  Waterloo_City: assignNoteForWaterlooAndCity
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
