import { NavButton, mapDispatchToProps } from '../NavButton';

describe('NavButton Container', () => {
  describe('NavButton', () => {

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