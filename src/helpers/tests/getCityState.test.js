import { getCityState } from '../getCityState';

window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  json: () => Promise.resolve({
    location: {
      city: 'Denver',
      state: 'CO'
    }
  })
}));

describe('getCityState helper function', () => {
  let result;
  
  beforeAll(async () => {
    result = await getCityState(39, -105);
  });
  
  it('should be a function', () => {
    expect(getCityState).toBeAFunction;
  });

  it('should return an object', async () => {
    expect(typeof result).toEqual('object');
  });

  it('should return an object with city and state keys', async () => {
    const keys = Object.keys(result);
    const expectedKeys = ['city', 'state'];

    expect(keys).toEqual(expectedKeys);
  });

  it('should return the city and state values from the fetch', async () => {
    const expectedCity = 'Denver';
    const expectedState = 'CO';

    expect(result.city).toEqual(expectedCity);
    expect(result.state).toEqual(expectedState);
  });
});