import { pageReducer } from '../pageReducer';
import * as actions from '../../actions';

describe('pageReducer', () => {
  it('should return Welcome by default', () => {
    const expected = 'Welcome';
    const action = {type: 'mockAction'};

    expect(pageReducer(undefined, action)).toEqual(expected);
  });

  it('should return the new page when CHANGE_PAGE is dispatched', () => {
    const mockPage = 'StarMap';
    const action = actions.changePage(mockPage);

    const expected = mockPage;
    
    expect(pageReducer(undefined, action)).toEqual(expected);
  });
});

