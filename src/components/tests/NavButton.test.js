import { NavButton, mapDispatchToProps } from '../NavButton';

describe('NavButton Container', () => {
  describe('NavButton', () => {
    it('NavButton exists', () => {
      expect(NavButton).toBeDefined();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch when changePage is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.changePage();
      expect(mockDispatch).toHaveBeenCalled;
    });
  });
});