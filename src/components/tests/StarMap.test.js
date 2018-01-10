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
      }
    };

    const result = mapStateToProps(mockStore);
    
    it('should pull lat from the location in store', () => {
      expect(result.lat).toEqual(mockStore.location.lat);
    });

    it('should pull lon from the location in store', () => {
      expect(result.lon).toEqual(mockStore.location.lon);
    });
  });
});