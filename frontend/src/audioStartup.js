import * as Tone from 'tone';
import getNoteAssignFunctions from './note-assignments/getNoteAssignFunctions';

const audioStartup = async (instrumentSet) => {
  await Tone.start()

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

  const marimbaSampler = new Tone.Sampler({
    urls: {
      "A2": "marimba_a2.mp3",
      "A3": "marimba_a3.mp3",
      "A4": "marimba_a4.mp3",
      "A5": "marimba_a5.mp3",
      "C3": "marimba_c3.mp3",
      "C4": "marimba_c4.mp3",
      "C5": "marimba_c5.mp3",
      "C6": "marimba_c6.mp3",
      "D2": "marimba_d2.mp3",
      "D3": "marimba_d3.mp3",
      "D4": "marimba_d4.mp3",
      "D5": "marimba_d5.mp3",
      "E2": "marimba_e2.mp3",
      "E3": "marimba_e3.mp3",
      "E4": "marimba_e4.mp3",
      "E5": "marimba_e5.mp3",
      "G2": "marimba_g2.mp3",
      "G3": "marimba_g3.mp3",
      "G4": "marimba_g4.mp3",
      "G5": "marimba_g5.mp3"
    },
    release: 1,
    baseUrl: "/samples/marimba_hits/",
  }).connect(reverb);
  marimbaSampler.volume.value = -6;
  

  const celloSampler = new Tone.Sampler({
    urls: {
      "A5": "cello_A5_05_forte_arco-normal.mp3",
      "A4": "cello_A4_15_forte_arco-normal.mp3",
      "A3": "cello_A3_025_forte_arco-normal.mp3",
    },
    release: 0.5,
    baseUrl: "/samples/cello/",
  }).connect(reverb);
  celloSampler.maxVolume = -6;
  celloSampler.volume.value = celloSampler.maxVolume;

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
  clarinetSampler.maxVolume = -9;
  clarinetSampler.volume.value = clarinetSampler.maxVolume;

  const doubleBassPizzSampler = new Tone.Sampler({
    urls: {
      "A#1": "double-bass_As1_025_piano_pizz-normal.mp3",
      "A#2": "double-bass_As2_025_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassPizzSampler.maxVolume = -3;
  doubleBassPizzSampler.volume.value = doubleBassPizzSampler.maxVolume;

  const doubleBassSampler = new Tone.Sampler({
    urls: {
      "A1": "double-bass_A1_05_forte_arco-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/double-bass/",
  }).toDestination();
  doubleBassSampler.maxVolume = -6;
  doubleBassSampler.volume.value = doubleBassSampler.maxVolume;

  const mandolinSampler = new Tone.Sampler({  
    urls: {
      "A5": "mandolin_A5_very-long_piano_normal.mp3",
      "A6": "mandolin_A6_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/mandolin/",
  }).connect(reverb);
  mandolinSampler.maxVolume = -18;
  mandolinSampler.volume.value = mandolinSampler.maxVolume;

  const sustainedHornSampler = new Tone.Sampler({
    urls: {
      "C5": "french-horn_C5_very-long_piano_normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/french-horn/",
  }).toDestination();
  sustainedHornSampler.maxVolume = -12;
  sustainedHornSampler.volume.value = -100;

  const saxophoneSampler = new Tone.Sampler({
    urls: {
      "A4": "saxophone_A4_very-long_cresc-decresc_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  saxophoneSampler.maxVolume = -6;
  saxophoneSampler.volume.value = saxophoneSampler.maxVolume;

  const trumpetSampler = new Tone.Sampler({
    urls: {
      "A4": "trumpet_A4_15_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  trumpetSampler.maxVolume = -6;
  trumpetSampler.volume.value = trumpetSampler.maxVolume;

  const tubaSampler = new Tone.Sampler({
    urls: {
      "C2": "tuba_C2_025_pianissimo_normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  tubaSampler.maxVolume = -6;
  tubaSampler.volume.value = tubaSampler.maxVolume;

  const violaSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_A3_1_piano_pizz-normal.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).connect(reverb);
  violaSampler.maxVolume = -6
  violaSampler.volume.value = violaSampler.maxVolume;

  const violinSampler = new Tone.Sampler({
    urls: {
      "A6": "violin_A6_1_piano_arco-normal.mp3",
      "A5": "violin_A5_1_mezzo-piano_arco-normal.mp3",
      "A4": "violin_A4_05_mezzo-piano_arco-normal.mp3",
      "A3": "violin_A3_025_mezzo-piano_arco-normal.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin/",
  }).connect(reverb);
  violinSampler.maxVolume = -6
  violinSampler.volume.value = violinSampler.maxVolume;

  const windChimesSampler = new Tone.Sampler({
    urls: {
      "C4": "wind_chimes_short.mp3",
    },
    release: 1,
    baseUrl: "/samples/",
  }).toDestination();
  windChimesSampler.maxVolume = -6;
  windChimesSampler.volume.value = windChimesSampler.maxVolume;

  await Tone.loaded();

  // return {
  //   Bakerloo: violinSampler,
  //   Central: doubleBassSampler,
  //   Circle: violinSampler,
  //   District: tubaSampler,
  //   HammersmithCity: celloSampler,
  //   Jubilee: clarinetSampler,
  //   Metropolitan: mandolinSampler,
  //   Northern: doubleBassPizzSampler,
  //   Piccadilly: saxophoneSampler,
  //   Victoria: violaSampler, 
  //   WaterlooCity: windChimesSampler,

  //   Pedal: sustainedHornSampler
  // };

  let instruments = {}

  console.log(`instrumentSet is ${instrumentSet}`)

  if (instrumentSet === 'strings') {
      instruments = {
        Bakerloo: violinSampler,
        Central: violinSampler,
        Circle: violinSampler,
        District: violinSampler,
        HammersmithCity: violinSampler,
        Jubilee: violinSampler,
        Metropolitan: violaSampler,
        Northern: violaSampler,
        Piccadilly: violaSampler,
        Victoria: violaSampler, 
        WaterlooCity: violaSampler,
        Pedal: violinSampler,

      };
  } else if (instrumentSet === 'marimba') {
    instruments = {
      Bakerloo: marimbaSampler,
      Central: marimbaSampler,
      Circle: marimbaSampler,
      District: marimbaSampler,
      HammersmithCity: marimbaSampler,
      Jubilee: marimbaSampler,
      Metropolitan: marimbaSampler,
      Northern: marimbaSampler,
      Piccadilly: marimbaSampler,
      Victoria: marimbaSampler, 
      WaterlooCity: marimbaSampler,
      Pedal: marimbaSampler
    };
  }

  // getNoteAssignFunctions returns an object with line names as keys and note assign functions as values
  instruments.noteAssignFunctions = getNoteAssignFunctions(instrumentSet);

  return instruments;
}

export default audioStartup;

