// import julian from 'astronomia/lib/julian';
// import sexa from 'astronomia/lib/sexagesimal';
// import sidereal from 'astronomia/lib/sidereal';

export const calculateRA = (lon) => {
  // const julianDate = julian.DateToJD(new Date())
  // const siderealTime = sidereal.mean(julianDate)
  // const RA = new sexa.Time(siderealTime).toString(0)
  // console.log(RA)
  // return RA
  // const lon = -105;
  let degrees;

  if(lon < 0) {
    degrees = lon + 360;
  } else {
    degrees = lon;
  }

  const decimalTime = degrees / 15;

  const hours = Math.floor(decimalTime);
  console.log(hours)

  const minutesSeconds = (decimalTime - hours) * 60;
  const minutes = Math.floor(minutesSeconds);
  console.log(minutes)

  const seconds = Math.floor((minutesSeconds - minutes) * 60);

  console.log(seconds)
  console.log(`${hours}hr, ${minutes}min, ${seconds}sec`)
}
