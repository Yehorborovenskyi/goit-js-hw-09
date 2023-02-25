import '../css/common.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

stopBtn.disabled = true;
timerId = null;
startBtn.addEventListener('click', onBtnStart);

function onBtnStart() {
  timerId = setInterval(() => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
stopBtn.addEventListener('click', onBtnStop);

function onBtnStop() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
