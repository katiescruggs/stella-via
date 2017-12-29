export const pageReducer = (state = 'welcome', action) => {
  switch(action.type) {
    case 'CHANGE_PAGE':
      console.log(action.page);
      return action.page;
    default: 
      return state;
  }
};