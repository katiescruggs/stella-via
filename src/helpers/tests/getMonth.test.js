import { getMonth, getLastNextMonth } from '../getMonth';

describe('month helper functions', () => {
  describe('getMonth', () => {
    
    it('return an object', () => {
      expect(typeof getMonth()).toEqual('object');
    });

    it('should return an object with keys currentMonth, lastMonth, nextMonth', () => {
      const keys = Object.keys(getMonth());
      const expected = ['currentMonth', 'lastMonth', 'nextMonth'];

      expect(keys).toEqual(expected);
    });
  });
  
  describe('getLastNextMonth', () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    it('return an object', () => {
      expect(typeof getLastNextMonth(2)).toEqual('object');
    });

    it('should return an object with keys of lastMonth and nextMonth', () => {
      const keys = Object.keys(getLastNextMonth(2));
      const expected = ['lastMonth', 'nextMonth'];
      
      expect(keys).toEqual(expected);
    });

    it('should return the next month and last month', () => {
      const expected = {
        lastMonth: 'May',
        nextMonth: 'July'
      };

      expect(getLastNextMonth(5)).toEqual(expected);
    });

    it('should wrap the months around', () => {
      let expected = {
        lastMonth: 'November',
        nextMonth: 'January'
      };

      expect(getLastNextMonth(11)).toEqual(expected);

      expected = {
        lastMonth: 'December',
        nextMonth: 'February'
      };

      expect(getLastNextMonth(0)).toEqual(expected);
    });
  });
});