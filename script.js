const timeEle = document.getElementById('time');
const startBtn = document.getElementById('play');
const stopBtn = document.getElementById('pause');
const replayBtn = document.getElementById('replay');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer(){
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeEle.textContent = formatTime(elapsedTime);
  }, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function formatTime(elapsedTime) {
  const millisecond = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((elapsedTime / (1000 * 60 * 60)));
  return(
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (millisecond > 9 ? millisecond : "0" + millisecond)
  );
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
function resetTimer() {
  clearInterval(timerInterval);

  elapsedTime = 0;
  timeEle.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = true;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
replayBtn.addEventListener("click", resetTimer);