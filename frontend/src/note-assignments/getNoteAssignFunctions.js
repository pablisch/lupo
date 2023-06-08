import orchestraBakerlooNoteAssignment from './orchestra/bakerloo';
import orchestraCentralNoteAssignment from './orchestra/central';
import orchestraCircleNoteAssignment from './orchestra/circle'
import orchestraDistrictNoteAssignment from './orchestra/district';
import orchestraHammersmithCityNoteAssignment from './orchestra/hammersmithandcity';
import orchestraJubileeNoteAssignment from './orchestra/jubilee';
import orchestraMetropolitanNoteAssignment from './orchestra/metropolitan';
import orchestraNorthernNoteAssignment from './orchestra/northern';
import orchestraPiccadillyNoteAssignment from './orchestra/piccadilly';
import orchestraVictoriaNoteAssignment from './orchestra/victoria';
import orchestraWaterlooAndCityNoteAssignment from './orchestra/waterlooandcity';

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

  if (instrumentSet === 'orchestra') {
    noteAssignFunctions = {
			Bakerloo: orchestraBakerlooNoteAssignment,
			Central: orchestraCentralNoteAssignment,
			Circle: orchestraCircleNoteAssignment,
			District: orchestraDistrictNoteAssignment,
			HammersmithCity: orchestraHammersmithCityNoteAssignment,
			Jubilee: orchestraJubileeNoteAssignment,
			Metropolitan: orchestraMetropolitanNoteAssignment,
			Northern: orchestraNorthernNoteAssignment,
			Piccadilly: orchestraPiccadillyNoteAssignment,
			Victoria: orchestraVictoriaNoteAssignment,
			WaterlooCity: orchestraWaterlooAndCityNoteAssignment
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
