let sec = document.querySelector(".seconds");
let ms = document.querySelector(".miliseconds");
let startbtn = document.querySelector("#start");
let stoptbtn = document.querySelector("#stop");
let resetbtn = document.querySelector("#reset");
let milisec = 0;
let seconds = 0;

function timer() {
  milisec++;
  if (milisec < 10) {
    ms.innerHTML = "0" + milisec;
  }
  milisec < 10 ? (milisec = "0" + milisec) : (milisec = milisec);
  ms.innerHTML = milisec;
  if (milisec > 99) {
    seconds++;
    sec.innerHTML = seconds;
    milisec = 0;
    ms.innerHTML = "0" + 0;
  }
  if (seconds < 10) {
    sec.innerHTML = "0" + seconds;
  }
}

startbtn.addEventListener("click", () => {
  timerInterval = setInterval(timer, 10);
});

stoptbtn.addEventListener("click", () => {
  clearInterval(timerInterval);
});

stoptbtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  milisec = 00;
  seconds = 00;
  ms.innerHTML = milisec;
  sec.innerHTML = seconds;
});
