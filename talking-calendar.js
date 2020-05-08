const talkingCalendar = function(date) {
  let dateObj = new Date(date);

  let day = dateObj.getDate();
  let month = getMonthName(dateObj);
  let year = dateObj.getFullYear();

  return `${month} ${day}${getNth(day)}, ${year}`;
};

const getNth = (d) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
  case 1:  return "st";
  case 2:  return "nd";
  case 3:  return "rd";
  default: return "th";
  }
};

const getMonthName = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  return monthNames[date.getMonth()];
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));