import { CurrentView, mapStateToProps } from '../CurrentView';

describe('CurrentView Container', () => {
  describe('CurrentView component', () => {
    it('should exist', () => {
      expect(CurrentView).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    it('should pull current page from the store', () => {
      const mockStore = {
        page: 'Welcome'
      };

      const result = mapStateToProps(mockStore);
      
      expect(result.page).toEqual(mockStore.page);
    });
  });
});