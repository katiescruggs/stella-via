import { NavBar, mapStateToProps } from '../NavBar';

describe('NavBar Container', () => {
  describe('NavBar Component', () => {
    it('should exist', () => {
      expect(NavBar).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    it('should pull page from the store', () => {
      const mockStore = {
        page: 'Welcome'
      };

      const result = mapStateToProps(mockStore);
      
      expect(result.page).toEqual(mockStore.page);
    });

    it('should pull location from the store', () => {
      const mockStore = {
        location: {
          lat: 39,
          lon: -105,
          city: 'Denver',
          state: 'CO'
        }
      };

      const result = mapStateToProps(mockStore);
      
      expect(result.location).toEqual(mockStore.location);
    });
  });
});