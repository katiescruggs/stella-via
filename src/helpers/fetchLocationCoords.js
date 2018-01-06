import { googleKey } from './apiKey';
import { calculateRA } from './starCoords';

export const fetchLocationCoords = async (city, state) => {
  const coordsFetch = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${state}&key=${googleKey}`);
  const coordsResult = await coordsFetch.json();

  const { lat, lng } = coordsResult.results[0].geometry.location;
  const location = {
    lat: lat.toFixed(3), 
    lon: lng.toFixed(3), 
    city, 
    state
  };

  const skyCoords = calculateRA(lat, lng);
  return { location, skyCoords };
};