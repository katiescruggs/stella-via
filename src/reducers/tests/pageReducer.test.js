import { pageReducer } from '../pageReducer';
import * as actions from '../../actions';

describe('pageReducer', () => {
  it('should return Welcome by default', () => {
    const expected = 'Welcome';
    const mockAction = {type: 'mockAction'};

    expect(pageReducer(undefined, mockAction)).toEqual(expected);
  });
});