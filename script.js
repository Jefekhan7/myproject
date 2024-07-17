// countdown code
window.onload = function () {
  // Calculate();
};

// month/data/year
// let setDate = "7/7/2024";
// let setTime = "02:32:00 PM";

const audiobutton = document.querySelector("#toggleaudio");

const Days = document.querySelector("#days");
const Hours = document.querySelector("#hours");
const Minutes = document.querySelector("#minutes");
const Seconds = document.querySelector("#seconds");

var IntervalId;
let video = document.querySelector("#background-video");
let audio = document.querySelector("#background-audio");

audiobutton.addEventListener('touchstart', toggleAudio);
audiobutton.addEventListener('click', toggleAudio);

let isAudioPlaying = false;
function toggleAudio() {
 
  if (isAudioPlaying) {
    audio.pause();
    
    document.querySelector(".fa-solid").classList.remove("fa-pause");
    document.querySelector(".fa-solid").classList.add("fa-play");
  } else {
    audio.play();
    document.querySelector(".fa-solid").classList.add("fa-pause");
    document.querySelector(".fa-solid").classList.remove("fa-play");
    
  }
  isAudioPlaying = !isAudioPlaying;
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

    if (timeLeft <= 11) {
      clearInterval(IntervalId);
      audiobutton.removeEventListener('touchstart', toggleAudio);
      audiobutton.removeEventListener('click', toggleAudio);
      audio.pause();
      let div = document.querySelector(".main-container").classList.add("hide");
      video.currentTime = 109;
      video.currentTime++;
      //****** *
      var btn = document.getElementById('count-down');
      btn.classList.remove('hide');
      var msg = document.getElementById('show-tensecond');

      
      let tensecondaudio = document.querySelector("#countaudio");
   
      btn.addEventListener('click',() => {
        var seconds = 11;
        tensecondaudio.play();
        btn.classList.add('hide');
        msg.classList.remove('hide');
        function tick() {
            seconds--;
            msg.innerHTML = seconds;
            console.log(seconds);
            if (seconds > 0) {
                setTimeout(tick, 1150); // Call tick again after 1 second
            } else {
               window.location.href = 'secondpage.html';
                // Here you can perform any actions you want after countdown finishes
            }
        }

        tick(); // Start the countdown
      })
    }

    if (timeLeft <= 0) {
      let element = document
        .querySelector("#background-video")
        .classList.add("hide");
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


