function handleWindowLoad() {
  document.body.className = '';
  window.removeEventListener('load', handleWindowLoad);

  document.getElementById('main__avatar').ondragstart = function() {
    return false;
  };

  const maxDeg = 10;
  const main = document.getElementById('main');

  if (screen.width >= 1280 && screen.height >= 720) {
    window.addEventListener('mousemove', handleWindowMouseMove);
  }

  function handleWindowMouseMove(e) {
    requestAnimationFrame(moveAnimation.bind(null, e.clientX, e.clientY));
  }

  function moveAnimation(clientX, clientY) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let sideX = clientX < windowWidth / 2 ? 'left' : 'right';
    let sideY = clientY < windowHeight / 2 ? 'top' : 'bottom';

    let resultXDeg;
    if (sideX === 'left') {
      resultXDeg = -maxDeg + clientX / (windowWidth / 2 / maxDeg);
    } else {
      resultXDeg = (clientX - windowWidth / 2) / (windowWidth / 2 / maxDeg);
    }

    let resultYDeg;
    if (sideY === 'top') {
      resultYDeg = -(-maxDeg + clientY / (windowHeight / 2 / maxDeg));
    } else {
      resultYDeg = -((clientY - windowHeight / 2) / (windowHeight / 2 / maxDeg));
    }
    main.style.transform = 'translate(-50%, -50%)';
    main.style.transform += ` rotateX(${resultYDeg}deg)`;
    main.style.transform += ` rotateY(${resultXDeg}deg)`;
  }
}

window.addEventListener('load', handleWindowLoad);