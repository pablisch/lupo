import { arrivalFlareEffectCreate } from './arrivalFlareEffects';
import TIMEOUTS from './timeouts';
import * as Tone from 'tone'; // added this to get the Tone.now() function


const flashElement = (elementId) => {
  const element = document.getElementById(elementId.replace(/ *\([^)]*\) */g, ""));
  element.style.animation = "full-fade-in 1s forwards";
  setTimeout(() => {
    element.style.animation = "full-fade-out 1s forwards";
  }, 1500);  
}

const getRandomVelocity = () => {
  // A lower minimum velocity results in greater dynamic range / variation
  const minVelocity = 0.8;
  return Math.round(((Math.random() * minVelocity) + minVelocity) * 10) / 10 // result is 1dp
}

const triggerAudioVisuals = (quantisedTubeData, instruments, arrivalFlareEffectsToggle, arrivals) => {
  quantisedTubeData.forEach((train) => {
    // console.log(train.stationName, train.lineName)
    const note = instruments.noteAssignFunctions[train.lineName](train.stationName);
    TIMEOUTS.setTimeout(() => {
      const now = Tone.now(); // the audio context time
      const randomVelocity = getRandomVelocity();
      instruments[train.lineName].triggerAttackRelease(note, '4n', now, randomVelocity);
      // console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      flashElement(train.stationName);
      arrivals.push([train.stationName]);
      if (arrivals.length > 10) {
        arrivals.shift();
      }
      if (arrivalFlareEffectsToggle) {arrivalFlareEffectCreate(train.stationName, arrivalFlareEffectsToggle)};
    }, train.timeToStation * 1000)
  })
}

export default triggerAudioVisuals;
