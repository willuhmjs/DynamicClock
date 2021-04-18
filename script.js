let timeElement = document.getElementById("time");
let dateElement = document.getElementById("date");

let format24Time = (hour, minute) => {
  if (hour.toString().length == 1) hour = "0"+hour;
  if (minute.toString().length == 1) minute = "0"+minute;
  return `${hour}:${minute}`;
}

let format12Time = (hour, minute) => {
  let suffix = 'AM';
  if (hour > 12) {
    hour = hour-12;
    suffix = 'PM';
  }
  if (hour.toString().length == 1) hour = "0"+hour;
  if (minute.toString().length == 1) minute = "0"+minute;
  return `${hour}:${minute} ${suffix}`;
}
