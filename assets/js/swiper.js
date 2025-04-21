const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
      delay: 7500,           // Delay between transitions (3 seconds)
      disableOnInteraction: false, // Continue auto-scrolling even after user interaction
    },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // Responsise Breakpoints
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      620: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      }
  }
});