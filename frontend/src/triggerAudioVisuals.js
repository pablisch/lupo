import noteAssignFunctions from './note-assignments/getNoteAssignFunctions'

const triggerAudioVisuals = (quantisedTubeData, instruments) => {
  quantisedTubeData.forEach((train) => {
    const note = noteAssignFunctions[train.lineName](train.stationName);
    setTimeout(() => {
      instruments[train.lineName].triggerAttackRelease(note, '4n');
      console.log(`${train.stationName} - ${train.lineName} line. Time To Station: ${train.timeToStation}`);
    }, train.timeToStation * 1000)
  })
}

export default triggerAudioVisuals;
