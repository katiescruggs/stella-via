const getLocation = async () => {
  try {
    console.log('get location beginning to run')
    await navigator.geolocation.getCurrentPosition((position) => {
      const location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      }
      console.log(location)
      console.log('get location finishes running')
      return location;
    });
  } catch (error) {
    return error;
  }
};

export default getLocation;