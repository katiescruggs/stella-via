import { Card, mapStateToProps, mapDispatchToProps } from '../Card';

describe('Card Container', () => {
  describe('Card Component', () => {

  });

  describe('mapStateToProps', () => {
    it('should pull currentPage from the store', () => {
      const mockStore = {
        page: 'Welcome'
      };

      const result = mapStateToProps(mockStore)
      expect(result.currentPage).toEqual(mockStore.page);
    });
  });

  describe('mapDispatchToProps', () => {

  });
});