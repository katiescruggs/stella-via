import { APOD, mapStateToProps } from '../APOD';
import React from 'react';
import renderer from 'react-test-renderer';

describe('APOD container', () => {
  describe('APOD component', () => {
    it('APOD exists', () => {
      expect(APOD).toBeDefined();
    });

    it.skip('matches the snapshot', () => {
      const mockApodData = {
        image: 'url',
        type: 'image',
        title: 'title',
        description: 'description'
      };

      const rendered = renderer.create(<APOD apodData={mockApodData}/>).toJSON();
      expect(rendered).toBeTruthy();
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