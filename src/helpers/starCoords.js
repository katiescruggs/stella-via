import julian from 'astronomia/lib/julian';
import sexa from 'astronomia/lib/sexagesimal';
import sidereal from 'astronomia/lib/sidereal';

export const calculateRA = (lon) => {
  const julianDate = julian.DateToJD(new Date())
  const siderealTime = sidereal.mean(julianDate)
  const RA = new sexa.Time(siderealTime).toString(10)
  console.log(RA)
}
