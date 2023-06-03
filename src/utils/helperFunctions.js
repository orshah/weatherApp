export const getTodayDay = () => {
  let dayOfWeek = new Date().getDay();

  switch (dayOfWeek) {
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    case 7:
      dayOfWeek = "Sunday";
  }
  return dayOfWeek;
};

export const monthName = () => {
  let month = new Date().getMonth();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
    case 7:
      month = "August";
    case 8:
      month = "September";
    case 9:
      month = "October";
    case 10:
      month = "November";
    case 11:
      month = "December";
  }
  return month;
};
