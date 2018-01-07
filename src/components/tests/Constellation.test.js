import { Constellation, mapStateToProps, mapDispatchToProps } from '../Constellation';

describe('Constellation Container', () => {
  describe('Constellation component', () => {

  });

  describe('mapStateToProps', () => {
    it('should pull currentPage from the store', () => {
      const mockStore = {
        page: 'Welcome'
      };

      const result = mapStateToProps(mockStore)
      expect(result.currentPage).toEqual(mockStore.page);
    });

    it('should pull constellation from the store', () => {
      const mockStore = {
        constellation: 'Pisces'
      };

      const result = mapStateToProps(mockStore);
      expect(result.constellation).toEqual(mockStore.constellation);
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