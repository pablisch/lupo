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
    baseUrl: "/samples/clarinet/",
  }).toDestination();
  clarinetSampler.volume.value = -9;

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      // "A1": "double-bass_A1_05_forte_arco-normal.mp3",
      "A#1": "double-bass_As1_025_piano_pizz-normal.mp3",
      "A#2": "double-bass_As2_025_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  doubleBassSampler.volume.value = -9
  await Tone.loaded();

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
      "A5": "violin_A5_1_mezzo-piano_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(freeverb);
  violinSampler.volume.value = -6;

  const windChimesSampler = new Tone.Sampler({
    urls: {
      "C4": "wind_chimes.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  windChimesSampler.volume.value = -6;

  const bassoonSampler = new Tone.Sampler({
    urls: {
      "A2": "bassoon_A2_025_mezzo-piano_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  bassoonSampler.volume.value = -6;

  const celloSampler = new Tone.Sampler({
    urls: {
      "A4": "cello_A4_15_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  celloSampler.volume.value = -6;

  const saxophoneSampler = new Tone.Sampler({
    urls: {
      "A4": "saxophone_A4_very-long_cresc-decresc_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  saxophoneSampler.volume.value = -6;

  const trumpetSampler = new Tone.Sampler({
    urls: {
      "A4": "trumpet_A4_15_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  trumpetSampler.volume.value = -6;

  const tubaSampler = new Tone.Sampler({
    urls: {
      "C2": "tuba_C2_025_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  })
  trumpetSampler.volume.value = -6;

  // const synth = new Tone.PolySynth(Tone.Synth).toDestination(); 
  // synth.volume.value = -6;
    
  let instruments = {
    Bakerloo: violinSampler,
    Central: windChimesSampler,
    Circle: clarinetSampler,
    District: bassoonSampler,
    Hammersmith_City: celloSampler,
    Jubilee: saxophoneSampler,
    Metropolitan: mandolinSampler,
    Northern: trumpetSampler,
    Piccadilly: saxophoneSampler,
    Victoria: violaSampler, 
    Waterloo_City: tubaSampler,

    Pedal: sustainedHornSampler
  };

  return instruments;
}

export default audioStartup;

