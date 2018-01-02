export const pageReducer = (state = 'Welcome', action) => {
  switch(action.type) {
  case 'CHANGE_PAGE':
    return action.page;
  default: 
    return state;
  }
};