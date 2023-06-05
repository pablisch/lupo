import * as Tone from 'tone';

const audioStartup = async () => {
  await Tone.start()

  const freeverb = new Tone.Freeverb().toDestination();
  freeverb.dampening = 1000;

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
  clarinetSampler.volume.value = -9;

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      "A1": "double-bass_A1_05_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  doubleBassSampler.volume.value = -18
  await Tone.loaded();

  const mandolinSampler = new Tone.Sampler({  
    urls: {
      "A5": "mandolin_A5_very-long_piano_normal.mp3",
      "A6": "mandolin_A6_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  mandolinSampler.volume.value = -6;

  const sustainedHornSampler = new Tone.Sampler({
    urls: {
      "C5": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  sustainedHornSampler.volume.value = -100

  const violaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_A3_1_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  // violaSampler.volume.value = -6;

  const violinSampler = new Tone.Sampler({
    urls: {
      "A5": "violin_A5_1_mezzo-piano_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  // violinSampler.volume.value = -6;

  let instruments = {
    Bakerloo: violinSampler,
    Central: clarinetSampler,
    Circle: clarinetSampler,
    District: clarinetSampler,
    Hammersmith_City: clarinetSampler,
    Jubilee: clarinetSampler,
    Metropolitan: mandolinSampler,
    Northern: doubleBassSampler,
    Piccadilly: clarinetSampler,
    Victoria: violaSampler, 
    Waterloo_City: clarinetSampler,

    Pedal: sustainedHornSampler
  };

  return instruments;
}

export default audioStartup;

