// DATE DISPLAY

let hourDiv = document.getElementById('jajaja-nav-hour')
let dateDiv = document.getElementById('jajaja-nav-date')

function time() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();

  hourDiv.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
const year = date.getFullYear();

const str = `${day}/${month}/${year}`;

dateDiv.innerHTML = str;

setInterval(time, 1000);