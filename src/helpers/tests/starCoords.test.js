import { calculateRA, toLocalTime, toStringRA } from '../starCoords';

describe('Star Coords helper functions', () => {
  describe('calculateRA', () => {
    it('should be a function', () => {
      expect(calculateRA).toBeAFunction;
    });

    it('should return a skyCoords object', () => {
      expect(typeof calculateRA(39, -105)).toEqual('object');

      let keys = Object.keys(calculateRA(39, -105));
      let expected = ['dec', 'decimalRA', 'stringRA'];

      expect(keys).toEqual(expected);
    });

    it('should return decimalRA as a number between 0 and 24', () => {
      let decimalRA = calculateRA(39, -105).decimalRA;
      
      expect(typeof decimalRA).toEqual('number');

      expect(decimalRA).toBeGreaterThan(0);
      expect(decimalRA).toBeLessThan(24);
    });
  });

  describe('toLocalTime', () => {
    it('should be a function', () => {
      expect(toLocalTime).toBeAFunction;
    });

    it('should return a number', () => {
      expect(typeof toLocalTime(-105)).toEqual('number');
    });

    it('should return a number to convert Greenwich Time to local time based on longitude', () => {
      expect(toLocalTime(-105)).toEqual(17);
      expect(toLocalTime(45)).toEqual(3);
    });
  });

  describe('toStringRA', () => {
    it('should be a function', () => {
      expect(toStringRA).toBeAFunction;
    });

    it('should return a string', () => {
      expect(typeof toStringRA(3.5)).toEqual('string');
    });

    it('should calculate the hours, min, sec from decimal form', () => {
      let expected = '4 30 0';
      expect(toStringRA(4.5)).toEqual(expected);

      expected = '12 45 30';
      expect(toStringRA(12.7585)).toEqual(expected);
    });
  });
});