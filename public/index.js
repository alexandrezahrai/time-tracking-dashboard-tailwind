// Elements
const dailyButton = document.getElementById("daily-btn");
const weeklyButton = document.getElementById("weekly-btn");
const monthlyButton = document.getElementById("monthly-btn");
const buttons = [dailyButton, weeklyButton, monthlyButton];

const activityNames = document.querySelectorAll(".activity-name");
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".past-hours");

// Functions
async function logActivities(timeframe) {
  const response = await fetch("data.json");
  const data = await response.json();

  const names = data.map((a) => a.title);
  activityNames.forEach((activityName, index) => {
    activityName.innerHTML = names[index];
  });

  let hours;
  if (timeframe === "daily") {
    hours = {
      curHrs: data.map((a) => a.timeframes.daily.current),
      prevHrs: data.map((b) => b.timeframes.daily.previous),
    };
  } else if (timeframe === "weekly") {
    hours = {
      curHrs: data.map((a) => a.timeframes.weekly.current),
      prevHrs: data.map((b) => b.timeframes.weekly.previous),
    };
  } else {
    hours = {
      curHrs: data.map((a) => a.timeframes.monthly.current),
      prevHrs: data.map((b) => b.timeframes.monthly.previous),
    };
  }
  currentHours.forEach((currentHour, index) => {
    currentHour.innerHTML = `${hours.curHrs[index]}hrs`;
  });
  previousHours.forEach((previousHour, index) => {
    previousHour.innerHTML = `&nbsp;${hours.prevHrs[index]}hrs`;
  });
}

logActivities("weekly"); // set default timeframe

function handleButtons(buttonType) {
  buttons.forEach((button) => {
    button.classList.replace("text-white", "text-neutral-desaturated-blue");
  });

  buttonType.classList.replace("text-neutral-desaturated-blue", "text-white");
}

// Events Listeners
dailyButton.addEventListener("click", function () {
  logActivities("daily");
  handleButtons(dailyButton);
});

weeklyButton.addEventListener("click", function () {
  logActivities("weekly");
  handleButtons(weeklyButton);
});

monthlyButton.addEventListener("click", function () {
  logActivities("monthly");
  handleButtons(monthlyButton);
});
