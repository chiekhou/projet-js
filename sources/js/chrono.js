let timerInterval;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    document.querySelector('.minutes').innerHTML = padNumber(minutes);
    document.querySelector('.seconds').innerHTML = padNumber(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
