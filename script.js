// countdown code
window.onload = function () {
  Calculate();
};
// month/data/year
// let setDate = "7/7/2024";
// let setTime = "02:32:00 PM";
let audiocontrol = document.getElementById("audiocontrol");
audiocontrol.addEventListener('click', () => {
  let bgAudio = document.getElementById("background-audio");
  bgAudio.play();
})

const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

var IntervalId;
let video = document.querySelector("#background-video");


function vidTime() {
  video.currentTime = 112;
  video.currentTime++;
  let countAud = document.querySelector("#countaudio");
  countAud.play();
}

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
      vidTime();

    } else if (timeLeft <= 0) {
      video.removeAttribute("loop");
      video.removeAttribute("autoplay");
      video.pause();
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

