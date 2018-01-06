import { locationReducer } from '../locationReducer';
import * as actions from '../../actions';

describe('locationReducer', () => {
  it('should return null by default', () => {
    const expected = null;
    const action = {type: 'mockAction'};

    expect(locationReducer(undefined, action)).toEqual(expected);
  });

  it('should return location when SET_LOCATION dispatches', () => {
    const mockLocation = {lat: 39, lon: -105};
    const action = actions.setLocation(mockLocation);

    const expected = mockLocation;

    expect(locationReducer(undefined, action)).toEqual(expected);
  });
});