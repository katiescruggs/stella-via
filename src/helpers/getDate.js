const days = ['Sunday', 'Monday', 'Tuesday', 'Wed', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];

const getDate = () => {
  const now = new Date();
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();

  return {day, month, date, year};
};

export default getDate;