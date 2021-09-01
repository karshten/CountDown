const startDateTime = new Date(2021, 7, 1, 22, 30, 10, );
const days = document.querySelector("#timer-days-value"); const hours = document.querySelector("#timer-hours-value"); const minutes = document.querySelector("#timer-minutes-value"); const seconds = document.querySelector("#timer-seconds-value");
const timerContainer = document.getElementById("counterTimer");

let cancelInterval;

cancelInterval = setInterval(function () {
  const currentDateTime = new Date();
  const diffDateTime = startDateTime - currentDateTime;

  if (diffDateTime > 0) {
    days.innerHTML = Math.floor(diffDateTime / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor(
      (diffDateTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    minutes.innerHTML = Math.floor(
      (diffDateTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    seconds.innerHTML = Math.floor((diffDateTime % (1000 * 60)) / 1000);
  } else {
    const newDiv = document.createElement("div");
    newDiv.innerText = `Курс уже стартовал ${dateTimeString(startDateTime)} ${secondsToTime(startDateTime)}`;
    newDiv.classList.add("counter-big-text");
    timerContainer.innerHTML = "";
    timerContainer.appendChild(newDiv);
    clearInterval(cancelInterval);
  }
}, 1000);
//365 = 3 * 100 + 6 * 10 + 5 * 1
//365 % 100 = 65 / 10 = 6.5 = 6

function dateTimeString(date) {
  return `${date.getDate()} ${convertMonthInWord(
    date.getMonth()
  )} ${date.getFullYear()}`;
}

function convertMonthInWord(monthNum) {
  monthNum++;
  switch (monthNum) {
    case 1:
      return "январь";
    case 8:
      return "августа";
    case 9:
      return "сентябрь";
    case 10:
      return "октябрь";
    default:
      break;
  }
}
 function secondsToTime(sec) {
   return `${sec.getHours()} ${(
       sec.getMinutes()
   )} ${sec.getSeconds()}`;
 }