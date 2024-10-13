let date = document.getElementById("number");
let days = document.getElementById("day");
let months = document.getElementById("month");
let years = document.getElementById("year");

const today = new Date();

const weeks = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const year = ["January","February","March","April","June","July","August","September","October","November","December"];

date.innerHTML = today.getDate();
days.innerHTML = weeks[today.getDay()];
months.innerHTML = year[today.getMonth()];
years.innerHTML = today.getFullYear();
