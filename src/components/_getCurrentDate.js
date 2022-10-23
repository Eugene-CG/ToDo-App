const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const getCurrentDate = () => {
  const dateNow = new Date();
  const currentDate = {
    Day: dateNow.getUTCDate(),
    Month: monthNames[dateNow.getMonth()],
    Hours: dateNow.getHours(),
    Minutes: dateNow.getMinutes(),
    Seconds: dateNow.getSeconds(),
  };
  for (const key of Object.keys(currentDate)) {
    if (currentDate[key] < 10) {
      currentDate[key] = "0" + currentDate[key];
    }
  }
  const editTime = `${currentDate["Day"]} \
${currentDate["Month"]}, \
${currentDate["Hours"]}:\
${currentDate["Minutes"]}:\
${currentDate["Seconds"]}`;
  return editTime;
};
export { getCurrentDate };
