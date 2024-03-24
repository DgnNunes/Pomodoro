let timeLeft;
let timer;
let isRunning = false;

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    const timerDisplay = document.getElementById('timer');
    const time = timerDisplay.textContent.split(':');
    const minutes = parseInt(time[0], 10);
    const seconds = parseInt(time[1], 10);

    timeLeft = minutes * 60 + seconds;

    timer = setInterval(() => {
      const minutesLeft = Math.floor(timeLeft / 60);
      const secondsLeft = timeLeft % 60;

      timerDisplay.textContent = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        timerDisplay.textContent = "Time's up!";
        isRunning = false;
      } else {
        timeLeft--;
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  document.getElementById('timer').textContent = '25:00';
}