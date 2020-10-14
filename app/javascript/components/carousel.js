import { gel, crel } from '../utils';
import photo1 from '../../assets/images/photo1.jpeg';
import photo2 from '../../assets/images/photo2.jpeg';
import photo3 from '../../assets/images/photo3.jpeg';
import photo4 from '../../assets/images/photo4.jpeg';
import photo5 from '../../assets/images/photo5.jpeg';
import photo6 from '../../assets/images/photo6.jpeg';
import photo7 from '../../assets/images/photo7.jpeg';

import wheelImage from '../../assets/images/interface/gear-2-64.png';

let CLOCK_ROUNDS = 0;

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
const TIMER_INTERVAL = 2000;

let timer = null;
let currentIndex = 0;
let timerDirection = TIMER_DIRECTION_FORWARD;

function loadSlides() {
  const slider = gel('slider');
  const footer = gel('carousel-footer');
  for (let index = 0; index < slides.length; index += 1) {
    const slideImage = slides[index];

    const slide = crel('div');
    slide.className = 'slide';
    const img = crel('img');
    img.setAttribute('src', slideImage);
    slide.appendChild(img);

    slider.appendChild(slide);

    const indexButton = crel('div');
    indexButton.className = 'indexButton';
    footer.appendChild(indexButton);

    gel('wheel').style.backgroundImage = wheelImage;
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
  const slider = gel('slider');
  const xSlide = gel('viewer').offsetWidth;
  const left = -(index * xSlide);
  slider.style.left = left.toString().concat('px');
  highlightIndex(index);
}

function resize() {
  const viewer = gel('viewer');
  if (viewer) {
    const xSlide = viewer.offsetWidth;
    const slider = gel('slider');
    slider.style.width = (xSlide * slides.length).toString().concat('px');
    slideTo(0);
  }
}

function timerControl() {
  CLOCK_ROUNDS = 0;
  return setInterval(() => {
    CLOCK_ROUNDS += 1;
    if ((timerDirection === TIMER_DIRECTION_FORWARD) && (currentIndex === (slides.length - 1))) {
      timerDirection = TIMER_DIRECTION_BACKWARDS;
    } else if ((timerDirection === TIMER_DIRECTION_BACKWARDS) && (currentIndex === 0)) {
      timerDirection = TIMER_DIRECTION_FORWARD;
    }
    slideTo((currentIndex + timerDirection) % slides.length);
    const wheel = gel('wheel');
    wheel.style.transform = 'rotate('.concat((timerDirection * 90 * CLOCK_ROUNDS).toString().concat('deg')).concat(')');
  }, TIMER_INTERVAL);
}

export function stopTimer() {
  clearInterval(timer);
  timer = null;
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

  gel('leftArrow').addEventListener('click', () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  });

  gel('rightArrow').addEventListener('click', () => {
    if (currentIndex < (slides.length - 1)) {
      slideTo(currentIndex + 1);
    }
  });

  const wheel = gel('wheel');
  wheel.addEventListener('click', () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
      wheel.style.backgroundColor = 'rgba(137, 199, 0, 0.3)';
      wheel.style.boxShadow = 'none';
    } else {
      timer = timerControl();
      wheel.style.backgroundColor = 'rgba(137, 199, 0, 0.9)';
      wheel.style.boxShadow = '0 0 3px 3px rgba(137, 199, 0, 0.2)';
    }
  });
}

function carouselInit() {
  loadSlides();
  addListeners();
  timer = timerControl();
}

export default carouselInit;
