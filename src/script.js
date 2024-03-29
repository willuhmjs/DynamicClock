let timeElement = document.getElementById("time");
let dateElement = document.getElementById("date");
let twentyFourHour = false;

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

let setBackground = (hour) => {
  let bgColor = "";
  if (hour >= 6 && hour <= 9) {
    // Morning
    bgColor = colors.morning
  } else if (hour >= 10 && hour <= 17) {
    // Day
    bgColor = colors.day
  } else if (hour >= 18 && hour <= 20) {
    // Evening
    bgColor = colors.evening
  } else {
    bgColor = colors.night
  }

  document.body.style.backgroundColor = bgColor;
}

let formatDate = (date) => {
  let month = date.getMonth();
  let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let day = date.getDate();
  let year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`
}

let toggle24 = () => {
  if (twentyFourHour) {
    twentyFourHour = false;
  } else {
    twentyFourHour = true;
  }
}

setInterval(() => {
  let now = new Date();
  let [hour, minute] = [now.getHours(), now.getMinutes()]
  setBackground(hour);
  dateElement.innerHTML = formatDate(now);

  if (twentyFourHour) { // Render 24 hour time
    timeElement.innerHTML = format24Time(hour, minute)
  } else {
    timeElement.innerHTML = format12Time(hour, minute)
  }
  
}, 125)