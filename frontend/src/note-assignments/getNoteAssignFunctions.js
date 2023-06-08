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

import tubeDrumsBakerlooNoteAssignment from './tubeDrums/bakerloo';
import tubeDrumsCentralNoteAssignment from './tubeDrums/central';
import tubeDrumsCircleNoteAssignment from './tubeDrums/circle'
import tubeDrumsDistrictNoteAssignment from './tubeDrums/district';
import tubeDrumsHammersmithCityNoteAssignment from './tubeDrums/hammersmithandcity';
import tubeDrumsJubileeNoteAssignment from './tubeDrums/jubilee';
import tubeDrumsMetropolitanNoteAssignment from './tubeDrums/metropolitan';
import tubeDrumsNorthernNoteAssignment from './tubeDrums/northern';
import tubeDrumsPiccadillyNoteAssignment from './tubeDrums/piccadilly';
import tubeDrumsVictoriaNoteAssignment from './tubeDrums/victoria';
import tubeDrumsWaterlooAndCityNoteAssignment from './tubeDrums/waterlooandcity';

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
	} else if (instrumentSet === 'tubeDrums') {
		noteAssignFunctions = {
			Bakerloo: tubeDrumsBakerlooNoteAssignment,
			Central: tubeDrumsCentralNoteAssignment,
			Circle: tubeDrumsCircleNoteAssignment,
			District: tubeDrumsDistrictNoteAssignment,
			HammersmithCity: tubeDrumsHammersmithCityNoteAssignment,
			Jubilee: tubeDrumsJubileeNoteAssignment,
			Metropolitan: tubeDrumsMetropolitanNoteAssignment,
			Northern: tubeDrumsNorthernNoteAssignment,
			Piccadilly: tubeDrumsPiccadillyNoteAssignment,
			Victoria: tubeDrumsVictoriaNoteAssignment,
			WaterlooCity: tubeDrumsWaterlooAndCityNoteAssignment
		}
	}	
	return noteAssignFunctions;
}

export default getNoteAssignFunctions;
