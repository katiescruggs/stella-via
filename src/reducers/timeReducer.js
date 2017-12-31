export const timeReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_TIME':
    return {day: action.now.day, month: action.now.month, date: action.now.date, year: action.now.year};
  default:
    return state;
  }
};

