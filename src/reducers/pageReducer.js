export const pageReducer = (state = '', action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      return action.page;
    default: 
      return state;
  }
};