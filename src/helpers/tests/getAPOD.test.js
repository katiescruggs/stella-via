import { getAPOD, formatAPOD } from '../getAPOD';

describe('APOD fetch helper functions', () => {
  describe('getAPOD', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        url: 'URL',
        media_type: 'image',
        title: 'TITLE',
        explanation: 'EXPLANATION'
      })
    }));

    it('should be a function', () => {
      expect(getAPOD).toBeAFunction;
    });

    it('should return formatted apodData object', async () => {
      const result = await getAPOD();
      expect(typeof result).toEqual('object');

      const keys = Object.keys(result);
      const expected = ['image', 'type', 'title', 'details'];

      expect(keys).toEqual(expected);
    });

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.reject()
    }));

    it('should return a message to display error if fetch catches', async () => {
      const errorObject = {
        image: require('../assets/star-background.jpg'),
        type: 'image',
        title: 'Image Did Not Load',
        details: `Sorry, the NASA image did not load properly today. Please try again or check back tomorrow!`
      };

      const result = await getAPOD();
      expect(result).toEqual(errorObject);
    });
  });

  describe('formatAPOD', () => {
    it('should be a function', () => {
      expect(formatAPOD).toBeAFunction;
    });

    it('should format input apodData', () => {
      const mockApodData = {
        url: 'I am a url',
        media_type: 'I am media type',
        title: 'I am a title', 
        explanation: 'I am a title'
      };

      const expected = {
        image: {uri: mockApodData.url},
        type: mockApodData.media_type,
        title: mockApodData.title,
        details: mockApodData.explanation
      };

      expect(formatAPOD(mockApodData)).toEqual(expected);
    });
  });
});