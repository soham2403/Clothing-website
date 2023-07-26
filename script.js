const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const prevBtn = carousel.querySelector('#prevBtn');
const nextBtn = carousel.querySelector('#nextBtn');

let currentIndex = 0;
const totalItems = carouselItems.length;
let autoSlideTimer;

function showItem(index) {
  if (index < 0 || index >= totalItems) {
    return;
  }
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function startAutoSlide() {
  stopAutoSlide(); // Stop any previous timers
  autoSlideTimer = setInterval(() => {
    showItem((currentIndex + 1) % totalItems);
  }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
}

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  showItem(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  showItem(currentIndex + 1);
});

carousel.addEventListener('mouseenter', stopAutoSlide);
carousel.addEventListener('mouseleave', startAutoSlide);

// Start auto slide initially
startAutoSlide();