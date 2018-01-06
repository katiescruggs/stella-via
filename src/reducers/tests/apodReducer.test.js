import { apodReducer } from '../apodReducer';
import * as actions from '../../actions';

describe('apodReducer', () => {
  it('should return null by default', () => {
    const expected = null;
    const action = {type: 'mockAction'};

    expect(apodReducer(undefined, action)).toEqual(expected);
  });

  it('should return apodData when SET_APOD is dispatched', () => {
    const mockApodData = {
      data: 'data'
    };

    const action = actions.setAPOD(mockApodData);
    const expected = mockApodData;

    expect(apodReducer(undefined, action)).toEqual(expected);
  });
});