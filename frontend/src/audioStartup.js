import * as Tone from 'tone';

const audioStartup = async () => {
  await Tone.start()

  const freeverb = new Tone.Freeverb().toDestination();
  freeverb.dampening = 1000;

  const celloSampler = new Tone.Sampler({
    urls: {
      "A5": "cello_A5_05_forte_arco-normal.mp3",
      "A4": "cello_A4_15_forte_arco-normal.mp3",
      "A3": "cello_A3_025_forte_arco-normal.mp3",
    },
    release: 0.5,
    baseUrl: "/samples/cello/",
  }).connect(freeverb);
  celloSampler.volume.value = -6;

  const clarinetSampler = new Tone.Sampler({
    urls: {
      "A3": "clarinet_A3_05_piano_normal.mp3",
      "A4": "clarinet_A4_05_piano_normal.mp3",
      "A6": "clarinet_A6_05_piano_normal.mp3",
      "C4": "clarinet_C4_1_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/clarinet/",
  }).toDestination();
  clarinetSampler.volume.value = -9;

  const doubleBassPizzSampler = new Tone.Sampler({
    urls: {
      "A#1": "double-bass_As1_025_piano_pizz-normal.mp3",
      "A#2": "double-bass_As2_025_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassPizzSampler.volume.value = -3

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      "A1": "double-bass_A1_05_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassSampler.volume.value = -6

  const mandolinSampler = new Tone.Sampler({  
    urls: {
      "A5": "mandolin_A5_very-long_piano_normal.mp3",
      "A6": "mandolin_A6_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/mandolin/",
  }).connect(freeverb);
  mandolinSampler.volume.value = -9;

  const sustainedHornSampler = new Tone.Sampler({
    urls: {
      "C5": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/french-horn/",
  }).toDestination();
  sustainedHornSampler.volume.value = -100

  const saxophoneSampler = new Tone.Sampler({
    urls: {
      "A4": "saxophone_A4_very-long_cresc-decresc_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  saxophoneSampler.volume.value = -6;

  const trumpetSampler = new Tone.Sampler({
    urls: {
      "A4": "trumpet_A4_15_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  trumpetSampler.volume.value = -6;

  const tubaSampler = new Tone.Sampler({
    urls: {
      "C2": "tuba_C2_025_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  trumpetSampler.volume.value = -6;

  const violaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_A3_1_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  violaSampler.volume.value = -6;

  const violinSampler = new Tone.Sampler({
    urls: {
      "A6": "violin_A6_1_piano_arco-normal.mp3",
      "A5": "violin_A5_1_mezzo-piano_arco-normal.mp3",
      "A4": "violin_A4_05_mezzo-piano_arco-normal.mp3",
      "A3": "violin_A3_025_mezzo-piano_arco-normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin/",
  }).connect(freeverb);
  violinSampler.volume.value = -6;

  const windChimesSampler = new Tone.Sampler({
    urls: {
      "C4": "wind_chimes_short.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  windChimesSampler.volume.value = -6;

  await Tone.loaded();

  return {
    Bakerloo: violinSampler,
    Central: doubleBassSampler,
    Circle: violinSampler,
    District: tubaSampler,
    Hammersmith_City: celloSampler,
    Jubilee: clarinetSampler,
    Metropolitan: mandolinSampler,
    Northern: doubleBassPizzSampler,
    Piccadilly: saxophoneSampler,
    Victoria: violaSampler, 
    Waterloo_City: windChimesSampler,

    Pedal: sustainedHornSampler
  };
}

export default audioStartup;

