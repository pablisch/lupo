import triggerAudioVisuals from './triggerAudioVisuals';
import TIMEOUTS from './timeouts';

const mockInstruments = {
  Piccadilly: jest.fn(),
  Northern: jest.fn(),
  Circle: jest.fn(),
  HammersmithCity: jest.fn()
}

const mockQuantisedData = [
  {
    "id": "-1372524375",
    "stationName": "Bounds Green Underground Station",
    "lineName": "Piccadilly",
    "timeToStation": 10.25
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

const mockArrivals = []; // array to hold arrival elements

const [mockArrivalEffectsToggle, setmockArrivalEffectsToggle] = useState(true);


const mockArrivalFlareEffectsToggle = {

}

describe('triggerAudioVisuals function', () => {
  // can mock the instruments object and check that .triggerAttackRelease is called with the correct arguments
  // can mock the TIMEOUTS object and check that setTimeout is called on it with the correct arguments
  it('calls setTimeout() with the correct intervals', () => {
    triggerAudioVisuals(mockQuantisedData, mockInstruments, mockArrivalFlareEffectsToggle, mockArrivals)
    

  })
})