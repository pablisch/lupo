import { arrivalEffectCreate } from './arrivalEffects';
import TIMEOUTS from './timeouts';
import * as Tone from 'tone'; // added this to get the Tone.now() function


const flashElement = (elementId) => {
  const element = document.getElementById(elementId.replace(/ *\([^)]*\) */g, ""));
  element.style.animation = "full-fade-in 1s forwards";
  TIMEOUTS.setTimeout(() => {
    element.style.animation = "full-fade-out 1s forwards";
  }, 1500);  
}

const triggerAudioVisuals = (quantisedTubeData, instruments, arrivalEffectsToggle, arrivals) => {
  quantisedTubeData.forEach((train) => {
    // const note = noteAssignFunctions[train.lineName](train.stationName);
    const note = instruments.noteAssignFunctions[train.lineName](train.stationName);
    TIMEOUTS.setTimeout(() => {
      const now = Tone.now(); // the audio context time
      const minVelocity = 0.4;
      // max velocity is 1 as 1 is max output from Math.random()
      const randomVelocity = Math.round(((Math.random() * minVelocity) + minVelocity) * 10) / 10 // random velocity between 0.3 and 1
      // console.log(randomVelocity)
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
