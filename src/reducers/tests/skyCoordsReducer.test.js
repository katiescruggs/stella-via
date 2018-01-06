import { skyCoordsReducer } from '../skyCoordsReducer';
import * as actions from '../../actions';

describe('skyCoordsReducer', () => {
  it('should return null by default', () => {
    const expected = null;
    const mockAction = {type: 'mockAction'};

    expect(skyCoordsReducer(undefined, mockAction)).toEqual(null);
  });
});