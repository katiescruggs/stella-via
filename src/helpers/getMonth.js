export const months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
];

export const getMonth = () => {
  const monthIndex = new Date().getMonth();
  const currentMonth = months[monthIndex];
  const { lastMonth, nextMonth } = getLastNextMonth(monthIndex);

  return { currentMonth, lastMonth, nextMonth };  
};

export const getLastNextMonth = (monthIndex) => {
  const lastMonth = monthIndex === 0 ? 'December' : months[monthIndex - 1];
  const nextMonth = monthIndex === 11 ? 'January' : months[monthIndex + 1];

  return { lastMonth, nextMonth };
};
