import { arrivalEffectCreate } from './arrivalEffects';
import TIMEOUTS from './timeouts';
import Tone from 'tone'; // added this to get the Tone.now() function


const flashElement = (elementId) => {
  const element = document.getElementById(elementId.replace(/ *\([^)]*\) */g, ""));
  element.style.animation = "full-fade-in 1s forwards";
  setTimeout(() => {
    element.style.animation = "full-fade-out 1s forwards";
  }, 1500);
  // setTimeout(() => {
  //   element.style.animation = "full-fade-in 1s forwards";
  // }, 2000);
  // setTimeout(() => {
  //   element.style.animation = "full-fade-out 1s forwards";
  // }, 3000);
  
}

const triggerAudioVisuals = (quantisedTubeData, instruments, arrivalEffectsToggle, arrivals) => {
  quantisedTubeData.forEach((train) => {
    // const note = noteAssignFunctions[train.lineName](train.stationName);
    const note = instruments.noteAssignFunctions[train.lineName](train.stationName);
    TIMEOUTS.setTimeout(() => {
      const now = Tone.now(); // the audio context time
      const randomVelocity = Math.round(((Math.random() * 0.5) + 0.5) * 10) / 10 // random velocity between 0.5 and 1

      instruments[train.lineName].triggerAttackRelease(note, '4n', now, randomVelocity);
      // console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
      flashElement(train.stationName);
      arrivals.push([train.stationName]);
      if (arrivals.length > 10) {
        arrivals.shift();
      }
      if (arrivalEffectsToggle) {arrivalEffectCreate(train.stationName, arrivalEffectsToggle)};
    }, train.timeToStation * 1000)
  })
}

export default triggerAudioVisuals;
