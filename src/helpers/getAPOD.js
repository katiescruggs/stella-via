import { nasaKey } from './apiKey.js';

const getAPOD = async () => {
  console.log('function called in helper');
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`);
    const apodData = await response.json();
    console.log(apodData)
    return apodData
  } catch(error) {
    console.log(error)
    return null;
  }
}

export default getAPOD;