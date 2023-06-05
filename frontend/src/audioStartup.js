import * as Tone from 'tone';

const audioStartup = async () => {
  await Tone.start()

  const freeverb = new Tone.Freeverb().toDestination();
  freeverb.dampening = 1000;

  const pizzViolaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_A3_1_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  pizzViolaSampler.volume.value = -6

  const clarinetSampler = new Tone.Sampler({
    urls: {
      "A3": "clarinet_A3_05_piano_normal.mp3",
      "A4": "clarinet_A4_05_piano_normal.mp3",
      "A6": "clarinet_A6_05_piano_normal.mp3",
      "C4": "clarinet_C4_1_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  clarinetSampler.volume.value = -6;

  const sustainedHornSampler = new Tone.Sampler({
    urls: {
      "C7": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  sustainedHornSampler.volume.value = 15;

  const sustainedHornSampler2 = new Tone.Sampler({
    urls: {
      "C5": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  sustainedHornSampler2.volume.value = -35;

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      "A1": "double-bass_A1_05_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  doubleBassSampler.volume.value = -18
  await Tone.loaded();

  let instruments = {
    Victoria: pizzViolaSampler, 
    Jubilee: clarinetSampler,
    Northern: doubleBassSampler,
    Pedal: sustainedHornSampler,
    Pedal: sustainedHornSampler2
  };

  return instruments;
}

export default audioStartup;
