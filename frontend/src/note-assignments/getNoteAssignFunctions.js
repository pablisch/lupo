import assignNoteForBakerloo from './bakerloo';
import assignNoteForCentral from './central';
import assignNoteForCircle from './circle'
import assignNoteForDistrict from './district';
import assignNoteForHammersmithCity from './hammersmithandcity'
import assignNoteForJubilee from './jubilee';
import assignNoteForMetropolitan from './metropolitan';
import assignNoteForNorthern from './northern';
import assigneNoteForPicadilly from './piccadilly'
import assignNoteForVictoria from './victoria';
import assignNoteForWaterlooAndCity from './waterlooandcity';

const noteAssignFunctions =  {
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

export default noteAssignFunctions;
