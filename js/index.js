function handleWindowLoad() {
  document.body.className = '';
  window.removeEventListener('load', handleWindowLoad);
  document.getElementById('main__avatar').ondragstart = function() {
    return false;
  };
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#f1cc3d"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 160.3412060865523,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "left",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 641.3648243462092,
          "rotateY": 600
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 250,
          "size": 0,
          "duration": 2,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 80,
          "duration": 0.1
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  let isTimeoutActive = false;
  let timeoutId = null;
  const maxDeg = 10;
  const main = document.getElementById('main');

  if (screen.width >= 1280 && screen.height >= 720) {
    window.addEventListener('mousemove', handleWindowMouseMove);
  }
  function handleWindowMouseMove(e) {
    if (isTimeoutActive === false) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const clientX = e.clientX;
      const clientY = e.clientY;

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
      isTimeoutActive = true;
      timeoutId = setTimeout(() => {
        isTimeoutActive = false;
      }, 20);
    }
  }
}
window.addEventListener('load', handleWindowLoad);