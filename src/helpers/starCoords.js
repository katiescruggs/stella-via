import julian from 'astronomia/lib/julian';
import sexa from 'astronomia/lib/sexagesimal';
import sidereal from 'astronomia/lib/sidereal';

export const calculateRA = (lat, lon) => {
  const convert = toLocalTime(lon);
  const julianDate = julian.DateToJD(new Date());
  const siderealTime = sidereal.mean(julianDate) + (convert * 3600);
  const objectRA = new sexa.Time(siderealTime);

  let decimalRA = objectRA.time / 3600;

  if(decimalRA >= 24) {
    decimalRA -= 24;
  }

  if(decimalRA <= 0) {
    decimalRA += 24;
  }

  const stringRA = toStringRA(decimalRA);

  const skyCoords = {
    dec: lat,
    decimalRA,
    stringRA
  };

  return skyCoords;
};

const toLocalTime = (lon) => {
  let degrees = lon;

  if(lon < 0) {
    degrees = lon + 360;
  }

  const decimalTime = degrees / 15;

  return decimalTime;
};

const toStringRA = (RA) => {
  const hours = Math.floor(RA);
  const minutesSeconds = (RA - hours) * 60;
  const minutes = Math.floor(minutesSeconds);
  const seconds = Math.floor((minutesSeconds - minutes) * 60);

  return (`${hours} ${minutes} ${seconds}`);
};
