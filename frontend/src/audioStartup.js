import * as Tone from 'tone';

const audioStartup = async (instrumentSet) => {
  await Tone.start()

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

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
    
        Pedal: violinSampler
      };
  } else if (instrumentSet === 'marimba') {
    instruments = {
      Bakerloo: clarinetSampler,
      Central: clarinetSampler,
      Circle: clarinetSampler,
      District: clarinetSampler,
      HammersmithCity: clarinetSampler,
      Jubilee: clarinetSampler,
      Metropolitan: clarinetSampler,
      Northern: clarinetSampler,
      Piccadilly: clarinetSampler,
      Victoria: clarinetSampler, 
      WaterlooCity: clarinetSampler,
  
      Pedal: clarinetSampler
    };
  }
    return instruments;
}

export default audioStartup;

