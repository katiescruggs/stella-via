import { LocationModal, mapStateToProps, mapDispatchToProps } from '../LocationModal';

describe('LocationModal Container', () =>{
  describe('LocationModal Component', () => {
    it('should exist', () => {
      expect(LocationModal).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    it('should pull currentPage from the store', () => {
      const mockStore = {
        page: 'Welcome'
      };

      const result = mapStateToProps(mockStore);
      
      expect(result.currentPage).toEqual(mockStore.page);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when setLocation is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setLocation();
      expect(mockDispatch).toHaveBeenCalled;
    });

    it('should call dispatch when changePage is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.changePage();
      expect(mockDispatch).toHaveBeenCalled;
    });

    it('should call dispatch when setSkyCoords is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setSkyCoords();
      expect(mockDispatch).toHaveBeenCalled;
    });

  });
});