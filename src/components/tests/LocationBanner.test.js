import { LocationBanner, mapStateToProps, mapDispatchToProps } from '../LocationBanner';

describe('LocationBanner Container', () => {
  describe('LocationBanner Component', () => {
    it('should exist', () => {
      expect(LocationBanner).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    const mockStore = {
      page: 'Welcome',
      location: {
        lat: 39,
        lon: -105,
        city: 'Denver',
        state: 'CO'
      },
      skyCoords: {
        dec: 39,
        decimalRA: 4.5,
        stringRA: '4 30 00'
      }
    };

    const result = mapStateToProps(mockStore);

    it('should pull current page from the store', () => {
      expect(result.page).toEqual(mockStore.page);
    });

    it('should pull in location (lat, lon, city, state) from the current store', () => {
      expect(result.location).toEqual(mockStore.location);
      expect(result.location.lat).toEqual(mockStore.location.lat);
      expect(result.location.lon).toEqual(mockStore.location.lon);
      expect(result.location.city).toEqual(mockStore.location.city);
      expect(result.location.state).toEqual(mockStore.location.state);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch when changePage is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);
      
      result.changePage();
      expect(mockDispatch).toHaveBeenCalled;  
    });

  });
});