export const pageReducer = (state = 'welcome', action) => {
  switch(action.type) {
  case 'CHANGE_PAGE':
    return action.page;
  default: 
    return state;
  }
};