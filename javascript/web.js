const date = document.getElementById("wed");
const time = new Date();
const dateAndMonth = time.toLocaleDateString();
date.innerText = dateAndMonth;



const day = document.getElementById("day");
const days = ["sun", "mon", "tues", "wed", "thus", "fri"];
const now = new Date();
const nowDay = now.getDay();
const daysName = days[nowDay];
day.innerText = daysName;