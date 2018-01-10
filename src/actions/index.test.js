import * as actions from './index';

describe('all actions', () => {
  it('setLocation action', () => {
    const location = {
      lat: 50,
      lon: 50
    };

    const expected = {
      type: 'SET_LOCATION',
      location
    };

    expect(actions.setLocation(location)).toEqual(expected);
  });

  it('changePage action', () => {
    const page = 'next';

    const expected = {
      type: 'CHANGE_PAGE',
      page
    };

    expect(actions.changePage(page)).toEqual(expected);
  });

  it('setAPOD action', () => {
    const apodData = {
      image: 'im an image',
      type: 'image',
      title: 'TITLE',
      details: 'I am an explanation'
    };

    const expected = {
      type: 'SET_APOD',
      apodData
    };

    expect(actions.setAPOD(apodData)).toEqual(expected);
  });
});