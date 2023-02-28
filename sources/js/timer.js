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
      let minutes1 = Math.floor(totalTimeInSeconds / 60);
      let seconds1 = totalTimeInSeconds % 60;
      document.querySelector('.minutes1').innerHTML = padNumber(minutes1);
      document.querySelector('.seconds1').innerHTML = padNumber(seconds1);
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
  document.querySelector('.minutes1').innerHTML = '00';
  document.querySelector('.seconds1').innerHTML = '00';
  document.getElementById('minutes-input').value = '0';
  document.getElementById('seconds-input').value = '0';
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}

document.getElementById('start1').addEventListener('click', function() {
  let minutes1 = parseInt(document.getElementById('minutes-input').value);
  let seconds1 = parseInt(document.getElementById('seconds-input').value);
  timeRemainingInSeconds = minutes1 * 60 + seconds1;
  startTimer();
});

document.getElementById('stop1').addEventListener('click', stopTimer);
document.getElementById('reset1').addEventListener('click', resetTimer);
