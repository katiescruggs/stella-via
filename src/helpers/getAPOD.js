import { nasaKey } from './apiKey.js';

export const getAPOD = async () => {
  try {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`);
    const apodData = await response.json();

    return formatAPOD(apodData)
  } catch(error) {
    return {
      image: require('../assets/star-background.jpg'),
      type: 'image',
      title: 'Image Did Not Load',
      details: `Sorry, the NASA image did not load properly today. Please try again or check back tomorrow!`
    };
  }
}

export const formatAPOD = (apodData) => {
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