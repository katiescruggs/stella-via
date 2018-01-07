import { StarMap, mapStateToProps } from '../StarMap';

describe('StarMap Container', () => {
  describe('StarMap Component', () => {
    it('should exist', () => {
      expect(StarMap).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      skyCoords: {
        dec: 39,
        RA: '4 30 0'
      }
    };

    const result = mapStateToProps(mockStore);
    
    it('should pull dec from the skyCoords in store', () => {
      expect(result.dec).toEqual(mockStore.skyCoords.dec);
    });

    it('should pull RA from the skyCoords in store', () => {
      expect(result.RA).toEqual(mockStore.skyCoords.stringRA);
    });
  });
});