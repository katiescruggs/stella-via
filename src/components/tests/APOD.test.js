import { APOD, mapStateToProps } from '../APOD';

describe('APOD container', () => {
  describe('APOD component', () => {
    it('APOD exists', () => {
      expect(APOD).toBeDefined();
    });
  });

  describe('mapStateToProps', () => {
    it('should pull apodData from the store', () => {
      const mockStore = {
        apodData: {
          image: 'url',
          type: 'image',
          title: 'APOD',
          details: 'explanation'
        }
      };

      const result = mapStateToProps(mockStore);
    
      expect(result.apodData).toEqual(mockStore.apodData);
    });
  });
});