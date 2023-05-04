import { getRandomHexColor } from '../helpers/getRandomHexColor';

const body = document.querySelector('body');
const startBtn = document.querySelector('body button[data-start]');
const stopBtn = document.querySelector('body button[data-stop]');

startBtn.addEventListener('click', onClick);
let colorTimeChange = null;
function onClick() {
  startBtn.setAttribute('disabled', 'true');

  colorTimeChange = setInterval(() => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
}
stopBtn.addEventListener('click', onStopClick);

function onStopClick() {
  clearInterval(colorTimeChange);
  startBtn.removeAttribute('disabled', 'true');
  startBtn.setAttribute('active', 'true');
}
