import { wundergroundKey } from './apiKey';

export const getCityState = async (lat, lon) => {
  const initialFetch = await fetch(`https://api.wunderground.com/api/${wundergroundKey}/geolookup/q/${lat},${lon}.json`);
  const { location } = await initialFetch.json();
  const { city, state } = location;
  return {city, state };
};