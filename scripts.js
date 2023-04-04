var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10, 
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 5,
      }
  },
  });

