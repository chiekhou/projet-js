let timerInterval;
let totalTimeInSeconds = 0;
let timeRemainingInSeconds = 0;

function startTimer() {
  totalTimeInSeconds = timeRemainingInSeconds;
  timerInterval = setInterval(function() {
    if (totalTimeInSeconds === 0) {
      stopTimer();
      alert("Fin du temps !");
    } else {
      totalTimeInSeconds--;
      let minutes = Math.floor(totalTimeInSeconds / 60);
      let seconds = totalTimeInSeconds % 60;
      document.querySelector('.minutes').innerHTML = padNumber(minutes);
      document.querySelector('.seconds').innerHTML = padNumber(seconds);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  totalTimeInSeconds = 0;
  timeRemainingInSeconds = 0;
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
  document.getElementById('minutes-input').value = '0';
  document.getElementById('seconds-input').value = '0';
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

document.getElementById('start').addEventListener('click', function() {
  let minutes = parseInt(document.getElementById('minutes-input').value);
  let seconds = parseInt(document.getElementById('seconds-input').value);
  timeRemainingInSeconds = minutes * 60 + seconds;
  startTimer();
});

document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
