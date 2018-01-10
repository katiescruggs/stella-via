export const setLocation = location => ({
  type: 'SET_LOCATION',
  location
});

export const changePage = page => ({
  type: 'CHANGE_PAGE',
  page
});

export const setAPOD = apodData => ({
  type: 'SET_APOD',
  apodData
});

export const setConstellation = constellation => ({
  type: 'SET_CONSTELLATION',
  constellation
});