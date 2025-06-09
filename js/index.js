const maxDeg = 10;
const main = document.getElementById('main');
const avatar = document.getElementById('main__avatar');

const moveAnimation = (clientX, clientY) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const sideX = clientX < windowWidth / 2 ? 'left' : 'right';
  const sideY = clientY < windowHeight / 2 ? 'top' : 'bottom';

  const resultXDeg = sideX === 'left'
    ? -maxDeg + clientX / (windowWidth / 2 / maxDeg)
    : (clientX - windowWidth / 2) / (windowWidth / 2 / maxDeg);

  const resultYDeg = sideY === 'top'
    ? -(-maxDeg + clientY / (windowHeight / 2 / maxDeg))
    : -((clientY - windowHeight / 2) / (windowHeight / 2 / maxDeg));

  main.style.transform =
    `translate(-50%, -50%) rotateX(${resultYDeg}deg) rotateY(${resultXDeg}deg)`;
};

const handleWindowMouseMove = (e) => {
  requestAnimationFrame(() => moveAnimation(e.clientX, e.clientY));
};

const handleWindowLoad = () => {
  document.body.classList.remove('loading');
  avatar.addEventListener('dragstart', (evt) => evt.preventDefault());

  if (screen.width >= 1280 && screen.height >= 720) {
    window.addEventListener('mousemove', handleWindowMouseMove);
  }
};

window.addEventListener('load', handleWindowLoad);
