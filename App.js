let daysitem = document.getElementById("days");
let hoursitem = document.getElementById("hours");
let minitem = document.getElementById("min");
let secitem = document.getElementById("sec");

let countDown = () => {
  let futureDate = new Date ("16 June, 2024");
  let currentDate = new Date ();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
  let min = Math.floor(myDate / 1000 / 60 ) % 60;
  let sec = Math.floor (myDate /1000 ) % 60;

  daysitem.innerText = days;
  hoursitem.innerText = hours;
  minitem.innerText = min;
  secitem.innerText = sec;

}

  countDown();

  setInterval(countDown,1000)

