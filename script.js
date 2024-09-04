"use strict";
function Clock() {
    let Days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    let Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hrs = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document.getElementById("seconds");
    let period = document.getElementById("ampm");
    let day = document.getElementById("dd");
    let date = document.getElementById("ddmmyyyy");
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yyyy = time.getFullYear();
    let ampm = h <= 12 ? "AM" : "PM";
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = Days[d];
    date.innerHTML = Months[mm] + " " + dd + ", " + yyyy;
}
setInterval(Clock, 1000);
