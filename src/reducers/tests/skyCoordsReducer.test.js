import { skyCoordsReducer } from '../skyCoordsReducer';
import * as actions from '../../actions';

describe('skyCoordsReducer', () => {
  it('should return null by default', () => {
    const expected = null;
    const action = {type: 'mockAction'};

    expect(skyCoordsReducer(undefined, action)).toEqual(expected);
  });

  it('should return skyCoords when SET_SKY_COORDS is dispatched', () => {
    const mockSkyCoords = { ra: 4.5, dec: 39 };
    const action = actions.setSkyCoords(mockSkyCoords);

    const expected = mockSkyCoords;

    expect(skyCoordsReducer(undefined, action)).toEqual(expected);
  });
});