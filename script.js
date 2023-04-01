const carousel = document.querySelector('.carousel')
const slides = carousel.querySelectorAll('.carousel__slide')
const prevButton = carousel.querySelector('.carousel__prev')
const nextButton = carousel.querySelector('.carousel__next')

let currentSlide = 0

function showSlide(slideIndex) {
  slides.forEach((slide) => slide.classList.remove('active'))
  slides[slideIndex].classList.add('active')
  currentSlide = slideIndex
}

prevButton.addEventListener('click', () => {
  currentSlide--
  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }
  showSlide(currentSlide)
})

nextButton.addEventListener('click', () => {
  currentSlide++
  if (currentSlide > slides.length - 1) {
    currentSlide = 0
  }
  showSlide(currentSlide)
})

// function autoPlaySlide() {
//   currentSlide++;
//   if (currentSlide > slides.length - 1) {
//     currentSlide = 0;
//   }
//   showSlide(currentSlide);
// }

// setInterval(() => {
//   autoPlaySlide();
// }, 1000);

showSlide(currentSlide)
