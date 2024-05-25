import * as Tone from 'tone';
import getNoteAssignFunctions from './note-assignments/getNoteAssignFunctions';

const audioStartup = async (instrumentSet) => {
  await Tone.start()

  const reverb = new Tone.Reverb(2.5).toDestination(); // decay time as arg
  reverb.wet.value = 0.4; // 1 == 100% reverb. 0 == no reverb

  const marimbaSamplerSetupParams = {
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
  }

  const marimbaSamplers = {};

  for (let i = 1; i < 13; i++) {
    const sampler = new Tone.Sampler(marimbaSamplerSetupParams).connect(reverb);
    sampler.maxVolume = -6;
    sampler.volume.value = sampler.maxVolume;
    marimbaSamplers[`marimbaSampler${i}`] = sampler;
  }

  const violaSampler = new Tone.Sampler({
    urls: {
      "A2": "viola_legato_a2.mp3",
      "A3": "viola_legato_a3.mp3",
      "A4": "viola_legato_a4.mp3",
      "C3": "viola_legato_c3.mp3",
      "C4": "viola_legato_c4.mp3",
      "C5": "viola_legato_c5.mp3",
      "D2": "viola_legato_d2.mp3",
      "D3": "viola_legato_d3.mp3",
      "D4": "viola_legato_d4.mp3",
      "E2": "viola_legato_e2.mp3",
      "E3": "viola_legato_e3.mp3",
      "E4": "viola_legato_e4.mp3",
      "G3": "viola_legato_g3.mp3",
      "G4": "viola_legato_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/viola_samples/",
  }).connect(reverb);
  violaSampler.maxVolume = -6
  violaSampler.volume.value = violaSampler.maxVolume;

  const violinSampler = new Tone.Sampler({
    urls: {
      "A3": "violin_legato_a3.mp3",
      "A4": "violin_legato_a4.mp3",
      "A5": "violin_legato_a5.mp3",
      "C3": "violin_legato_c3.mp3",
      "C4": "violin_legato_c4.mp3",
      "C5": "violin_legato_c5.mp3",
      "C6": "violin_legato_c6.mp3",
      "D3": "violin_legato_d3.mp3",
      "D4": "violin_legato_d4.mp3",
      "D5": "violin_legato_d5.mp3",
      "E3": "violin_legato_e3.mp3",
      "E4": "violin_legato_e4.mp3",
      "E5": "violin_legato_e5.mp3",
      "G3": "violin_legato_g3.mp3",
      "G4": "violin_legato_g4.mp3",
      "G5": "violin_legato_g5.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin_samples/",
  }).connect(reverb);
  violinSampler.maxVolume = -6
  violinSampler.volume.value = violinSampler.maxVolume;

  const doublebassSampler = new Tone.Sampler({
    urls: {
      "A1": "doublebass_legato_a1.mp3",
      "A2": "doublebass_legato_a2.mp3",
      "C1": "doublebass_legato_c1.mp3",
      "C2": "doublebass_legato_c2.mp3",
      "C3": "doublebass_legato_c3.mp3",
      "D1": "doublebass_legato_d1.mp3",
      "D2": "doublebass_legato_d2.mp3",
      "E1": "doublebass_legato_e1.mp3",
      "E2": "doublebass_legato_e2.mp3",
      "G1": "doublebass_legato_g1.mp3",
      "G2": "doublebass_legato_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/doublebass_samples/",
  }).toDestination();
  doublebassSampler.maxVolume = -6;
  doublebassSampler.volume.value = doublebassSampler.maxVolume;

  const celloSampler = new Tone.Sampler({
    urls: {
      "A1": "cello_legato_a1.mp3",
      "A2": "cello_legato_a2.mp3",
      "A3": "cello_legato_a3.mp3",
      "C1": "cello_legato_c1.mp3",
      "C2": "cello_legato_c2.mp3",
      "C3": "cello_legato_c3.mp3",
      "C4": "cello_legato_c4.mp3",
      "D1": "cello_legato_d1.mp3",
      "D2": "cello_legato_d2.mp3",
      "D3": "cello_legato_d3.mp3",
      "E1": "cello_legato_e1.mp3",
      "E2": "cello_legato_e2.mp3",
      "E3": "cello_legato_e3.mp3",
      "G1": "cello_legato_g1.mp3",
      "G2": "cello_legato_g2.mp3",
      "G3": "cello_legato_g3.mp3",
    },
    release: 1,
    baseUrl: "/samples/cello_samples/",
  }).toDestination();
  celloSampler.maxVolume = -6;
  celloSampler.volume.value = celloSampler.maxVolume;
  
  const tubaSampler = new Tone.Sampler({
    urls: {
      "A1": "tuba_marc_a1.mp3",
      "A2": "tuba_marc_a2.mp3",
      "C1": "tuba_marc_c1.mp3",
      "C2": "tuba_marc_c2.mp3",
      "C3": "tuba_marc_c3.mp3",
      "D1": "tuba_marc_d1.mp3",
      "D2": "tuba_marc_d2.mp3",
      "E1": "tuba_marc_e1.mp3",
      "E2": "tuba_marc_e2.mp3",
      "G1": "tuba_marc_g1.mp3",
      "G2": "tuba_marc_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/tuba_samples/",
  }).toDestination();
  tubaSampler.maxVolume = -12
  tubaSampler.volume.value = tubaSampler.maxVolume;

  const fhornSampler = new Tone.Sampler({
    urls: {
      "A2": "fhorn_stacc_a2.mp3",
      "A3": "fhorn_stacc_a3.mp3",
      "C2": "fhorn_stacc_c2.mp3",
      "C3": "fhorn_stacc_c3.mp3",
      "C4": "fhorn_stacc_c4.mp3",
      "D2": "fhorn_stacc_d2.mp3",
      "D3": "fhorn_stacc_d3.mp3",
      "E2": "fhorn_stacc_e2.mp3",
      "E3": "fhorn_stacc_e3.mp3",
      "G2": "fhorn_stacc_g2.mp3",
      "G3": "fhorn_stacc_g3.mp3"
    },
    release: 1,
    baseUrl: "/samples/fhorn_samples/",
  }).toDestination();
  fhornSampler.maxVolume = -12;
  fhornSampler.volume.value = fhornSampler.maxVolume;

  const trumpetSampler = new Tone.Sampler({
    urls: {
      "A3": "trumpet_stacc_a3.mp3",
      "A4": "trumpet_stacc_a4.mp3",
      "C3": "trumpet_stacc_c3.mp3",
      "C4": "trumpet_stacc_c4.mp3",
      "C5": "trumpet_stacc_c5.mp3",
      "D3": "trumpet_stacc_d3.mp3",
      "D4": "trumpet_stacc_d4.mp3",
      "E3": "trumpet_stacc_e3.mp3",
      "E4": "trumpet_stacc_e4.mp3",
      "G3": "trumpet_stacc_g3.mp3",
      "G4": "trumpet_stacc_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/trumpet_samples/",
  }).toDestination();
  trumpetSampler.maxVolume = -12;
  trumpetSampler.volume.value = trumpetSampler.maxVolume;

  const harpSampler = new Tone.Sampler({
    urls: {
      "A3": "harp_pluck_a3.mp3",
      "A4": "harp_pluck_a4.mp3",
      "A5": "harp_pluck_a5.mp3",
      "C3": "harp_pluck_c3.mp3",
      "C4": "harp_pluck_c4.mp3",
      "C5": "harp_pluck_c5.mp3",
      "C6": "harp_pluck_c6.mp3",
      "D3": "harp_pluck_d3.mp3",
      "D4": "harp_pluck_d4.mp3",
      "D5": "harp_pluck_d5.mp3",
      "E3": "harp_pluck_e3.mp3",
      "E4": "harp_pluck_e4.mp3",
      "E5": "harp_pluck_e5.mp3",
      "G3": "harp_pluck_g3.mp3",
      "G4": "harp_pluck_g4.mp3",
      "G5": "harp_pluck_g5.mp3"
    },
    release: 1,
    baseUrl: "/samples/harp_samples/",
  }).toDestination();
  harpSampler.maxVolume = -12;
  harpSampler.volume.value = harpSampler.maxVolume;

  const timpaniSampler = new Tone.Sampler({
    urls: {
      "A1": "timp_hit_a1.mp3",
      "A2": "timp_hit_a2.mp3",
      "C1": "timp_hit_c1.mp3",
      "C2": "timp_hit_c2.mp3",
      "C3": "timp_hit_c3.mp3",
      "D1": "timp_hit_d1.mp3",
      "D2": "timp_hit_d2.mp3",
      "E1": "timp_hit_e1.mp3",
      "E2": "timp_hit_e2.mp3",
      "G1": "timp_hit_g1.mp3",
      "G2": "timp_hit_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/timpani_samples/",
  }).toDestination();
  timpaniSampler.maxVolume = -12;
  timpaniSampler.volume.value = timpaniSampler.maxVolume;
  
  const oboeSampler = new Tone.Sampler({
    urls: {
      "A3": "oboe_legato_a3.mp3",
      "A4": "oboe_legato_a4.mp3",
      "C3": "oboe_legato_c3.mp3",
      "C4": "oboe_legato_c4.mp3",
      "C5": "oboe_legato_c5.mp3",
      "D3": "oboe_legato_d3.mp3",
      "D4": "oboe_legato_d4.mp3",
      "E3": "oboe_legato_e3.mp3",
      "E4": "oboe_legato_e4.mp3",
      "G3": "oboe_legato_g3.mp3",
      "G4": "oboe_legato_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/oboe_samples/",
  }).toDestination();
  oboeSampler.maxVolume = -12;
  oboeSampler.volume.value = oboeSampler.maxVolume;
  
  const gongSampler = new Tone.Sampler({
    urls: {
      "C4": "gong_c4.mp3"
    },
    release: 1,
    baseUrl: "/samples/gong_samples/",
  }).toDestination();
  gongSampler.maxVolume = -6;
  gongSampler.volume.value = gongSampler.maxVolume;

  const tubeDrumSamplerSetupParams = {
      urls: {
        "A2": "tube_drum_c2.mp3",
        "A3": "tube_drum_a3.mp3",
        "A4": "tube_drum_a4.mp3",
        "C2": "tube_drum_c2.mp3",
        "C3": "tube_drum_c3.mp3",
        "C4": "tube_drum_c4.mp3",
        "C5": "tube_drum_c5.mp3",
        "D2": "tube_drum_d2.mp3",
        "D3": "tube_drum_d3.mp3",
        "D4": "tube_drum_d4.mp3",
        "E2": "tube_drum_e2.mp3",
        "E3": "tube_drum_e3.mp3",
        "E4": "tube_drum_e4.mp3",
        "G2": "tube_drum_g2.mp3",
        "G3": "tube_drum_g3.mp3",
        "G4": "tube_drum_g4.mp3"
      },
      release: 1,
      baseUrl: "samples/tubeDrum_samples/",
    }

  const tubeDrumSamplers = {};

  for (let i = 1; i < 13; i++) {
    const sampler = new Tone.Sampler(tubeDrumSamplerSetupParams).toDestination();
    sampler.maxVolume = -10;
    sampler.volume.value = sampler.maxVolume;
    tubeDrumSamplers[`tubeDrumSampler${i}`] = sampler;
  }

  const celloMarcSampler = new Tone.Sampler({
    urls: {
      "A2": "cello_marc_a2.mp3",
      "A3": "cello_marc_a3.mp3",
      "C2": "cello_marc_c2.mp3",
      "C3": "cello_marc_c3.mp3",
      "C4": "cello_marc_c4.mp3",
      "D2": "cello_marc_d2.mp3",
      "D3": "cello_marc_d3.mp3",
      "E2": "cello_marc_e2.mp3",
      "E3": "cello_marc_e3.mp3",
      "G2": "cello_marc_g2.mp3",
      "G3": "cello_marc_g3.mp3"
    },
    release: 1,
    baseUrl: "/samples/cello_marcato_samples/",
  }).toDestination();
  celloMarcSampler.maxVolume = -12;
  celloMarcSampler.volume.value = celloMarcSampler.maxVolume;
  
  const doubleBassMarcSampler = new Tone.Sampler({
    urls: {
      "A1": "doublebass_marc_a1.mp3",
      "A2": "doublebass_marc_a2.mp3",
      "C1": "doublebass_marc_c1.mp3",
      "C2": "doublebass_marc_c2.mp3",
      "C3": "doublebass_marc_c3.mp3",
      "D1": "doublebass_marc_d1.mp3",
      "D2": "doublebass_marc_d2.mp3",
      "E1": "doublebass_marc_e1.mp3",
      "E2": "doublebass_marc_e2.mp3",
      "G1": "doublebass_marc_g1.mp3",
      "G2": "doublebass_marc_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/doublebass_marc_samples/",
  }).toDestination();
  doubleBassMarcSampler.maxVolume = -12;
  doubleBassMarcSampler.volume.value = doubleBassMarcSampler.maxVolume;

  const celloPizzSampler = new Tone.Sampler({
    urls: {
      "A2": "cello_pizz_a2.mp3",
      "A3": "cello_pizz_a3.mp3",
      "C2": "cello_pizz_c2.mp3",
      "C3": "cello_pizz_c3.mp3",
      "C4": "cello_pizz_c4.mp3",
      "D2": "cello_pizz_d2.mp3",
      "D3": "cello_pizz_d3.mp3",
      "E2": "cello_pizz_e2.mp3",
      "E3": "cello_pizz_e3.mp3",
      "G2": "cello_pizz_g2.mp3",
      "G3": "cello_pizz_g3.mp3"
    },
    release: 1,
    baseUrl: "/samples/cello_pizz_samples/",
  }).toDestination();
  celloPizzSampler.maxVolume = -12;
  celloPizzSampler.volume.value = celloPizzSampler.maxVolume;

  const doubleBassPizzSampler = new Tone.Sampler({
    urls: {
      "A1": "doublebass_pizz_a1.mp3",
      "A2": "doublebass_pizz_a2.mp3",
      "C1": "doublebass_pizz_c1.mp3",
      "C2": "doublebass_pizz_c2.mp3",
      "C3": "doublebass_pizz_c3.mp3",
      "D1": "doublebass_pizz_d1.mp3",
      "D2": "doublebass_pizz_d2.mp3",
      "E1": "doublebass_pizz_e1.mp3",
      "E2": "doublebass_pizz_e2.mp3",
      "G1": "doublebass_pizz_g1.mp3",
      "G2": "doublebass_pizz_g2.mp3"
    },
    release: 1,
    baseUrl: "/samples/doublebass_pizz_samples/",
  }).toDestination();
  doubleBassPizzSampler.maxVolume = -12;
  doubleBassPizzSampler.volume.value = doubleBassPizzSampler.maxVolume;

  const harpsichordSampler = new Tone.Sampler({
    urls: {
      "A3": "harpsichord_a3.mp3",
      "A4": "harpsichord_a4.mp3",
      "C3": "harpsichord_c3.mp3",
      "C4": "harpsichord_c4.mp3",
      "C5": "harpsichord_c5.mp3",
      "D3": "harpsichord_d3.mp3",
      "D4": "harpsichord_d4.mp3",
      "E3": "harpsichord_e3.mp3",
      "E4": "harpsichord_e4.mp3",
      "G3": "harpsichord_g3.mp3",
      "G4": "harpsichord_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/harpsichord_samples/",
  }).toDestination();
  harpsichordSampler.maxVolume = -12;
  harpsichordSampler.volume.value = harpsichordSampler.maxVolume;

  const violaMarcSampler = new Tone.Sampler({
    urls: {
      "A3": "viola_marc_a3.mp3",
      "C3": "viola_marc_a4.mp3",
      "C4": "viola_marc_c3.mp3",
      "D3": "viola_marc_c4.mp3",
      "E3": "viola_marc_c5.mp3",
      "G3": "viola_marc_c5.mp3"
      
    },
    release: 1,
    baseUrl: "/samples/viola_marc_samples/",
  }).toDestination();
  violaMarcSampler.maxVolume = -12;
  violaMarcSampler.volume.value = violaMarcSampler.maxVolume;

  const violaPizzSampler = new Tone.Sampler({
    urls: {
      "A2": "viola_pizz_a2.mp3",
      "A3": "viola_pizz_a3.mp3",
      "C2": "viola_pizz_c2.mp3",
      "C3": "viola_pizz_c3.mp3",
      "C4": "viola_pizz_c4.mp3",
      "D2": "viola_pizz_d2.mp3",
      "D3": "viola_pizz_d3.mp3",
      "E2": "viola_pizz_e2.mp3",
      "E3": "viola_pizz_e3.mp3",
      "G2": "viola_pizz_g2.mp3",
      "G3": "viola_pizz_g3.mp3"
    },
    release: 1,
    baseUrl: "/samples/viola_pizz_samples/",
  }).toDestination();
  violaPizzSampler.maxVolume = -12;
  violaPizzSampler.volume.value = violaPizzSampler.maxVolume;

  const violinColLegnoSampler = new Tone.Sampler({
    urls: {
      "A3": "violin_col_legno_a3.mp3",
      "A4": "violin_col_legno_a4.mp3",
      "C3": "violin_col_legno_c3.mp3",
      "C4": "violin_col_legno_c4.mp3",
      "C5": "violin_col_legno_c5.mp3",
      "D3": "violin_col_legno_d3.mp3",
      "D4": "violin_col_legno_d4.mp3",
      "E3": "violin_col_legno_e3.mp3",
      "E4": "violin_col_legno_e4.mp3",
      "G3": "violin_col_legno_g3.mp3",
      "G4": "violin_col_legno_g4.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin_col_legno_samples/",
  }).toDestination();
  violinColLegnoSampler.maxVolume = -12;
  violinColLegnoSampler.volume.value = violinColLegnoSampler.maxVolume;

  const violinMarcSampler = new Tone.Sampler({
    urls: {
      "A4": "violin_marc_a4.mp3",
      "A5": "violin_marc_a5.mp3",
      "C4": "violin_marc_c4.mp3",
      "C5": "violin_marc_c5.mp3",
      "C6": "violin_marc_c6.mp3",
      "D4": "violin_marc_d4.mp3",
      "D5": "violin_marc_d5.mp3",
      "E4": "violin_marc_e4.mp3",
      "E5": "violin_marc_e5.mp3",
      "G4": "violin_marc_g4.mp3",
      "G5": "violin_marc_g5.mp3"
    },
    release: 1,
    baseUrl: "/samples/violin_marc_samples/",
  }).toDestination();
 violinMarcSampler.maxVolume = -12;
 violinMarcSampler.volume.value =violinMarcSampler.maxVolume;

 const violinPizzSampler = new Tone.Sampler({
  urls: {
    "A3": "violin_pizz_a3.mp3",
    "A4": "violin_pizz_a4.mp3",
    "C3": "violin_pizz_c3.mp3",
    "C4": "violin_pizz_c4.mp3",
    "C5": "violin_pizz_c5.mp3",
    "D3": "violin_pizz_d3.mp3",
    "D4": "violin_pizz_d4.mp3",
    "E3": "violin_pizz_e3.mp3",
    "E4": "violin_pizz_e4.mp3",
    "G3": "violin_pizz_g3.mp3",
    "G4": "violin_pizz_g4.mp3"
  },
  release: 1,
  baseUrl: "/samples/violin_pizz_samples/",
}).toDestination();
violinPizzSampler.maxVolume = -12;
violinPizzSampler.volume.value = violinPizzSampler.maxVolume;

const lupoIdentSampler = new Tone.Sampler({
  urls: {
    "A4": "LUPO_ident.mp3"
  },
  release: 1,
  baseUrl: "/samples/lupo_ident_samples/",
}).toDestination();
lupoIdentSampler.maxVolume = -12;
lupoIdentSampler.volume.value = lupoIdentSampler.maxVolume;
  
  let instruments = {}

  console.log(`instrumentSet is ${instrumentSet}`)

  if (instrumentSet === 'orchestra') {
      instruments = {
        Bakerloo: violinSampler,
        Central: violaSampler,
        Circle: doublebassSampler,
        District: celloSampler,
        HammersmithCity: tubaSampler,
        Jubilee: fhornSampler,
        Metropolitan: trumpetSampler,
        Northern: harpSampler,
        Piccadilly: timpaniSampler,
        Victoria: oboeSampler, 
        WaterlooCity: gongSampler,
        Pedal: violinSampler,

      };
  } else if (instrumentSet === 'marimba') {
    instruments = {
      Bakerloo: marimbaSamplers.marimbaSampler1,
      Central: marimbaSamplers.marimbaSampler2,
      Circle: marimbaSamplers.marimbaSampler3,
      District: marimbaSamplers.marimbaSampler4,
      HammersmithCity: marimbaSamplers.marimbaSampler5,
      Jubilee: marimbaSamplers.marimbaSampler6,
      Metropolitan: marimbaSamplers.marimbaSampler7,
      Northern: marimbaSamplers.marimbaSampler8,
      Piccadilly: marimbaSamplers.marimbaSampler9,
      Victoria: marimbaSamplers.marimbaSampler10, 
      WaterlooCity: marimbaSamplers.marimbaSampler11,
      Pedal: marimbaSamplers.marimbaSampler12
    };
  } else if (instrumentSet === 'tubeDrums') {
    instruments = {
      Bakerloo: tubeDrumSamplers.tubeDrumSampler1,
      Central: tubeDrumSamplers.tubeDrumSampler2,
      Circle: tubeDrumSamplers.tubeDrumSampler3,
      District: tubeDrumSamplers.tubeDrumSampler4,
      HammersmithCity: tubeDrumSamplers.tubeDrumSampler5,
      Jubilee: tubeDrumSamplers.tubeDrumSampler6,
      Metropolitan: tubeDrumSamplers.tubeDrumSampler7,
      Northern: tubeDrumSamplers.tubeDrumSampler8,
      Piccadilly: tubeDrumSamplers.tubeDrumSampler9,
      Victoria: tubeDrumSamplers.tubeDrumSampler10, 
      WaterlooCity: tubeDrumSamplers.tubeDrumSampler11,
      Pedal: tubeDrumSamplers.tubeDrumSampler12
    };
  } else if (instrumentSet === 'strings') {
    const stringTest = doubleBassMarcSampler;
    // instruments = {
    //   Bakerloo: stringTest,      
    //   Central: doubleBassMarcSampler,
    //   Circle: doubleBassMarcSampler,
    //   District: doubleBassPizzSampler,
    //   HammersmithCity: violaMarcSampler,
    //   Jubilee: violaMarcSampler,
    //   Metropolitan: violaMarcSampler,
    //   Northern: violinMarcSampler,
    //   Piccadilly: violinMarcSampler,
    //   Victoria: violinPizzSampler, 
    //   WaterlooCity: violinPizzSampler,
    //   Pedal: doubleBassMarcSampler
    // };
    instruments = {
      Bakerloo: celloMarcSampler, // fixed
      Central: celloPizzSampler, // fixed
      Circle: doubleBassMarcSampler, // ✅ working
      District: doubleBassPizzSampler, // ✅ working
      HammersmithCity: harpsichordSampler, // fixed
      Jubilee: violaMarcSampler, // ✅ working
      Metropolitan: violaPizzSampler, // fixed
      Northern: violinColLegnoSampler, // fixed
      Piccadilly: violinMarcSampler, // ✅ working
      Victoria: violinPizzSampler, // ✅ working
      WaterlooCity: lupoIdentSampler, // fixed
      Pedal: celloMarcSampler // fixed
    };
  }

  // getNoteAssignFunctions returns an object with line names as keys and note assign functions as values
  instruments.noteAssignFunctions = getNoteAssignFunctions(instrumentSet);

  return instruments;
}

export default audioStartup;

