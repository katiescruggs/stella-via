import { fetchLocationCoords } from '../fetchLocationCoords';

describe('fetchLocationCoords', () => {
  window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve({
      results: [
        {
          geometry: {
            location: {
              lat: 39.7777,
              lng: -105.1111
            }
          }
        }
      ]
    })
  }));

  it('should be a function', () => {
    expect(fetchLocationCoords).toBeAFunction;
  });

  it('should return an object with location and skyCoords', async () => {
    const result = await fetchLocationCoords('Denver', 'CO');
    expect(typeof result).toEqual('object');

    const keys = Object.keys(result);
    const expectedKeys = ['location', 'skyCoords'];
    expect(keys).toEqual(expectedKeys);
  });

  it('should return location with lat, lon, city, and state', async () => {
    const { location } = await fetchLocationCoords('Denver', 'CO');

    const keys = Object.keys(location);
    const expectedKeys = ['lat', 'lon', 'city', 'state'];
    expect(keys).toEqual(expectedKeys);


  });

  it('should return the city/state of location based on parameters', async () => {
    let result = await fetchLocationCoords('Denver', 'CO');

    expect(result.location.city).toEqual('Denver');
    expect(result.location.state).toEqual('CO');

    result = await fetchLocationCoords('OKC', 'OK');

    expect(result.location.city).toEqual('OKC');
    expect(result.location.state).toEqual('OK');
  });

  it('should return skyCoords with dec, decimalRA, and stringRA', async () => {
    let { skyCoords } = await fetchLocationCoords('Denver', 'CO');

    expect(typeof skyCoords).toEqual('object');

    const keys = Object.keys(skyCoords);
    const expectedKeys = ['dec', 'decimalRA', 'stringRA'];

    expect(keys).toEqual(expectedKeys);
  });
});