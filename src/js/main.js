const slides = document.querySelectorAll(".slider");
const leftArrow = document.querySelector(".left-arrow-container");
const rightArrow = document.querySelector(".right-arrow-container");

let curSlide = 0;
let maxSlide = slides.length;

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%`)
  );
}

function nextSlide() {
  if (curSlide + 1 === maxSlide) curSlide = 0;
  else curSlide++;

  goToSlide(curSlide);
}

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

(function init() {
  goToSlide(0);
})();
