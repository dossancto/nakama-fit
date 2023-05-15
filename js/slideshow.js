const btnNextSlide = document.querySelector("#btnNextSlide")
const btnPrevSlide = document.querySelector("#btnPrevSlide")

const slides = document.querySelectorAll(".comment-slide");

const slideslen = slides.length;

let slidecount = 0;

let skipedSlide = false;

function startSlideshow() {
  slides[0].classList.add("active-slide");
  setInterval(() => {
    if (skipedSlide) {
      skipedSlide = false;
      return
    }

    slidecount++;
    updateSlide()
  }, 3000)
}

function updateSlide() {
  if (slidecount >= slideslen) {
    slidecount = 0;
  }
  if (slidecount < 0) {
    slidecount = slideslen - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("active-slide")
  })

  slides[slidecount].classList.add("active-slide");
}

function manualSlideUpdate(foward) {
  if (foward)
    slidecount++;
  else
    slidecount--;

  skipedSlide = true;

  updateSlide()
}

btnNextSlide.addEventListener('click', () => manualSlideUpdate(true))
btnPrevSlide.addEventListener('click', () => manualSlideUpdate(false))

startSlideshow()
