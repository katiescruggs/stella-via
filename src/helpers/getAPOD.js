import { nasaKey } from './apiKey.js';

const getAPOD = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`);
    const apodData = await response.json();

    return formatAPOD(apodData)
  } catch(error) {
    console.log(error)
    return null;
  }
}

const formatAPOD = (apodData) => {
  const { 
    url, 
    media_type, 
    title, 
    explanation 
  } = apodData;
  
  return {
    image: {uri: url},
    type: media_type,
    title,
    details: explanation
  }
}

export default getAPOD;