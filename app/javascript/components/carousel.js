import photo1 from '../../assets/images/photo1.jpeg';
import photo2 from '../../assets/images/photo2.jpeg';
import photo3 from '../../assets/images/photo3.jpeg';
import photo4 from '../../assets/images/photo4.jpeg';
import photo5 from '../../assets/images/photo5.jpeg';
import photo6 from '../../assets/images/photo6.jpeg';
import photo7 from '../../assets/images/photo7.jpeg';

import square from '../../assets/images/interface/square.png';
import squareselected from '../../assets/images/interface/square-selected.png';

function slidesTB() {
  return [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
  ];
}
const slides = slidesTB();

const TIMER_DIRECTION_FORWARD = 1;
const TIMER_DIRECTION_BACKWARDS = -1;
let TIMER_INTERVAL = 1000;

let timer = null;
let currentIndex = 0;
let timerDirection = TIMER_DIRECTION_FORWARD;

function loadSlides() {
  const slider = document.getElementById('slider');
  const footer = document.getElementById('carousel-footer');
  for (let index = 0; index < slides.length; index += 1) {
    const slideImage = slides[index];

    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');
    img.setAttribute('src', slideImage);
    slide.appendChild(img);

    slider.appendChild(slide);

    const indexButton = document.createElement('div');
    indexButton.className = 'indexButton';
    const image = document.createElement('image');
    image.src = square;
    indexButton.appendChild(image);
    footer.appendChild(indexButton);
  }
}

function highlightIndex(index) {
  const indexButtons = document.getElementsByClassName('indexButton');
  for (let i = 0; i < indexButtons.length; i += 1) {
    indexButtons[i].className = 'indexButton';
  }
  indexButtons[index].className = 'indexButton indexSelected';
}

function slideTo(index) {
  currentIndex = index;
  const slider = document.getElementById('slider');
  const xSlide = document.getElementById('viewer').offsetWidth;
  const left = -(index * xSlide);
  slider.style.left = left.toString().concat('px');
  highlightIndex(index);
}

function resize() {
  const xSlide = document.getElementById('viewer').offsetWidth;
  const slider = document.getElementById('slider');
  slider.style.width = (xSlide * slides.length).toString().concat('px');
  slideTo(0);
}

function timerControl() {
  return setInterval(() => {
    if ((timerDirection === TIMER_DIRECTION_FORWARD) && (currentIndex === (slides.length - 1))) {
      timerDirection = TIMER_DIRECTION_BACKWARDS;
    } else if ((timerDirection === TIMER_DIRECTION_BACKWARDS) && (currentIndex === 0)) {
      timerDirection = TIMER_DIRECTION_FORWARD;
    }
    slideTo((currentIndex + timerDirection) % slides.length);
    // const wheel = document.getElementById('wheel');
    // wheel.style.transition = 'transform '.concat((5 * (TIMER_INTERVAL / 1000)).toString()).concat('s linear');
    // wheel.style.transform = 'rotate('.concat((timerDirection * 360 * (TIMER_INTERVAL / 1000)).toString().concat('deg')).concat(')');
  }, TIMER_INTERVAL);
}

function addListeners() {
  window.addEventListener('load', () => {
    resize();
  });

  window.addEventListener('resize', () => {
    resize();
  });

  const indexButtons = document.getElementsByClassName('indexButton');
  for (let i = 0; i < indexButtons.length; i += 1) {
    indexButtons[i].addEventListener('click', () => {
      slideTo(i);
    });
  }

  document.getElementById('leftArrow').addEventListener('click', () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  });

  document.getElementById('rightArrow').addEventListener('click', () => {
    if (currentIndex < (slides.length - 1)) {
      slideTo(currentIndex + 1);
    }
  });

  // document.getElementById('wheel').addEventListener('click', () => {
  //   if (timer) {
  //     clearInterval(timer);
  //     timer = null;
  //   } else {
  //     timer = timerControl();
  //   }
  // });

  // document.getElementById('minus').addEventListener('click', () => {
  //   if (TIMER_INTERVAL > 1000) {
  //     TIMER_INTERVAL -= 1000;
  //     clearInterval(timer);
  //     timer = timerControl();
  //     if (TIMER_INTERVAL === 1000) {
  //       document.getElementById('minus').style.opacity = 0.5;
  //     }
  //   }
  // });

  // document.getElementById('plus').addEventListener('click', () => {
  //   TIMER_INTERVAL += 1000;
  //   clearInterval(timer);
  //   timer = timerControl();
  //   document.getElementById('minus').style.opacity = 1;
  // });
}

function carouselInit() {
  loadSlides();
  addListeners();
  // timer = timerControl();
}

export default carouselInit;
