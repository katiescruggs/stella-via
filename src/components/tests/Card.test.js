import { Card, mapStateToProps, mapDispatchToProps } from '../Card';

describe('Card Container', () => {
  describe('Card Component', () => {
    it('Card exists', () => {
      expect(Card).toBeDefined();
    });
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
    it('should call dispatch when changePage is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.changePage();
      expect(mockDispatch).toHaveBeenCalled;
    });

    it('should call dispatch when setConstellation is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setConstellation();
      expect(mockDispatch).toHaveBeenCalled;
    });
  });
});