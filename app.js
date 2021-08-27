var startDateTime = new Date(2021, 8, 1, 20);

var days = document.querySelector("#timer-days-value");
var hours = document.querySelector("#timer-hours-value");
var minutes = document.querySelector("#timer-minutes-value");
var seconds = document.querySelector("#timer-seconds-value");

var timerContainer = document.getElementById("counterTimer");

var cancelInterval;

cancelInterval = setInterval(function () {
  var currentDateTime = new Date();
  var diffDateTime = startDateTime - currentDateTime;

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
    var newDiv = document.createElement("div");
    newDiv.innerText = `Курс уже стартовал ${dateTimeString(startDateTime)}`;
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
      return "август";
    case 9:
      return "сентябрь";
    case 10:
      return "октябрь";
    default:
      break;
  }
}