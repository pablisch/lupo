import stringsBakerlooNoteAssignment from './strings/bakerloo';
import stringsCentralNoteAssignment from './strings/central';
import stringsCircleNoteAssignment from './strings/circle'
import stringsDistrictNoteAssignment from './strings/district';
import stringsHammersmithCityNoteAssignment from './strings/hammersmithandcity';
import stringsJubileeNoteAssignment from './strings/jubilee';
import stringsMetropolitanNoteAssignment from './strings/metropolitan';
import stringsNorthernNoteAssignment from './strings/northern';
import stringsPiccadillyNoteAssignment from './strings/piccadilly';
import stringsVictoriaNoteAssignment from './strings/victoria';
import stringsWaterlooAndCityNoteAssignment from './strings/waterlooandcity';

import marimbaBakerlooNoteAssignment from './marimba/bakerloo';
import marimbaCentralNoteAssignment from './marimba/central';
import marimbaCircleNoteAssignment from './marimba/circle'
import marimbaDistrictNoteAssignment from './marimba/district';
import marimbaHammersmithCityNoteAssignment from './marimba/hammersmithandcity';
import marimbaJubileeNoteAssignment from './marimba/jubilee';
import marimbaMetropolitanNoteAssignment from './marimba/metropolitan';
import marimbaNorthernNoteAssignment from './marimba/northern';
import marimbaPiccadillyNoteAssignment from './marimba/piccadilly';
import marimbaVictoriaNoteAssignment from './marimba/victoria';
import marimbaWaterlooAndCityNoteAssignment from './marimba/waterlooandcity';

const getNoteAssignFunctions = (instrumentSet) => {
  let noteAssignFunctions = {}

  if (instrumentSet === 'strings') {
    noteAssignFunctions = {
			Bakerloo: stringsBakerlooNoteAssignment,
			Central: stringsCentralNoteAssignment,
			Circle: stringsCircleNoteAssignment,
			District: stringsDistrictNoteAssignment,
			HammersmithCity: stringsHammersmithCityNoteAssignment,
			Jubilee: stringsJubileeNoteAssignment,
			Metropolitan: stringsMetropolitanNoteAssignment,
			Northern: stringsNorthernNoteAssignment,
			Piccadilly: stringsPiccadillyNoteAssignment,
			Victoria: stringsVictoriaNoteAssignment,
			WaterlooCity: stringsWaterlooAndCityNoteAssignment
		}
	} else if (instrumentSet === 'marimba') {
		noteAssignFunctions = {
			Bakerloo: marimbaBakerlooNoteAssignment,
			Central: marimbaCentralNoteAssignment,
			Circle: marimbaCircleNoteAssignment,
			District: marimbaDistrictNoteAssignment,
			HammersmithCity: marimbaHammersmithCityNoteAssignment,
			Jubilee: marimbaJubileeNoteAssignment,
			Metropolitan: marimbaMetropolitanNoteAssignment,
			Northern: marimbaNorthernNoteAssignment,
			Piccadilly: marimbaPiccadillyNoteAssignment,
			Victoria: marimbaVictoriaNoteAssignment,
			WaterlooCity: marimbaWaterlooAndCityNoteAssignment
		}
	}	
	return noteAssignFunctions;
}

export default getNoteAssignFunctions;
