import { getMonth } from '../helpers/getMonth';

export const assignVisibility = (constellationArray) => {
  return constellationArray.map(constellation => {
    const { currentMonth, lastMonth, nextMonth } = getMonth();
    const seenMonth = constellation.coords.bestSeen;

    if (seenMonth === currentMonth || seenMonth === lastMonth || seenMonth === nextMonth) {
      return Object.assign({}, constellation, { visible: true })
    }

    return constellation;
  });
};