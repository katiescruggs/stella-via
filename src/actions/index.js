export const setLocation = location => ({
  type: 'SET_LOCATION',
  location
});

export const setTime = now => ({
  type: 'SET_TIME',
  now
});

export const changePage = page => ({
  type: 'CHANGE_PAGE',
  page
});

export const setSkyCoords = skyCoords => ({
  type: 'SET_SKY_COORDS',
  skyCoords
});

export const setAPOD = apodData => ({
  type: 'SET_APOD',
  apodData
});