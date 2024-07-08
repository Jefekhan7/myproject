// countdown code
window.onload = function () {
  Calculate();
};

// month/data/year
// let setDate = "7/7/2024";
// let setTime = "02:32:00 PM";

let bgAudio = document.getElementById("background-audio");


const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

var IntervalId;
let video = document.querySelector("#background-video");

function Calculate() {
  let currentDate = new Date();
  const endTime = currentDate.setMinutes(currentDate.getMinutes() + 1);
  // const endTime = new Date(setDate + " " + setTime);
  IntervalId = setInterval(() => CalculateTime(endTime), 1000);
}

function CalculateTime(endTime) {
  const currentTime = new Date();

  const timeLeft = (endTime - currentTime) / 1000;
  if (endTime > currentTime) {
    console.log(timeLeft);

    if (timeLeft >= 0 && timeLeft <= 11) {
      let div = document.querySelector(".main-container").classList.add("hide");
      video.currentTime = 112;
      video.currentTime++;
      
    }
    
    if(timeLeft <= 0) {
      let element = document.querySelector("#background-video").classList.add("hide");
    }
    Days.innerHTML = Math.floor(timeLeft / (24 * 60 * 60));
    Hours.innerHTML = Math.floor((timeLeft / (60 * 60)) % 24);
    Minutes.innerHTML = Math.floor((timeLeft / 60) % 60);
    Seconds.innerHTML = Math.floor(timeLeft % 60);
  } else {
    clearInterval(IntervalId);
    Days.innerHTML = 0;
    Hours.innerHTML = 0;
    Minutes.innerHTML = 0;
    Seconds.innerHTML = 0;
  }
}
