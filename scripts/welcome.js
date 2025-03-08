document.addEventListener("DOMContentLoaded", function () {
  // Hide loader after page load
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.style.display = 'none';
  }

  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider-controls .prev');
  const nextBtn = document.querySelector('.slider-controls .next');
  const dotsContainer = document.querySelector('.dots');
  let currentSlide = 0;
  let slideInterval;

  // Dynamically create dots for each slide
  slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function goToSlide(n) {
    // Remove active classes from current slide and dot
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    // Calculate the new slide index, wrapping around if needed
    currentSlide = (n + slides.length) % slides.length;
    // Add active classes to new slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  // Set up event listeners for navigation buttons
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Auto-play slider every 5 seconds
  function startInterval() {
    slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  startInterval();
});
