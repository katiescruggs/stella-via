import { Welcome, mapStateToProps, mapDispatchToProps } from '../Welcome';

describe('Welcome Container', () => {
  describe('Welcome Component', () => {
    it('Welcome exists', () => {
      expect(Welcome).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    it('should pull location from the store', () => {
      const mockStore = {
        location: 'Welcome'
      };

      const result = mapStateToProps(mockStore)
      expect(result.location).toEqual(mockStore.location);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when changePage is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.changePage();
      expect(mockDispatch).toHaveBeenCalled;
    });

    it('should call dispatch when setAPOD is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.setAPOD();
      expect(mockDispatch).toHaveBeenCalled;
    });
  });
});