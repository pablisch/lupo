import triggerAudioVisuals from './triggerAudioVisuals';
import * as Tone from 'tone';

const mockInstruments = {
  Piccadilly: { triggerAttackRelease: jest.fn() },
  Northern: { triggerAttackRelease: jest.fn() },
  Circle: { triggerAttackRelease: jest.fn() },
  HammersmithCity: { triggerAttackRelease: jest.fn() },
  noteAssignFunctions: {
    Piccadilly: jest.fn(() => { 'C4' }),
    Northern: jest.fn(),
    Circle: jest.fn(),
    HammersmithCity: jest.fn()
  }
}

const mockQuantisedData = [
  {
    "id": "-1372524375",
    "stationName": "Bounds Green Underground Station",
    "lineName": "Piccadilly",
    "timeToStation": 10.25
  },
  {
    "id": "-1867591545",
    "stationName": "Knightsbridge Underground Station",
    "lineName": "Piccadilly",
    "timeToStation": 12
  },
  {
    "id": "-1435087620",
    "stationName": "Clapham South Underground Station",
    "lineName": "Northern",
    "timeToStation": 16.25
  },
  {
    "id": "-1208655092",
    "stationName": "Gloucester Road Underground Station",
    "lineName": "Circle",
    "timeToStation": 22.25
  },
  {
    "id": "2056633330",
    "stationName": "Bayswater Underground Station",
    "lineName": "HammersmithCity",
    "timeToStation": 22
  }
]

const setTimeoutSpy = jest.spyOn(global, 'setTimeout');

jest.mock('tone', () => ({
  now: jest.fn(() => 'now'),
}));

const mockArrivals = []; // array to hold arrival elements

const mockArrivalFlareEffectsToggle = true;

describe('triggerAudioVisuals function', () => {
  beforeEach(() => {
    setTimeoutSpy.mockClear();
    Tone.now.mockClear();
  });

  it('calls setTimeout() with the correct intervals', () => {
    triggerAudioVisuals(mockQuantisedData, mockInstruments, mockArrivalFlareEffectsToggle, mockArrivals)
    expect(mockInstruments.noteAssignFunctions['Piccadilly']).toHaveBeenNthCalledWith(1, 'Bounds Green Underground Station');
    expect(mockInstruments.noteAssignFunctions['Piccadilly']).toHaveBeenNthCalledWith(2, 'Knightsbridge Underground Station');
    expect(mockInstruments.noteAssignFunctions['Circle']).toHaveBeenNthCalledWith(1, 'Gloucester Road Underground Station')
    expect(setTimeoutSpy).toHaveBeenCalledTimes(mockQuantisedData.length);
    expect(setTimeoutSpy).toHaveBeenNthCalledWith(1, expect.any(Function), 10250);
    expect(setTimeoutSpy).toHaveBeenNthCalledWith(3, expect.any(Function), 16250);
    expect(setTimeoutSpy).toHaveBeenLastCalledWith(expect.any(Function), 22000);
  })
})