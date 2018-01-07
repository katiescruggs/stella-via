import { StarMap, mapStateToProps } from '../StarMap';

describe('StarMap Container', () => {
  describe('StarMap Component', () => {
    it('should exist', () => {
      expect(StarMap).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      location: {
        lat: 39,
        lon: -105
      },
      skyCoords: {
        dec: 39,
        RA: '4 30 0'
      }
    };

    const result = mapStateToProps(mockStore);
    
    it('should pull lat and lon from the location in store', () => {
      expect(result.lat).toEqual(mockStore.location.lat);
      expect(result.lon).toEqual(mockStore.location.lon);
    });

    it('should pull dec and RA from the skyCoords in store', () => {
      expect(result.dec).toEqual(mockStore.skyCoords.dec);
      expect(result.RA).toEqual(mockStore.skyCoords.stringRA);
    });
  });
});